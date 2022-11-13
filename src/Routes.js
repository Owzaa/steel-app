import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import Service from './components/Services/services';
import Footer from './components/Footer/footer';
import HomeView from './components/Home/home'


function routes() {

return (

<Routes>    
  <Route path="/" element={<HomeView/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/portfolio" element={<Portfolio/>} />
  <Route path="/service" element={<Service/>} />
  <Route path="/footer" element={<Footer/>} />
</Routes>

)
}

export default routes
