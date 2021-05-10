import React, { Component } from 'react';
import Singledoc from './docgrid';
import Singleimage from './imageGrid';
import emptyRepo from '../../assets/emptyRep.jpg';
import './repo_main.css';

class Repo_main extends Component {
    state = { 
        section:1,
        numPages: null,
        pageNumber: 1,
     }

     changePage(page){
         this.setState({section:page});
     }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
    render() { 
        return ( 
            <div>
                <div
                id="about"
                style={{
                  padding: "20px",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#282c34",
                  textAlign: "left",
                }}
              >
                Lecture Repository
              </div>
              <div style={{height:"2px",width:"30%",margin:"10px",marginTop:"0px",backgroundColor:"gray"}}/>
              <div style={{display:"flex",flexDirection:"row"}}>
                  <div style={{width:"380px"}}>
                      <div className="repo-menu" style={{display:"flex",flexDirection:"row",padding:"10px",paddingLeft:"30px",marginBottom:"10px",backgroundColor:(this.state.section==1)?"#def4ff":"white",fontWeight:"bold",color:(this.state.section==1)?"#007cba":"gray",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",alignItems:"center",borderRight:"1px solid gray",borderBottom:"1px solid gray",cursor:"pointer"}}
                      onClick={this.changePage.bind(this,1)}>
                        <div style={{paddingRight:"20px",fontSize:"20px"}}>M</div>
                        <div>Media</div>
                      </div>
                      <div className="repo-menu" style={{display:"flex",flexDirection:"row",padding:"10px",paddingLeft:"30px",marginBottom:"10px",backgroundColor:(this.state.section==2)?"#def4ff":"white",fontWeight:"bold",color:(this.state.section==2)?"#007cba":"gray",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",alignItems:"center",borderRight:"1px solid gray",borderBottom:"1px solid gray",cursor:"pointer"}}
                      onClick={this.changePage.bind(this,2)}>
                        <div style={{paddingRight:"20px",fontSize:"20px"}}>L</div>
                        <div>Links</div>
                      </div>
                      <div className="repo-menu" style={{display:"flex",flexDirection:"row",padding:"10px",paddingLeft:"30px",marginBottom:"10px",backgroundColor:(this.state.section==3)?"#def4ff":"white",fontWeight:"bold",color:(this.state.section==3)?"#007cba":"gray",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",alignItems:"center",borderRight:"1px solid gray",borderBottom:"1px solid gray",cursor:"pointer"}}
                      onClick={this.changePage.bind(this,3)}>
                        <div style={{paddingRight:"20px",fontSize:"20px"}}>D</div>
                        <div>Docs</div>
                      </div>
                  </div>
                  <div style={{padding:"20px",width:"100%"}}>
                    {(this.state.section==3)?
                    <div style={{display: "grid",gridTemplateColumns:"auto auto auto auto"}}>
                        <div ><Singledoc url="a/dasdasd.pdf"/></div>
                        <div ><Singledoc url="ad/asdasd.doc"/></div>
                        <div ><Singledoc url="adas/dasd.mp4"/></div>
                        <div ><Singledoc url="a/dasdasd.doc"/></div>
                        <div ><Singledoc url="adasd/asd.doc"/></div>
                        <div ><Singledoc url="ad/asdasd.pdf"/></div>
                        <div ><Singledoc url="adas/dasd.doc"/></div>
                        <div ><Singledoc url="a/dasdasd.pdf"/></div>
                        <div ><Singledoc url="adasda/sd.pdf"/></div>
                        <div ><Singledoc url="ad/asdasd.doc"/></div>
                    </div>:(this.state.section==2)?
                    <div style={{width:"100%",textAlign:"center"}}>
                      <img src={emptyRepo}/>
                    </div>:
                    <div style={{display: "grid",gridTemplateColumns:"auto auto auto auto"}}>
                        <div ><Singleimage url="https://i.redd.it/c2n8ecysefe31.jpg"/></div>
                        <div ><Singleimage url="https://1.bp.blogspot.com/-MB8McpkpxE0/UQkIEPfGLUI/AAAAAAAAAK0/TEsYwqQyMY8/s1600/5783059698_8ee5ce4b75_z.jpg"/></div>
                        <div ><Singleimage url="https://i.redd.it/c2n8ecysefe31.jpg"/></div>
                        <div ><Singleimage url="https://i.redd.it/c2n8ecysefe31.jpg"/></div>
                        <div ><Singleimage url="https://1.bp.blogspot.com/-MB8McpkpxE0/UQkIEPfGLUI/AAAAAAAAAK0/TEsYwqQyMY8/s1600/5783059698_8ee5ce4b75_z.jpg"/></div>
                        <div ><Singleimage url="https://i.redd.it/c2n8ecysefe31.jpg"/></div>
                    </div>
                     }       
                  </div>
              </div>
            </div>
         );
    }
}
 
export default Repo_main;

