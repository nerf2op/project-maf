import React, { useEffect } from 'react'
import DashboardIcon from '../../../node_modules/@mui/icons-material/GridView';
import SupportAgentRoundedIcon from '../../../node_modules/@mui/icons-material/SupportAgentRounded';
import BookmarkBorderIcon from '../../../node_modules/@mui/icons-material/BookmarkBorder';
import IconButton from '../../../node_modules/@mui/material/IconButton';
import Badge from '../../../node_modules/@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import lottie from 'lottie-web'
import AccountCircleIcon from '../../../node_modules/@mui/icons-material/AccountCircle';
import { useRef } from 'react';
//import PageviewIcon from '../../../node_modules/@mui/icons-material/Pageview';
import './Header.css'
import { requirePropFactory } from '@mui/material';

const input_div = {
  padding:"3px 18px",display:"flex",justifyContent:"space-between", width:"35vw" , background:"#fff",borderRadius:"26px",minWidth:"250px"
}
const inputObj = {
  border:"none",width:"80%",outline:"none",fontSize:"18px",color:"#000",paddingLeft:"5px"
}
function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}
function Header() {
  const container = useRef(null)
  useEffect(()=>{ lottie.loadAnimation({
      container:container.current,
      render : 'svg',
      loop : true,
      autoplay:true,
      animationData: require('./myfile.json')
    })
  },[])
  return (<>
  <div class=" w-100 row pb-3 justify-content-around align-items-center flex-row">
{/* <div className='container w-50' ref={container}>
  </div> */}
  
</div>


  </>

  )
}

export default Header