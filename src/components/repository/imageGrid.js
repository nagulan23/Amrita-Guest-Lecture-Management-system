import React, { Component } from 'react';
import './docgrid.css';
class Singleimage extends Component {
    constructor(props){
        super();
        var temp=props.url.substring(0,props.url.lastIndexOf("/"));
        var id=temp.substring(temp.lastIndexOf("/")+1);
        this.state = { 
            thumbnail:"https://drive.google.com/thumbnail?id="+id,
            download:"https://drive.google.com/uc?id="+id+"&export=download",
            size:"200px",
        }
    }
    render() { 
        return ( 
            <div style={{textAlign:'center',}}>
                    <div class="REPcontent">
                        <div class="REPcontent-overlay"></div>
                        <div style={{height:"200px"}}>
                            <img src={this.state.thumbnail} style={{width:"75%",minHeight:"100%"}}/>
                        </div>
                        <div class="REPcontent-details fadeIn-bottom" style={{display:"flex",flexDirection:"row"}}>
                            <a href={this.state.download} >
                                <img src="https://cdn0.iconfinder.com/data/icons/universal-3-4/21/130-512.png" width="80px"/>
                            </a>
                            <img style={{cursor:"pointer"}} onClick={() =>  navigator.clipboard.writeText(this.props.url)} src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-ios-orange-gradient/bfa/bfa_copy/bfa_copy_flat-circle-white-on-ios-orange-gradient_512x512.png" width="80px"/>
                        </div>
                    </div>
            </div>
         );
    }
}
 
export default Singleimage;

/*

                            <a download={this.state.download} >
                                <img src="https://cdn0.iconfinder.com/data/icons/universal-3-4/21/130-512.png" width="80px"/>
                            </a>
*/