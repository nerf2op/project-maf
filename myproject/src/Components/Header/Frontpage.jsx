import React from 'react';
import { useState } from 'react';
import MailIcon from '../../../node_modules/@mui/icons-material/Mail';
import './Frontpage.css';
const obj = {}
function Frontpage() {
const [ click,setclick] = useState(true);
const check = (val)=>{
  setclick(val);
}
  return (
    <>
     {/* isRequired ? 'some-class is-required': 'some-class' */}
     <div className='registration__outer__div'>
       <div className="registration__inner__div">
         <div className='inner__div_buttons'>
           <button onClick={()=>{
             check(true);
           }} className={click?"clicked__button":"unclicked__button"}>Login</button>
           <button onClick={()=>{
             check(false);
           }} className={click?"unclicked__button":"clicked__button"}>Sign up</button>
         </div>
         <div className='pages'>
         <form className='forms'>
           <div style={{padding:"3px"}}><MailIcon/><input class={click?"hidden":""} style={{margin:"3px"}} placeholder='Enter Your Name'></input></div>
           <div style={{padding:"3px"}}><input style={{margin:"3px"}} placeholder='Enter Your Email'></input></div>
           <div style={{padding:"3px"}}><input style={{margin:"3px"}} placeholder='Enter Your Password'></input></div>
           <div style={{padding:"3px"}}><input class={click?"hidden":""} style={{margin:"3px"}} placeholder='Confirm Password'></input></div>

           <button className='submit__button'>Submit</button>
           </form>
         </div>

        
       
       </div>
     </div>
    </>
  );
}

export default Frontpage;
