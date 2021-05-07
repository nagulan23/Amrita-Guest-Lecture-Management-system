import React from 'react';
import './lecturer_dp_contact_details.css';

function compress(){ 
    var x = document.getElementById("ltt_lecture_dp_id")
    var cir = document.getElementById("ltt_lecture_dp_circle_id")
    var sq = document.getElementById("ltt_lecture_dp_square_id")
  
    sq.style.left="972px"
    sq.style.top = "336px"
    sq.style.transition=" left 1s"
  
    
    cir.style.left="972px"
    cir.style.top = "336px"
    cir.style.transition="left 1s"
  
  
    x.style.borderTopLeftRadius="30px"
    x.style.borderTopRightRadius="30px"
    x.style.borderBottomLeftRadius="30px"
    x.style.borderBottomRightRadius="30px"
  
  
  
  
    
  }
  function decompress(){ 
    var x = document.getElementById("ltt_lecture_dp_id")
    var cir = document.getElementById("ltt_lecture_dp_circle_id")
    var sq = document.getElementById("ltt_lecture_dp_square_id")
   
    sq.style.left="1083px"
    sq.style.top = "228px"
    sq.style.transition="top 2s"
  
    cir.style.left="877px"
    cir.style.top = "447px"
    cir.style.transition="top 2s"
  
    x.style.borderTopRightRadius="70px"
    x.style.borderBottomLeftRadius="70px"
  
  
  
  
  }

function lecturer_dp_contact_details() {
    // state = {
    //     lecturer_mail_id : "tesla@gmail.com",
    //     lecturer_linkedin_id:"Nikola_Tesla",
    // };
    return (
        <div className="lecturer_dp_contact_details">
            <text >jneefjenw</text>
                {/* THE MAIL AND LINKED IN BAR
                <div className="ltt_lect_info_mail_linkedin_bg"></div>
                <div className="ltt_lect_info_mail_logo"></div>
                <div className="ltt_lect_info_linkedin_logo"></div>
                <div className="ltt_lect_info_mail_text">tesla@gmail.com</div>
                <div className="ltt_lect_info_linkedin_text">Nikola_Tesla</div> */}
                {/* FACE DISPLAY PICTURE  */}
                {/* <oval id="ltt_lecture_dp_circle_id" className="ltt_lecture_dp_circle"></oval>
                <div id = "ltt_lecture_dp_square_id"className="ltt_lecture_dp_square"></div>
                <img id="ltt_lecture_dp_id" src={'./facel.png'} className="ltt_lecture_dp" onMouseOver={() => compress()} onMouseOut = {() => decompress()}></img> */}
        </div>
    );
}

export default lecturer_dp_contact_details;
