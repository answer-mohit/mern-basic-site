import React, { useState } from 'react'
import Service from './Service';
import data from "../data";
function Services() {
    const [service,setService]=useState(data);
    return (
        <div>
        <h1 className="text-center fw-bold fst-italic text-danger py-4 ">Our Services</h1>
            <div className="container py-5">
 <div className="container py-5">
 <div className="row row-cols-1 row-cols-md-3 g-4">
 {
service.map((person)=>{
    return  <Service key={person.id} {...person}/>
})
 } 
 </div>     
 </div>
  
            </div>
        </div>
    )
}

export default Services
