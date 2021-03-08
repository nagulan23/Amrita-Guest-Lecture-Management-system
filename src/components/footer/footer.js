import React from "react";
import "./footer.css";
//import styled from "styled-components";
function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="footer-top">
            <p className="text-xs-center">Developers</p>
          </div>
          <div className="row">
            {/* col-md-3 col-sm-6 */}
            <div className="col-md-3 col-sm-6">
              {/* <h4>Lorem ipsum</h4> */}
              <ul className="list-unstyled">
                <li>Nagulan</li>
                <li>Guhan</li>
                <li>Sudarshana</li>
              </ul>
            </div>
            <div className="vl"/>
            <div className="col-md-3 col-sm-6 ">
              {/* <h4>Lorem ipsum</h4> */}
              <ul className="list-unstyled">
                <li>Hemchudesh</li>
                <li>Srinivas</li>
                <li>Akanksh</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;ICTS, Amrita Vishwa Vidyappeetham, Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
