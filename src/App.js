import React from 'react';
import Register from './register/Register';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './Navbar';
import  Navlink  from './Navlink';
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Navbar/>
    <Navlink/>
<Footer/>
    </div>
  );
}

export default App;
