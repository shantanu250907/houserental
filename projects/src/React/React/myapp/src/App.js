 import React from "react";
 import { BrowserRouter,Routes,Route } from "react-router-dom";
 import TopNavbar from "./Pages/TopNavbar";
// import Demo from './Demo.js';
import About from './Pages/About.js';
import Owner from "./Pages/Owner.js";
import Tenant from "./Pages/Tenant.js";
import PropertyListing from "./Pages/PropertyListing.js";
import FrontPage from "./Pages/FrontPage.js";
import Home from "./Pages/Home.js";
import Search from "./Pages/Search.js";
import Selling from "./Pages/Selling.js";

import Feedback from "./Pages/Feedback.js"


 function App() {
   return (
     <>
     
 <BrowserRouter>
        <TopNavbar/>
        
         <Routes>
             {/* <Route path='/Test2' element={<Test/>}/>}
          {/* <Route path='/Demo' element={<Demo/>*/}
          <Route path='/Owner' element={<Owner/>}/>
          <Route path='/Tenant' element={<Tenant/>}/>
          <Route path='/PropertyListing' element={<PropertyListing/>}/>
          <Route path='/FrontPage' element={<FrontPage/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/sell' element={<Selling/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
 
 
         </Routes>
  </BrowserRouter>
    </>
   );
 }

export default App;

