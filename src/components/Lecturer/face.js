import './face.css';

import React, { Component } from 'react';

class face extends Component {
  compress(){ 
    var x = document.getElementById("ltt_lecture_dp_id")
    var cir = document.getElementById("ltt_lecture_dp_circle_id")
    var sq = document.getElementById("ltt_lecture_dp_square_id")
  
    sq.style.marginLeft= "-108px"
    sq.style.marginTop = "-219px"
    sq.style.transition=" margin 1s"
  
    
    cir.style.marginLeft="97px"
    cir.style.marginTop = "-211px"
    cir.style.transition="margin 1s"
  
  
    x.style.borderTopLeftRadius="30px"
    x.style.borderTopRightRadius="30px"
    x.style.borderBottomLeftRadius="30px"
    x.style.borderBottomRightRadius="30px"
    
  }
  decompress(){ 
    var x = document.getElementById("ltt_lecture_dp_id")
    var cir = document.getElementById("ltt_lecture_dp_circle_id")
    var sq = document.getElementById("ltt_lecture_dp_square_id")
   
    sq.style.marginLeft="0px"
    sq.style.marginTop = "-305px"
    sq.style.transition="margin 2s"//top
  
    cir.style.marginLeft="0px"
    cir.style.marginTop = "-0px"
    cir.style.transition="margin 2s"
  
    x.style.borderTopRightRadius="70px"
    x.style.borderBottomLeftRadius="70px"

  }
  state = {  }
  render() { 
    return ( <div >
      {/* <div id="ltt_lecture_dp_circle_id" className="ltt_lecture_dp_circle"></div>
      <div id = "ltt_lecture_dp_square_id"className="ltt_lecture_dp_square"></div> */}
      <img id="ltt_lecture_dp_id" className="ltt_lecture_dp" src={this.props.profile} onMouseOver={() => this.compress()} onMouseOut = {() => this.decompress()}></img>
      <div id= "ltt_lecture_dp_square_id"className="ltt_lecture_dp_square"></div>
      <div id="ltt_lecture_dp_circle_id" className="ltt_lecture_dp_circle"></div>
      {/* <img id="ltt_lecture_dp_id" src={face1}  onMouseOver={() => compress()} onMouseOut = {() => decompress()}></img> */}
</div> );
  }
}
 
export default face;