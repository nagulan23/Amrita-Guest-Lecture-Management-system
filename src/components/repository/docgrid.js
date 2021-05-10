import React, { Component } from 'react';
import './docgrid.css';
class Singledoc extends Component {
    constructor(props){
        super();
        var type=props.url.substring(props.url.lastIndexOf(".")+1);
        var name=props.url.substring(props.url.lastIndexOf("/")+1,props.url.lastIndexOf("."));
        console.log("....");
        console.log(type);
        if(type==='doc')
            this.state = { 
                thumbnail:"https://cdn.iconscout.com/icon/free/png-256/google-docs-3-569455.png",
                size:"200px",
                name:name
            }
        else if(type==='pdf')
            this.state = { 
                thumbnail:"https://pacific7.co.nz/wp-content/uploads/2018/08/PDF-download-image.png",
                size:"200px",
                name:name
            }
        else if(type==='mp4')
            this.state = { 
                thumbnail:"https://www.pngkey.com/png/full/334-3348454_search-results-icon-premiumpixelscom-video-file-flat-icon.png",
                size:"155px",
                name:name
            }
    }
    render() { 
        return ( 
            <div style={{textAlign:'center',}}>
                <a href='/somefile.txt' download>
                    <div class="REPcontent">
                        <div class="REPcontent-overlay"></div>
                        <div>
                            <img src={this.state.thumbnail} width={this.state.size}/>
                        </div>
                        <div class="REPcontent-details fadeIn-bottom">
                            <img src="https://cdn0.iconfinder.com/data/icons/universal-3-4/21/130-512.png" width="80px"/>
                        </div>
                    </div>
                    
                    <div>{this.state.name}</div>
                </a>
            </div>
         );
    }
}
 
export default Singledoc;