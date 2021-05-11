import './link.css';

import React, { Component } from 'react';
class Link extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="Borderlink" href={this.props.url}>
                <iframe className="iframe1" type="text/html" src={this.props.url}   width="300" height="200"  scrolling="no" />
                <div className="linkline"></div>
                <div className="linktext"  ><a  className="alinktext" href={this.props.url} target="_blank" >{this.props.url}</a></div>
                
            </div>
        </div>
         );
    }
}
 
export default Link;