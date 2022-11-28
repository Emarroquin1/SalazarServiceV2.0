import React from "react";

function Header(props){
return(

    <nav className="navbar navbar-expand-lg navbar-dark  bg-blue">
  <div className="container-fluid">
    <a className="navbar-brand" href={props.link1}>{props.brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.opcion1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link2}>{props.opcion2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link3}>{props.opcion3}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link4}>{props.opcion4}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link5}>{props.opcion5}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);


}

export default Header;