import React from 'react'
import './CheckHeader.css'
import DashboardIcon from '../../../node_modules/@mui/icons-material/GridView';
import SupportAgentRoundedIcon from '../../../node_modules/@mui/icons-material/SupportAgentRounded';
import BookmarkBorderIcon from '../../../node_modules/@mui/icons-material/BookmarkBorder';
import IconButton from '../../../node_modules/@mui/material/IconButton';
import Badge from '../../../node_modules/@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import lottie from 'lottie-web'
import AccountCircleIcon from '../../../node_modules/@mui/icons-material/AccountCircle';
import Login from './Login';

import Banner from './Banner'
function CheckHeader(prop) {
  
    let isLoggedIn = true;

  return (
   <>
     {/* <div class="main" >
        <div class="navbar">
           <div class="menu">
                <ul class="nav_ul">
                    <li class="nav_li"><DashboardIcon fontSize="large"></DashboardIcon><a href="#">  DashBoard</a></li>
                    <li class="nav_li"><AccountCircleIcon fontSize="large"/><a href="#">  ACCOUNT</a></li>
                    <li class="nav_li"><ShoppingCartIcon fontSize="large"/><a href="#">  MY CART</a></li>
                </ul>
                <div class="search">
                <input class="srch" type="search" name="" placeholder="Type To text"/>
                <a href="#"> <button class="btn">Search</button></a>
            </div>
            </div>
        </div>   */}
        
{/* <Banner/> */}
      
       
   
   </>
  )
}

export default CheckHeader