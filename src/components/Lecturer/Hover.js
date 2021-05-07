import ReactDOM from 'react-dom';
import './Hover.css';
import React, { Component } from 'react';

class Hover extends Component {
  state = {  }
  render() { 
    console.log(this.props.data)
    return (
      <div style={{borderRadius: '20px',margin:"20px",boxShadow:"0 0 10px black",backgroundColor:"white"}}> 
        <div class="HOVcontent">
          <div class="HOVcontent-overlay"></div>
          <img class="HOVcontent-image" src={this.props.data.url}/>
          <div class="HOVcontent-details fadeIn-bottom">
            <h3 class="HOVcontent-title">{this.props.data.date}</h3>
            <p class="HOVcontent-text">{this.props.data.des}</p>
          </div>
        </div>
        <div style={{width:"100%",padding:"10px",textAlign:"center",fontWeight:"bold"}}>{this.props.data.title}</div>
      </div>
    );
  }
}
 
export default Hover;