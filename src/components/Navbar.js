

import React from 'react';
import Scrollspy from 'react-scrollspy';
import Switch from './Switch';

const Navbar = (props) => {
  return (
    <>
      <a className="navbar-brand fixed-top" href="#home">
      <img src={props.mode==='dark'?'../images/logo2_white.png':'../images/logo2.png'}alt="main_logo" height={"80px"} width={"100px"}></img></a>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Scrollspy items={['home', 'about', 'project','skills','experience','contact']} currentClassName="is_current" className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              
            </Scrollspy>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" id="mode" onClick={()=>{props.changeMode(null)}} />
              <label className="form-check-label" htmlFor="mode">Dark Mode</label>
            </div> */}
            <Switch mode={props.mode} changeMode={props.changeMode} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
