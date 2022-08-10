import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light border border-warning" >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house-fill "> Home</i>    
          </Link>
          <div style={{marginRight:"2rem", }}>
            <a href="https://github.com/seju12345678" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-github "  style={{marginRight:"1rem"}}>GitHub</i>
            </a>
            <a href="https://www.linkedin.com/in/sejal-rathod-247053227/" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-linkedin" style={{marginRight:"1rem"}}>LinkedIn</i>
            </a>
            <a href="https://codepen.io/seju19" style={{color:"black", textDecoration:"none"}}>
              <i className="bi bi-Codepen" style={{marginRight:"1rem"}}>Codepen</i>
            </a>
            <a href="https://leetcode.com/user5441Ga/" style={{color:"black", textDecoration:"none"}}>Leetcode</a>  
          </div>
        </div>
      </nav>
  )
}

export default Navbar