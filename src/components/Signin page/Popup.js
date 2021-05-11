import React, { Component, useState } from 'react';
import './Popup.css';
import firebase from 'firebase';
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {emailid : "",scene: false, wrong: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    handleClick () {
        this.props.toggle();
      };
      handleChange(e) {
        this.setState({emailid: e.target.value});
      };
      handler() {
        this.handleSubmit();
        this.handleClick();
      }

      async handleSubmit (e) {
        e.preventDefault();
        this.setState({
          scene:true
      })
          firebase.auth().sendPasswordResetEmail(this.state.emailid).then(function() {
              console.log("sent");
            }).catch(function(error) {
                console.log(error)
            });
      }
    

    turnon (){
        this.setState({
            scene: !this.state.scene
           });
    }
    render() {
        return (
        <div>
        {!this.state.scene?
          <div className="modala">
            <div className="modal_contenta">
            <div className="closea" onClick={this.handleClick.bind(this)}>
                &times;
              </div>
              <form onSubmit = {this.handleSubmit.bind(this)}>
                <div className = "opena">
                  <p>Enter your Email address</p>
                  </div>
                <div className = "commona">
                  Email:
                  </div>
                  <input type="text1" id="pin" name="pin" onChange = {this.handleChange}/>
                <br />
                <br />
                <input type="submit" className = "commonal" style={{border:"none",padding:"5px",paddingLeft:"20px",paddingRight:"20px",borderRadius:"20px",boxShadow:"0 0 10px black"}}/>
              </form>
            </div>
          </div>:
                      <div className="modala">
                      <div className="modal_contenta">
                      <div className="closea" onClick={this.handleClick.bind(this)}>
                          &times;
                        </div>
                          <div className = "success" >Email sent successfully!</div>
                      </div>
        </div>
    }
        </div>
        );
    }

}
export default Popup;

  