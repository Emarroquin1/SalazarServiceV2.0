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
                       
                        <img  src="https://www.cheappaintersingapore.com/wp-content/uploads/2021/03/tg3q35hq.jpg" class="img-fluid Imgfancybox"  alt=""/>
                        <div className="capaFigure" id="capa1">
                           <a className="afigure" id="a1">Painting</a>
                           <p className="p1figure" id="p1">Applying paint, stain and other finishes to paint surfaces using paintbrushes, rollers or sprayers. Maintaining an inventory of supplies like paint brushes, rollers and tarps. Removing old finish using scrapers, chemical compounds or blowtorches. Estimating time and material costs on painting projects. </p>
                        </div>
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src="images/landscape.jpg" class="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa2">
                           <a id="a2" class="afigure" onclick="abrirImagen2()">landscape</a>
                           <p className="p1figure" id="p2" >Mowing, edging and fertilizing lawns. Weeding and mulching landscape beds. Trimming small trees, hedges and shrubs. Removing unwanted, dead or damaged trees. Planting shrubs, flowers and trees.</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                     
                        <img  src="images/preasurewatch.jpg" class=" img-fluid Imgfancybox"  alt=""/>
                        <div className="capaFigure" id="capa3">
                           <a id="a3" class="afigure" onclick="abrirImagen3()" >pressure wash</a>
                           <p className="p1figure" id="p3" >El lavado a presión utiliza agua caliente para expulsar el agua a un alto PSI (libras por pulgada cuadrada) en la superficie que está tratando. Esto brinda una limpieza profunda para: Limpieza de superficies: entradas de vehículos, aceras, entradas, patios y más. limpieza de la cubierta de la piscina</p>
                        </div>
                     
                     </figure>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb" style="margin: auto;">
                  <div className="service-box contenedorServices" id="cajaServices">
                     <figure>
                      
                        <img  src="https://www.loofal.com/wp-content/uploads/2020/04/loofal-solar-work-solar-services.jpg" class="img-fluid Imgfancybox"  alt=""/>
                        <div className="capaFigure" id="capa4">
                           <a id="a4" class="afigure" onclick="abrirImagen4 ()">Solar panels</a>
                           <p className="p1figure" id="p4" >Mowing, edging and fertilizing lawns. Weeding and mulching landscape beds. Trimming small trees, hedges and shrubs. Removing unwanted, dead or damaged trees. Planting shrubs, flowers and trees.</p>
                        </div>
                        <div className="divBackground">

                        </div>
                     </figure>
                  </div>
               </div>
              
             
            </div>
         </div>
      </div>
     
   

    );
}