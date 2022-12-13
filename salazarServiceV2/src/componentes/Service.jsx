import React from "react";


function Service (props){

  
   var validador =1,validador2=1,validador3=1,validador4=1;

   const abrirImagen1 = ()=>{

      if(validador==1){
     
         document.getElementById('capa1').style.boxShadow='0px 15px 25px';
         
         document.getElementById('capa1').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a1').style.top='10%';
         document.getElementById('a1').style.color='rgb(9, 220, 255)';
         document.getElementById('p1').style.visibility='visible';
            validador=2;
         }else if(validador==2){
         document.getElementById('capa1').style.backgroundColor ='transparent';
         document.getElementById('a1').style.top='45%';
         document.getElementById('p1').style.visibility='hidden'; 
         document.getElementById('a1').style.color='white';
         document.getElementById('capa1').style.boxShadow='0px 0px 2px';
         validador=1;
         
         
         }
      
   }

   const abrirImagen2 = ()=>{

      if(validador2==1){
    
         document.getElementById('capa2').style.boxShadow='0px 15px 25px';
         document.getElementById('capa2').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a2').style.top='10%';
         document.getElementById('a2').style.color='rgb(9, 220, 255)';
         document.getElementById('p2').style.visibility='visible';
            validador2=2;
         }else if(validador2==2){
         document.getElementById('capa2').style.backgroundColor ='transparent';
         document.getElementById('a2').style.top='45%';
         document.getElementById('p2').style.visibility='hidden'; 
         document.getElementById('a2').style.color='white';
         document.getElementById('capa2').style.boxShadow='0px 0px 2px';
         validador2=1;
         
         
         }

   }

   const abrirImagen3 = ()=>{

      if(validador3==1){
         document.getElementById('capa3').style.boxShadow='0px 15px 25px';
         document.getElementById('capa3').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a3').style.top='10%';
         document.getElementById('a3').style.color='rgb(9, 220, 255)';
         document.getElementById('p3').style.visibility='visible';
            validador3=2;
         }else if(validador3==2){
         document.getElementById('capa3').style.backgroundColor ='transparent';
         document.getElementById('a3').style.top='45%';
         document.getElementById('p3').style.visibility='hidden'; 
         document.getElementById('a3').style.color='white';
         document.getElementById('capa3').style.boxShadow='0px 0px 2px';
         validador3=1;
         
         
         }


   }

   const abrirImagen4 = ()=>{


   if(validador4==1){
      document.getElementById('capa4').style.boxShadow='0px 15px 25px';
   document.getElementById('capa4').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
   document.getElementById('a4').style.top='10%';
   document.getElementById('a4').style.color='rgb(9, 220, 255)';
   document.getElementById('p4').style.visibility='visible';
      validador4=2;
   }else if(validador4==2){
   document.getElementById('capa4').style.backgroundColor ='transparent';
   document.getElementById('a4').style.top='45%';
   document.getElementById('p4').style.visibility='hidden'; 
   document.getElementById('a4').style.color='white';
   document.getElementById('capa4').style.boxShadow='0px 0px 2px';
   validador4=1;
   
   
   }
}

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
                           <button  className="afigure" id="a1" onClick={()=>{abrirImagen1()}}>{props.Subtitulo1}</button >
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
                           <button  id="a2"  className="afigure" onClick={()=>{abrirImagen2()}}>{props.Subtitulo2}</button >
                           <p className="p1figure" id="p2" >
                           {props.texto2}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
                   
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link3} className="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa3">
                           <button  id="a3" className="afigure" onClick={()=>{abrirImagen3()}}>{props.Subtitulo3}</button >
                           <p className="p1figure" id="p3" >
                           {props.texto3}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>
               </div>
               <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb" style={{margin: "auto"}}>
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link4} className="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa4">
                           <button  id="a4" className="afigure" onClick={()=>{abrirImagen4()}}>{props.Subtitulo4}</button>
                           <p className="p1figure" id="p4" >
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