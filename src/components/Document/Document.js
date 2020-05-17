import React from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';

class Document extends React.Component {

    state = {
        selectedFile: null,
        loaded:0,
        document:{}
    };

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };

    onClickHandler = () => {
        axios.post("/documents/create", {
            title: this.state.selectedFile.name,
            user_id: this.props.user.id,
        }).then(res=>{
            let document = res.data;
            axios.post("/documents/uploadDoc", {
                id: document.id,
                file_name:this.state.selectedFile,
            }).then(res=>{
                console.log(res.data)
                this.setState({document:document})
            })
        });

    };

    render() {
        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>
            </Container>
        )

    }

}

export default Document;