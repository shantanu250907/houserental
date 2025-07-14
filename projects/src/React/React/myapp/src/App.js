 import React from "react";
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import TopNavbar from "./Pages/TopNavbar";
// import Demo from './Demo.js';
import About from './About.js';
import Owner from "./Pages/Owner.js";
import Tenant from "./Pages/Tenant.js";
import PropertyListing from "./Pages/PropertyListing.js";
import FrontPage from "./Pages/FrontPage.js";
import Test2 from "./Test2.js";
import Home from "./Pages/Home.js";



 function App() {
   return (
     <>
     
       
 <BrowserRouter>
        <TopNavbar/>
        
         <Routes>
             {/* <Route path='/Test2' element={<Test/>}/>}
          {/* <Route path='/Demo' element={<Demo/>*/}
         <Route path='/About' element={<About/>}/>
          <Route path='/Owner' element={<Owner/>}/>
          <Route path='/Tenant' element={<Tenant/>}/>
          <Route path='/PropertyListing' element={<PropertyListing/>}/>
          <Route path='/FrontPage' element={<FrontPage/>}/>
           <Route path='/Home' element={<Home/>}/>
          
 
 
         </Routes>
  </BrowserRouter>
    </>
   );
 }

export default App;

// import React from "react";
// import Demo2 from "../src/ReactPractice/Demo2";

// function App() {
//   return (
//     <>
//      <Demo2/> 
//      </>
//   );
// }

// export default App;