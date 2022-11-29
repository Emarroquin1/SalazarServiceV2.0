import React from "react";  


function about(props){
    return(
       
        <div id="about" class="about">
           <div className="container">
              <div className="row">
                 <div className="col-md-12">
                    <div className="titlepage">
                       <h2>{props.titulo}</h2>
                       <span>{props.texto1} 
                       </span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="container-fluid">
              <div className="row" style="margin: auto;">
                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="about-box">
                       <h3 id="h3texto" style="text-align: center;">{props.titulo2} </h3>
                       <p>{props.texto2}
                       </p>
                       
                    </div>
                 </div>
                 
                 <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div className="about-box">
                       
                       <img   src={props.imagen}  alt="imagen about"/>
                      
                    </div>
                   
                 </div>
              </div>
            
           </div>
        </div>



    );



}

export default about;