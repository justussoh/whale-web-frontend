import React from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';

class Document extends React.Component {

    state = {
        selectedFile: null,
        loaded:0
    };

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post("/documents/create", {
            title:this.state.selectedFile.name,
            file_path: data,
            user_id:this.props.user.id
        }).then(res=>{
            console.log(res.data)
        })
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