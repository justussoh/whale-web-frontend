import React, { useState, useEffect, useContext, createContext } from "react";
import  axios from "axios";

const authContext = createContext(null);

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        return axios.post('/users/login', {
            nric:email,
            password:password
        }).then(res => {
            if (res.status === 200) {
                let user = res.data;
                setUser(user);
                setLocalStorageStatus(user);
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const setLocalStorageStatus = (user) => {
        window.localStorage.setItem("userId", JSON.stringify(user.id));
    };

    const signUp = (email, firstName, lastName, contactNumber, password) => {
        return axios.post('/api/users', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            contactNumber: contactNumber,
            password: password,
        }).then(res => {
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const signOut = () => {
        return axios.post('/api/auth/signout', {
            user: user
        }).then(res => {
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                setUser(false);
                return res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    };

    const loadAuthFromStore = () =>{
        const localUserId = localStorage.getItem("userId");
        if (localUserId) {
            axios.get(`/users/retrieveById?id=${localUserId}`).then(res => {
                if (res.status === 200) {
                    let user = res.data;
                    setUser(user);
                    setLocalStorageStatus(user);
                }
            }).catch(err => {
                console.log(err);
            });
            return user
        } else {
            return false;
        }
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        loadAuthFromStore();
        // Cleanup subscription on unmount
        // return () => unsubscribe();
    }, [user]);

    // Return the user object and auth methods
    return {
        user,
        signIn,
        signUp,
        signOut,
        loadAuthFromStore,
    };
}