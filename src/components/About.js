import React from 'react'
import about from '../image/about.jpg';
import "../image/about.jpg";
function About() {
    return (
        <div>
        <img src={about} alt="about" className="img"/>
        <div className="container py-5">
            <h1 className="text-center py-3 fw-bold text-danger">
                About Us
              
            </h1>
            <div class="row">
                <div className="col-8  mx-auto">
                    <h4 className='font-monospace text-center lh-lg fst-italic'>
                    A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Go or Java in the server,
                     and http for communications between client and server. A web content management system is often used to develop and maintain web applications.
                    </h4>
                </div>
            </div> 

        </div>
        </div>
    )
}

export default About
