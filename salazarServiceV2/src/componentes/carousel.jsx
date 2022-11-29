import React from "react"; 

function Carousel(props){
    return(

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={props.link1} className="d-block w-100 ImgCarusel" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5>{props.TituloCarousel1}</h5>
        <p>{props.texto1}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={props.link2} className="d-block w-100 ImgCarusel" data-bs-interval="5000" alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5>{props.TituloCarousel2}</h5>
        <p>{props.texto2}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={props.link3} className="d-block w-100 ImgCarusel" data-bs-interval="5000"  alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5>{props.TituloCarousel3}</h5>
        <p>{props.texto3}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={props.link4} className="d-block w-100 ImgCarusel" data-bs-interval="5000"  alt="..."/>
      <div className="carousel-caption  d-md-block">
        <h5>{props.TituloCarousel4}</h5>
        <p>{props.texto4}</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
    );
}

export default Carousel;