import './MailLinkedin.css';

import React, { Component } from 'react';

class MailLinkedin extends Component {
    state = {  }
    render() { 
        return ( 
        <div class="ltt_lect_info_mail_linkedin_bg">    
            <div class="llt_row">
                <div class="llt_column"><div class="llt_row"><div className="ltt_lect_info_mail_logo"></div><div className="ltt_lect_info_mail_text" style={{paddingLeft:"0px"}}>   {this.props.gmail}</div></div></div>
                <div class="llt_column"><div class="llt_row"><div className="ltt_lect_info_linkedin_logo"></div><div className="ltt_lect_info_linkedin_text" style={{paddingLeft:"20px"}}>{this.props.linkedin}</div></div></div>
            </div>
        </div> 
        );
    }
}
 
export default MailLinkedin;