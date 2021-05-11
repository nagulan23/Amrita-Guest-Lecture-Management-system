import React, { Component } from 'react';
import './participant_list.css';
import axios from "axios";

class ParticipantList extends Component {
    constructor(props) {
        super(props) ;
        this.getData();
     }

    state = { 
        email: []
    }

    async getData(){
        var email=[];
        await axios.post(`http://localhost:3000/getParticipants`,{'id':this.props.lecture_id}).then((res) => {
            email=res.data;
        });
        this.setState({email:email});
    }

    renderTableHeader() {
        return (
            <>
                <th key={0}>SNO</th>
                <th key={1}>EMAIL</th>
            </>
        );
     }
    renderTableData() {
        return this.state.email.map( (e, index)  => {
           return (
              <tr key={e['email']} style={{border:"solid 2px lightgrey"}}>
                <td style={{border:"solid 2px lightgrey"}}>{index+1}</td>
                 <td style={{border:"solid 2px lightgrey"}}>{e['email']}</td>
              </tr>
           );
        })
     }
  

    render() { 
        return (
            <div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
               { 
                (this.props.registered.length==0)?
                <>
                    <img src={"https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg?size=626&ext=jpg"} alt=""/>
                    <div style={{fontSize:"20px",fontWeight:"bold"}}>No participants yet</div>
                </>:
                <>
                    <div
                            id="about"
                            style={{
                            padding: "20px",
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "#282c34",
                            textAlign: "left",
                            width:"100%",
                            }}
                        >
                            Participant List
                        </div>
                    <table id='students' style={{width: "60%"}}>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </>
                }
            </div>
        );
    }
}
 
export default ParticipantList;