import React, { Component } from 'react';
import './docgrid.css';
class Singledoc extends Component {
    constructor(props){
        super();
        var type=props.url[1];
        var name=props.url[0];
        var temp=props.url[2].substring(0,props.url[2].lastIndexOf("/"));
        var id=temp.substring(temp.lastIndexOf("/")+1);
        if(type==='DOC')
            this.state = { 
                thumbnail:"https://cdn.iconscout.com/icon/free/png-256/google-docs-3-569455.png",
                download:"https://drive.google.com/uc?id="+id+"&export=download",
                size:"200px",
                name:name
            }
        else if(type==='PDF')
            this.state = { 
                thumbnail:"https://pacific7.co.nz/wp-content/uploads/2018/08/PDF-download-image.png",
                download:"https://drive.google.com/uc?id="+id+"&export=download",
                size:"200px",
                name:name
            }
        else if(type==='MP4')
            this.state = { 
                thumbnail:"https://www.pngkey.com/png/full/334-3348454_search-results-icon-premiumpixelscom-video-file-flat-icon.png",
                download:"https://drive.google.com/uc?id="+id+"&export=download",
                size:"155px",
                name:name
            }
    }
    render() { 
        return ( 
            <div style={{textAlign:'center',}}>
                    <div class="REPcontent">
                        <div class="REPcontent-overlay"></div>
                        <div>
                            <img src={this.state.thumbnail} width={this.state.size}/>
                        </div>
                        <div class="REPcontent-details fadeIn-bottom" style={{display:"flex",flexDirection:"row"}}>
                            <a href={this.state.download} >
                                <img src="https://cdn0.iconfinder.com/data/icons/universal-3-4/21/130-512.png" width="80px"/>
                            </a>
                            <img style={{cursor:"pointer"}} onClick={() =>  navigator.clipboard.writeText(this.props.url[2])} src="http://iconsetc.com/icons-watermarks/flat-circle-white-on-ios-orange-gradient/bfa/bfa_copy/bfa_copy_flat-circle-white-on-ios-orange-gradient_512x512.png" width="80px"/>
                        </div>
                    </div>
                    
                    <div>{this.state.name}</div>
            </div>
         );
    }
}
 
export default Singledoc;