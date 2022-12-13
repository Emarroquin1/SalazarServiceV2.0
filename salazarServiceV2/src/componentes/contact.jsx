import React from "react";
import { useState } from "react";

import '../styleLeaves/Contact.css';
import 'react-phone-number-input/style.css'

import PhoneInput from 'react-phone-number-input'


function Contact (){
   var validador=0;
const [value, setValue] = useState();
const [email, Setemail] =  useState("");
const [Mensaje, setMensaje] =  useState("");

const [coment, setComent] =  useState("");
const [mensaje2, setMensaje2] =  useState("");
const [mensaje3, setMensaje3] =  useState("");

const [Painting, setPainting] =  useState("");
const [Landscape, setLandscape] =  useState("");

const [Roofing, setRoofing] =  useState("");
const [PressureWash, setPressureWash] =  useState("");


   
const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g; 

const emailValidation =() =>{

if(regEx.test(email))
{

setMensaje("Email is valid")

}else if(!regEx.test(email) && email !==""){
   setMensaje("Email is not valid")
}

};


const handleonchangeEmail = (e) =>{
   Setemail(e.target.value);

   emailValidation();
}


const handlecheck=(data)=>{

   if(data==="first"){
      setPainting("Painting");
      validador=1;
   }
   
   if(data==="second"){
      setLandscape("Landscape");
      validador=1;
   }
   if(data==="third"){
      setRoofing("Roofing")
      validador=1;
   }
   if(data==="fourth"){
      setPressureWash("PressureWash")
      validador=1;
   }


}

const handleMessageChange = event => {
   // 👇️ access textarea value
   setComent(event.target.value);
   console.log(event.target.value);
 };

const onclickForm = (ev) =>{
   
   ev.preventDefault();
 
  
   
   if(coment!=="")
   {
      setMensaje2("Please Write something2")
   }else{
setMensaje2("Please Write something")
   }

   if(validador===0){
      setMensaje3("Please select a service");
   }
   
  
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
      placeholder="Enter phone number"
      value={value} className="contactus2"
      onChange={setValue}/>
                    <span className='error'> </span>
                    </div>

                <div className="col-sm-12">
                   <input id="txtEmail" className="contactus" placeholder="Email" type="text"
                    name="email" value={email} onChange={handleonchangeEmail} />
                    <span className='error'>{Mensaje}</span>
                </div>
                <div className="col-sm-12">
                   <textarea id="txtcoment" className="textarea"
                    placeholder="Write a Comment" value={coment} onChange={handleMessageChange} type="text" name="coment"
                    ></textarea>

                    <span className='error'>{mensaje2}</span>
                </div>
                <div className="col-sm-12">

            <label className="form-label" style={{color: "white"}}>
Select one or more services 
            </label>
            <div className="form-check">

             <input className="form-check-input" type="checkbox" value={Painting} id="flexCheckDefault" 
             name="servicios[]" onChange={()=>handlecheck("first")}/>
             <label className="form-check-label" htmlFor="flexCheckDefault">
               Painting
             </label>
           </div>
              
           <div className="form-check">
               <input className="form-check-input" type="checkbox" value={Landscape}  id="flexCheckDefault2" 
               name="servicios[]" onChange={()=>handlecheck("second")}/>
               <label className="form-check-label" htmlFor="flexCheckDefault2">
                 Landscape 
               </label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="checkbox" value={Roofing} id="flexCheckDefault3" 
               name="servicios[]" onChange={()=>handlecheck("third")}/>
               <label className="form-check-label" htmlFor="flexCheckDefault3">
                 Roofing 
               </label>
             </div>
           <div className="form-check">
               <input className="form-check-input" type="checkbox" value={PressureWash}  id="flexCheckDefault4" 
               name="servicios[]" onChange={()=>handlecheck("fourth")}/>
               <label className="form-check-label" htmlFor="flexCheckDefault4">
                 Pressure wash
               </label>
             </div>
             <span className='error'>{mensaje3}</span>


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