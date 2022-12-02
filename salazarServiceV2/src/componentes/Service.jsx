import React from "react";


function Service (props){

    return(

   
      <div id="service" className="service">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>{props.titulo}</h2>
                  </div>
               </div>
            </div>
         </div>
         <div className="container margin-r-l">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                       
                        <img  src={props.link1} className="img-fluid Imgfancybox"  alt=""/>
                        <div className="capaFigure" id="capa1">
                           <button  className="afigure" id="a1">{props.Subtitulo1}</button >
                           <p className="p1figure" id="p1">
                           {props.texto1}</p>
                        </div>
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link2} className="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa2">
                           <button  id="a2"  className="afigure">{props.Subtitulo2}</button >
                           <p className="p1figure" id="p2" >
                           {props.texto2}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link3} class="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa2">
                           <button  id="a2" className="afigure" >{props.Subtitulo3}</button >
                           <p className="p1figure" id="p2" >
                           {props.texto3}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link4} class="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa2">
                           <button  id="a2" className="afigure" >{props.Subtitulo4}</button>
                           <p className="p1figure" id="p2" >
                           {props.texto4}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
             
            </div>
         </div>
      </div>
     
   

    );
}

export default Service;