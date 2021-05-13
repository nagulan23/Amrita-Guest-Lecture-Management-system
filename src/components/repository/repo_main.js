import React, { Component } from 'react';
import Singledoc from './docgrid';
import Singleimage from './imageGrid';
import Singlelink from './link';
import emptyRepo from '../../assets/emptyRep.jpg';
import './repo_main.css';
import Repo_add from './repo_add';

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
                  <div style={{width:"390px"}}>
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
                      {(this.props.admin)?<div className="repo-menu" style={{display:"flex",flexDirection:"row",padding:"10px",paddingLeft:"30px",marginBottom:"10px",backgroundColor:(this.state.section==4)?"#def4ff":"white",fontWeight:"bold",color:(this.state.section==4)?"#007cba":"gray",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",alignItems:"center",borderRight:"1px solid gray",borderBottom:"1px solid gray",cursor:"pointer"}}
                      onClick={this.changePage.bind(this,4)}>
                        <div style={{paddingRight:"20px",fontSize:"20px"}}>A</div>
                        <div>Add Content</div>
                      </div>:<div/>}
                  </div>
                  <div style={{padding:"20px",width:"100%"}}>
                    {

                    (this.state.section==4)?
                    <Repo_add lecture_id={this.props.lecture_id}/>

                    :

                    (this.state.section==3)?
                    <>{
                      this.props.files[2].length==0?
                      <div style={{width:"100%",textAlign:"center"}}>
                        <img src={emptyRepo}/>
                      </div>
                      :
                      <div style={{display: "grid",gridTemplateColumns:"auto auto auto auto"}}>
                          {this.props.files[2].map((doc) => (
                            <div ><Singledoc url={doc}/></div>
                          ))}
                      </div>
                        }</>

                    :
                    
                    (this.state.section==2)?
                    <>{
                      this.props.files[1].length==0?
                      <div style={{width:"100%",textAlign:"center"}}>
                        <img src={emptyRepo}/>
                      </div>
                      :
                      <div style={{display: "grid",gridTemplateColumns:"auto auto auto", rowGap:"20px"}}>
                          {this.props.files[1].map((link) => (
                            <div ><Singlelink url={link}/></div>
                          ))}
                      </div>
                        }</>
                    
                    :
                    
                    <>{
                      this.props.files[0].length==0?
                      <div style={{width:"100%",textAlign:"center"}}>
                        <img src={emptyRepo}/>
                      </div>
                      :
                      <div style={{display: "grid",gridTemplateColumns:"auto auto auto auto"}}>
                          {this.props.files[0].map((img) => (
                            <div ><Singleimage url={img}/></div>
                          ))}
                      </div>
                        }</>
                     }       
                  </div>
              </div>
            </div>
         );
    }
}
 
export default Repo_main;

