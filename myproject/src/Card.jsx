
import './Card.css'
import  React,{ useState ,useEffect} from 'react';
import axios from 'axios'

export default function Card() {
    const obj = [{
        src:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_1080x.png?v=1625045372",
        name:"Wyze announces",
        Brand:"Wyze",
        Tag:"Trending"
       
    },{
        src:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_1080x.png?v=1625045372",
        name:"boAt Storm",
        Brand:"boAt",
        Tag:"Popular"
    },{ src:"https://img.tatacliq.com/images/i6/1348Wx2000H/MP000000007530804_1348Wx2000H_20200820184600.jpeg",
        name:"realme Classic Smartwatch",
    Brand:"Realme",
    Tag:"Popular"

    },{src:"https://m.media-amazon.com/images/I/616bFs167NL._SX679_.jpg",
         name:"Fire-Boltt Ring Bluetooth Calling Smartwatch",
    Brand:"Bolt",
    Tag:"new"

    }]

    const [Data,setData] =useState();
useEffect(()=>{
    getProduct();
},[]);
const getProduct = async ()=>{
    const {val} = await axios.get("https://fakestoreapi.com/products");
    console.log("Data => "+{val});
    setData(val);
}
   
  return (<>
  <div class="type_div"> <p className='type_div_p'>Top Picked Products</p></div>
  <ul className="crousel__ul" style={{scrollX:"hidden" }}>
      {
          obj.map((cur)=>{
              return <> <li class="crousel__li"><div className="product-box">
     <a href="#">
     <p class="header">{cur.Tag}</p>
         <strong>{cur.Brand}</strong>
         <img src={cur.src}></img>
         <div className='available-colors'>
             <div className="product-colors" style={{backgroundColor:"#5c5b58"}}></div>
             <div className="product-colors" style={{backgroundColor:"#e5e6e2"}}></div>
             <div className="product-colors" style={{backgroundColor:"#fcebd5"}}></div>
             <div className="product-colors" style={{backgroundColor:"#3f5d6a"}}></div>
         </div>
         <div className='rating'><strong>Rating</strong></div>
         <div class="buy-price">
               <div className="buy-price-name"> <h4 style={{color:"#d2d4db"}}>{cur.name}</h4> </div>  
             <a href="#" class="buy-btn">Buy</a>
         </div>
     </a>
 </div></li></>
          })
      }
     
      
      
  </ul>
  </>
  )
}
