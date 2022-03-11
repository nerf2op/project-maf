import React from 'react'
import './CheckHeader.css'
import Login from './Login';
function Banner() {
    const [pop,setpop] = React.useState(false);
  return (
    <div class="content"><div className='w-50 border-danger'></div><div className='d-flex flex-column'>
    <div class="content1" style={ !pop ? { display:'block'} : {display : 'none'} }   >  <button class="cn" onClick={()=>{
        setpop(true);
    }}><a class="btn__a" href="#" >Explore US</a></button></div>
         <div>  <Login tri={pop}/></div>
                </div></div>
           


          
  )
}

export default Banner