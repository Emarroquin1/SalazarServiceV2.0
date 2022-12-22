import React, { useEffect } from "react";
import { useState } from "react";

import '../styleLeaves/Contact.css';
import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'



function Contact (){


 

const [user, SetUser] =  useState({
   email:"",
   coment:""
});

const [phone, setPhone] = useState("");



const handleInput =(e)=> {

   SetUser(prev=>({...prev, [e.target.name]:e.target.value}))
   
    if(e.target.name==="email"){

      emailValidation(e.target.value);

      console.log(e.target.value);

    }

    if(e.target.name==="coment"){

      comentValidation(e.target.value);

    }

    if(e.target.name==="phone"){

      phonevalidation(e.target.value);

    }


   

   
   };

const [mensaje, setMensaje] =  useState({menssagePhone:"",messageComent:"",messageemail:"",messageService:""});   


const [services, setService] = useState({Painting:false, Landscape:false,Roofing:false, PressureWash:false,SolarPanel:false,
   Descaling:false,activo:0})



   
const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g; 

 
const emailValidation =(email) =>{

if(email!=="")
   {
     
if(regEx.test(email))
{

setMensaje(prev=>({...prev,messageemail:""}));


}else if(!regEx.test(email)){
   setMensaje(prev=>({...prev,messageemail:"Email is not valid"}));
}

   }else{

setMensaje(prev=>({...prev,messageemail:"Please write your email"})); console.log(mensaje) }

};

const comentValidation=(coment)=>{


   if(coment)
   {
      setMensaje(prev=>({...prev,messageComent:""}));
   }else{
setMensaje(prev=>({...prev,messageComent:"Please Write something"}));
}

};

const phonevalidation =(phone)=>
{
  

   if(phone!=="")
   {
      setMensaje(prev=>({...prev,menssagePhone:""}))
   }else{
      
setPhone(phone);
setMensaje(prev=>({...prev,menssagePhone:"Please write your phone number"}));}
   
console.log("telefono: "+phone);

};



const handlecheck=(e)=>{


   let valor = e.target.value;

   if(services[valor]===false){

      setService(prev=>({...prev, [e.target.value]:true}) );

   
   }else if (services[valor]===true){

      setService(prev=>({...prev, [e.target.value]:false}));
      

   }

   setService(prev=>({...prev, activo:1}) );



}

function serviceValidation() {
   let validador = false;

   for (var servicio in services) {

      if (services[servicio] === true) {

         validador = true;
         setMensaje(prev => ({ ...prev, messageService: "" }));

      } else if (validador !== true) {
         setMensaje(prev => ({ ...prev, messageService: "Please select a service" }));
      }
      console.log("\n" + servicio + ": " + services[servicio]);
   }

};



useEffect(()=>{

 
      if (services.activo === 1) {

         let validador = false;

         for (var servicio in services) {
      
            if (services[servicio] === true) {
      
               validador = true;
               setMensaje(prev => ({ ...prev, messageService: "" }));
      
            } else if (validador !== true) {
               setMensaje(prev => ({ ...prev, messageService: "Please select a service" }));
            }
            console.log("\n" + servicio + ": " + services[servicio]);
         }
      
      }
}
 
,[services]);


   

const onclickForm = (ev) =>{
   
   ev.preventDefault();
 
 
  
   emailValidation(user.email);

comentValidation(user.coment);


phonevalidation(phone);
serviceValidation();
   
   console.log(user)

}

  

return(

  

    <div id="contact" className="contact">
    <div className="container">
    
    <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h3>Contact Us</h3>
                  </div>
               </div>
            </div>
      
    <div className="row">
             
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 offset-md-3">
       <div className="contact">
          
          <form className="form" >

             <div className="row">
             <div className="col-12">
               <PhoneInput
      placeholder="Enter phone number" name="phone" 
      value={phone} onInput={handleInput} onChange={setPhone} className="contactus2" maxLength={15} />
                    <span className='error'> {mensaje.menssagePhone}</span>
                    </div>

                <div className="col-sm-12">
                   <input id="txtEmail" className="contactus" placeholder="Email" type="text"
                    name="email" value={user.email} onInput={handleInput}/>
                    <span className='error'>{mensaje.messageemail}</span>
                </div>
                <div className="col-sm-12">
                   <textarea id="txtcoment" className="textarea"
                    placeholder="Write a Comment" value={user.coment} onChange={handleInput} type="text" name="coment"
                    ></textarea>

                    <span className='error'>{mensaje.messageComent}</span>
                </div>
                <div className="col-sm-12">

            <label className="form-label" style={{color: "white"}}>
Select one or more services 
            </label>
            <div className="form-check">

             <input className="form-check-input" type="checkbox" value="Painting" id="flexCheckDefault" 
             name="servicios[]" onChange={handlecheck} checked={services.Painting}/>
             <label className="form-check-label" htmlFor="flexCheckDefault">
               Painting
             </label>
           </div>
              
           <div className="form-check">
               <input className="form-check-input" type="checkbox" value="Landscape" id="flexCheckDefault2" 
               name="servicios[]" onChange={handlecheck} checked={services.Landscape}/>
               <label className="form-check-label" htmlFor="flexCheckDefault2">
                 Landscape 
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="Roofing" id="flexCheckDefault3" 
               name="servicios[]" onChange={handlecheck} checked={services.Roofing}/>
               <label className="form-check-label" htmlFor="flexCheckDefault3">
                 Roofing 
               </label>
             </div>
           <div className="form-check">
               <input className="form-check-input" type="checkbox" value="PressureWash"  id="flexCheckDefault4" 
               name="servicios[]" onChange={handlecheck} checked={services.PressureWash}/>
               <label className="form-check-label" htmlFor="flexCheckDefault4">
                 Pressure wash
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="SolarPanel"  id="flexCheckDefault4" 
               name="servicios[]" onChange={handlecheck} checked={services.SolarPanel}/>
               <label className="form-check-label" htmlFor="flexCheckDefault4">
                 Solar Panel
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value="Descaling"  id="flexCheckDefault4" 
               name="servicios[]" onChange={handlecheck} checked={services.Descaling}/>
               <label className="form-check-label" htmlFor="flexCheckDefault4">
                 Descaling
               </label>
             </div>
             <span className='error'>{mensaje.messageService}</span>


             </div>
                <div className="col-sm-12">
                   <button className="send" name="send" type="submit" onClick={(e)=>{onclickForm(e)}}>Send</button>
                </div>
             
          </div>
 
          </form>
       </div>
    </div>
 </div>
 </div>
 </div>
);


}

export default Contact;