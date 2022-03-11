import React from "react";
import Header from "./Components/Header/Header";
import CheckHeader from './Components/Header/CheckHeader'
// import './App.css'
import Card from "./Card";
import Body from "./Components/Body/Body";
import Body2 from "./Components/Body/Body2";
import './App.css'
import Frontpage from "./Components/Header/Frontpage";
import ShowData from "./Components/ShowData/ShowData";
function App() {
  return (
    <>
    {/* <CheckHeader/> */}
    {/* <Header></Header> */}
    {/* <div>wef</div>
   <Header2/> */}
    {/* <Header2/><Header2/> */}
    {/* </div>
    <div className="d-flex justify-content-evenly align-items-center">
    <Header3/></div> */}
    {/* <CheckHeader login={true}/> */}
    {/* <Body/>
    <Card/>
    
    <Body2/> */}
    {/* <CheckHeader/> */}
    {/* <Frontpage/> */}
    <ShowData></ShowData>
    <Body/>
    <Card/>
    <Body2/>
    
    </>
  );
}

export default App;
