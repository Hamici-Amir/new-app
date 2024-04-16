import {Navbar} from "./conponants/Navbar" ;
import {Hero} from "./conponants/Hero" ;
import {Analytics} from "./conponants/Analytics" ;
import {Newsletter} from "./conponants/Newsletter" ;
import {Cards} from "./conponants/Cards" ;
import {Footer} from "./conponants/Footer" ;
import './App.css';
import React from "react";
function App() {
  return (
   <div >
      
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      
      

   </div>
   
  ); 
}

export default App;
