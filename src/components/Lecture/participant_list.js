import React, { Component } from 'react';
import './participant_list.css';

class ParticipantList extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           students: [
              {  email: 'wasif@email.com' },
              {  email: 'ali@email.com' },
              {  email: 'saad@email.com' },
              {  email: 'asad@email.com' }
           ]
        }
     }

    state = {  }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return (
            <>
                <th key={0}>SNO</th>
                <th key={1}>EMAIL</th>
            </>
        );
     }
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { email } = student //destructuring
           return (
              <tr key={email} style={{border:"solid 2px lightgrey"}}>
                <td style={{border:"solid 2px lightgrey"}}>{index+1}</td>
                 <td style={{border:"solid 2px lightgrey"}}>{email}</td>
              </tr>
           );
        })
     }
  

    render() { 
        return (
            <div style={{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"}}>
               { 
                (this.state.students.length==0)?
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