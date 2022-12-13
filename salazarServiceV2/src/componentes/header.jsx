import React from "react";

import {Outlet} from "react-router-dom"

function Header(){
return(
<>

    <nav className="navbar navbar-expand-lg navbar-dark  bg-blue">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Salazar Services</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"  >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/contact" >Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#about" >About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#screenshot">Our Jobs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<section>
<Outlet></Outlet>
</section>
</>

);



}

export default Header;