import React, { Component } from 'react';
import './docgrid.css';
class Singleimage extends Component {
    constructor(props){
        super();
        var name=props.url.substring(props.url.lastIndexOf("/")+1,props.url.lastIndexOf("."));
        this.state = { 
            thumbnail:props.url,
            size:"200px",
            name:name
        }
        console.log(this.state);
    }
    render() { 
        return ( 
            <div style={{textAlign:'center',}}>
                    <div class="REPcontent">
                        <div class="REPcontent-overlay"></div>
                        <div style={{height:"200px"}}>
                            <img src={this.props.url} style={{width:"75%",minHeight:"100%"}}/>
                        </div>
                        <div class="REPcontent-details fadeIn-bottom" style={{display:"flex",flexDirection:"row"}}>
                            <a id="download_image" href="" download={this.props.url} >
                                <img src="https://cdn0.iconfinder.com/data/icons/universal-3-4/21/130-512.png" width="80px"/>
                            </a>
                            <img style={{cursor:"pointer"}} onClick={() =>  navigator.clipboard.writeText(this.props.url)} src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-ios-orange-gradient/bfa/bfa_copy/bfa_copy_flat-circle-white-on-ios-orange-gradient_512x512.png" width="80px"/>
                        </div>
                    </div>
                    
                    <div>{this.state.name}</div>
            </div>
         );
    }
}
 
export default Singleimage;