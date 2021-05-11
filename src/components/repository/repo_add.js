import React, { Component } from 'react';
import Spinner from "react-spinkit";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Repo_add extends Component {
    state = { 
        url:"",
        name:"",
        type:"PDF",
        loading:false
     }
    async handleCreate(event) {
        event.preventDefault();
        this.setState({ loading: true });
        var data={
            "lecture_id":this.props.lecture_id,
            "name":this.state.name,
            "type":this.state.type,
            "url":this.state.url
        }
        console.log(data);
        await axios.post(`http://localhost:3000/addFile`, data)
        .then((res) => {
            console.log(res);
            NotificationManager.success('Added content','Success!' );
        });
        this.setState({ loading: false });
    }
    
      handleChange(cat,event) {
        this.setState({ error: "" });
        if(cat==0)
        this.setState({ name: event.target.value });
        if(cat==1)
        this.setState({ type: event.target.value });
        if(cat==2)
        this.setState({ url: event.target.value });
      }
    
    render() { 
        return ( 
            <div>
                <div
                    id="syllabus"
                    style={{
                    padding: "20px",
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "#363636",
                    }}
                >
                    Adding content to AGLM-Repo
                </div>
                <form
                    onSubmit={this.handleCreate.bind(this)}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "40px",
                        marginBottom: "0px",
                        rowGap: "10px",
                    }}
                    >
                    <p>{"Kindly upload the file you need to post into your Google drive and paste the editable link by everyoe below."}</p>
                    <a href="https://support.google.com/docs/answer/2494822?co=GENIE.Platform%3DDesktop&hl=en"> Reference Link</a>
                    <label>
                        {"Type: "}
                        <select onChange={this.handleChange.bind(this,1)}>
                            <option value="PDF">PDF</option>
                            <option value="DOC">DOC</option>
                            <option value="MP4">MP4</option>
                            <option value="PNG">PNG</option>
                            <option value="JPG">JPG</option>
                            <option value="Other">Web link</option>
                        </select>
                    </label>
                    {(this.state.type==="PDF" || this.state.type==="DOC" || this.state.type==="MP4")?<label>
                        {"File name: "}
                        <input
                        name="name"
                        type="name"
                        onChange={this.handleChange.bind(this,0)}
                        required
                        />
                    </label>:<div/>}
                    <label>
                        {"URL: "}
                        <input
                        name="name"
                        type="name"
                        onChange={this.handleChange.bind(this,2)}
                        required
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                        width: "25%",
                        margin: "20px",
                        backgroundColor: "orangered",
                        color: "white",
                        borderRadius: "20px",
                        padding: "10px",
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        }}
                    >
                        {this.state.loading ? <Spinner name="circle" /> : "Create Lecturer"}
                    </button>
                </form>
                <NotificationContainer/>
            </div>
         );
    }
}
 
export default Repo_add;