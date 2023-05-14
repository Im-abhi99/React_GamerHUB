import abhi from "../store.json"
import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from 'react-bootstrap/Button';

const limitedData = abhi.slice(0, 10)
const filteredData = abhi.filter(item => item.categories.includes('Accessories'))
export default function Cards() {
    // Carousel settings
    const settings = {
      infinite: true,
      speed: 450,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
return (  
    <>
<div className="container-fluid mt-lg-5 ">
<h1 className="ms-lg-5">Assessories</h1>
<Carousel {...settings}>
    {filteredData.map((card) => (
        <div className="col" key={card.id}>
    
          <div className="container">
            
            <div className="card card1">
              <div className="card-img-fluid-top image text-center mx-auto p-lg-3 p-2 ">
                <img className="img-fluid img" src={card.image} alt="" />
                </div>
              <div className="card-body">
              <div className="card-title">{card.name}</div>
                <div className="card-text">{card.description}<br/>
               
               </div>
               <div className="card-text price text-center text-danger mt-lg-3">${card.price}/-</div>
               <Button className="btn" variant="  w-100">BUY NOW</Button>
              </div>
             
            </div>
          </div>
 
        </div>
      ))}
  </Carousel>
</div>

    </>
  )
}
