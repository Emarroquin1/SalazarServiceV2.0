import React from "react";


function Service (props){

  
   var validador =1,validador2=1,validador3=1,validador4=1,validador5=1,validador6=1;

   const abrirImagen1 = ()=>{

      if(validador===1){
     
         document.getElementById('capa1').style.boxShadow='0px 15px 25px';
         
         document.getElementById('capa1').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a1').style.top='10%';
         document.getElementById('a1').style.color='rgb(9, 220, 255)';
         document.getElementById('p1').style.visibility='visible';
            validador=2;
         }else if(validador===2){
         document.getElementById('capa1').style.backgroundColor ='transparent';
         document.getElementById('a1').style.top='45%';
         document.getElementById('p1').style.visibility='hidden'; 
         document.getElementById('a1').style.color='white';
         document.getElementById('capa1').style.boxShadow='0px 0px 2px';
         validador=1;
         
         
         }
      
   }

   const abrirImagen2 = ()=>{

      if(validador2===1){
    
         document.getElementById('capa2').style.boxShadow='0px 15px 25px';
         document.getElementById('capa2').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a2').style.top='10%';
         document.getElementById('a2').style.color='rgb(9, 220, 255)';
         document.getElementById('p2').style.visibility='visible';
            validador2=2;
         }else if(validador2===2){
         document.getElementById('capa2').style.backgroundColor ='transparent';
         document.getElementById('a2').style.top='45%';
         document.getElementById('p2').style.visibility='hidden'; 
         document.getElementById('a2').style.color='white';
         document.getElementById('capa2').style.boxShadow='0px 0px 2px';
         validador2=1;
         
         
         }

   }

   const abrirImagen3 = ()=>{

      if(validador3===1){
         document.getElementById('capa3').style.boxShadow='0px 15px 25px';
         document.getElementById('capa3').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
         document.getElementById('a3').style.top='10%';
         document.getElementById('a3').style.color='rgb(9, 220, 255)';
         document.getElementById('p3').style.visibility='visible';
            validador3=2;
         }else if(validador3===2){
         document.getElementById('capa3').style.backgroundColor ='transparent';
         document.getElementById('a3').style.top='45%';
         document.getElementById('p3').style.visibility='hidden'; 
         document.getElementById('a3').style.color='white';
         document.getElementById('capa3').style.boxShadow='0px 0px 2px';
         validador3=1;
         
         
         }


   }

   const abrirImagen4 = ()=>{


   if(validador4===1){
      document.getElementById('capa4').style.boxShadow='0px 15px 25px';
   document.getElementById('capa4').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
   document.getElementById('a4').style.top='10%';
   document.getElementById('a4').style.color='rgb(9, 220, 255)';
   document.getElementById('p4').style.visibility='visible';
      validador4=2;
   }else if(validador4===2){
   document.getElementById('capa4').style.backgroundColor ='transparent';
   document.getElementById('a4').style.top='45%';
   document.getElementById('p4').style.visibility='hidden'; 
   document.getElementById('a4').style.color='white';
   document.getElementById('capa4').style.boxShadow='0px 0px 2px';
   validador4=1;
   
   
   }
}

const abrirImagen5 = ()=>{


   if(validador5===1){
      document.getElementById('capa5').style.boxShadow='0px 15px 25px';
   document.getElementById('capa5').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
   document.getElementById('a5').style.top='10%';
   document.getElementById('a5').style.color='rgb(9, 220, 255)';
   document.getElementById('p5').style.visibility='visible';
      validador5=2;
   }else if(validador5===2){
   document.getElementById('capa5').style.backgroundColor ='transparent';
   document.getElementById('a5').style.top='45%';
   document.getElementById('p5').style.visibility='hidden'; 
   document.getElementById('a5').style.color='white';
   document.getElementById('capa5').style.boxShadow='0px 0px 2px';
   validador5=1;
   
   
   }
}

const abrirImagen6 = ()=>{


   if(validador6===1){
   document.getElementById('capa6').style.boxShadow='0px 15px 25px';
   document.getElementById('capa6').style.backgroundColor ='rgba(17, 33, 79, 0.7)';
   document.getElementById('a6').style.top='10%';
   document.getElementById('a6').style.color='rgb(9, 220, 255)';
   document.getElementById('p6').style.visibility='visible';
      validador6=2;
   }else if(validador6===2){
   document.getElementById('capa6').style.backgroundColor ='transparent';
   document.getElementById('a6').style.top='45%';
   document.getElementById('p6').style.visibility='hidden'; 
   document.getElementById('a6').style.color='white';
   document.getElementById('capa6').style.boxShadow='0px 0px 2px';
   validador6=1;
   
   
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
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
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
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link5} className="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa5">
                           <button  id="a5" className="afigure" onClick={()=>{abrirImagen5()}}>{props.Subtitulo5}</button>
                           <p className="p1figure" id="p5" >
                           {props.texto5}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>

               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                  <div className="service-box contenedorServices">
                     <figure>
                      
                        <img  src={props.link6} className="img-fluid Imgfancybox"  alt=""/>

                        <div className="capaFigure" id="capa6">
                           <button  id="a6" className="afigure" onClick={()=>{abrirImagen6()}}>{props.Subtitulo6}</button>
                           <p className="p1figure" id="p6" >
                           {props.texto6}</p>
                        </div>
      
                     </figure>
                  </div>
               </div>

               </div>
             
               <div className="row">
               <div className="col-md-12 text-center">
                  <div className="titlepage">
                     <h2>More about Descaling</h2>
                  </div>

                  <span style={{fontSize: "medium"}}>
                  The following is our menu of descaling services performed at your other division locations.  
                  As with all of our clients the expectations and pricing can be fluid depending on strategic efforts 
                  and budgets.  We know based on several case studies that this program has increased 
                  driver retention and is a physical demonstration of management's support of drivers efforts and respect.   
                   
                  
                  </span>
<p></p>
                  <h3>Our Descaling program is curated to do the following:</h3>
<div id="lista">

<ol>
  <li>Increase Driver Retention</li>
  <li>Promote Driver Morale</li>
  <li>Foster Mechanics Efficiencies promoting instant ROI</li>
  <li>Best Practices for community road safety</li>
  <li>Focused Pride of Ownership</li>
</ol>
</div>

<p></p>
<span style={{fontSize: "medium"}}> 
We have found the best methodology to a successful descaling plan in consistency and commitment. 
The feedback from mechanics and drivers has been very positive but has also allowed us to modify
the plan according to their needs and wants.   
</span>
<p></p>
<table class="table table-dark ">
<th  colSpan={12} style={{color:"black", textAlign:"center"}} >OUR PLANS</th>
<tbody>
<tr>
<td>
   <b>Gold</b>
</td>    
<td>
   <b>Silver</b>
</td>   
<td>
   <b>Platinum</b>
</td> 
</tr>
<tr>

<td>
Remove concrete from rear of truck including:


</td>

<td>

Remove all concrete from rear of truck including:

</td>

<td>

Remove all concrete from rear of truck including:

</td>

</tr>

</tbody>

</table>


               </div>
            </div>


         </div>
      </div>
     
   

    );
}

export default Service;