import React, { useState } from 'react'

function Service({id,title,img,url,detail}) {
    const [readmore,setreadmore]=useState(false);
    return (
        
            
  <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        {readmore?detail:`${detail.substring(0,50)}`}

        <button type="button" className="btn btn-link" onClick={()=>setreadmore(!readmore)}>{readmore?'read less':'read more'}</button>
        </p>
        { readmore&&<a href={url} className="btn btn-primary">learn more </a>}
      </div>
    </div>
  </div>
  
      
    )
}

export default Service
