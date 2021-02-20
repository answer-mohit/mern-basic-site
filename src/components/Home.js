import React from 'react'
import home from '../image/home.jpg';
import home2 from '../image/home2.jpg'
import "./home.css"
function Home() {
    return (
     <div className="home">
        <img src={home} alt="home" className="img img-fluid"/>
<div className="container my-5">
    <div className="row">
        <div className="col">
            <h1 className="py-4 fw-bold text-primary text-center display-6">
Home
            </h1>
            <div className="line">

            </div>
            <div className="row">
                <div className="col-md-6 col-10 order-sm-1">
                    <p className="text-secondary lh-lg fst-italic py-5"> We are Web develpers. we create and develop the websites
                    and make their functional qualities  better.
                    We are learning new languages and implement them to their features. the languages are HTML,CSS, Javascript, React and etc.
                    the languages are daily updates   </p>
                </div>
                <div className="col-md-6 col-12 order-sm-2">
                    <img src={home2} alt="hom2" className="img-fluid col_img rounded"/>
                </div>
            </div>
        </div>
    </div>
</div>        
     
     
        </div>
    )
}

export default Home
