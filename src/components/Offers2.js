import React from 'react'
import mouse from "../mouse.json"
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from 'react-bootstrap/Button';
const data= mouse.filter(item=>item.category.includes('mouse'))
export default function Offers2(){
        // Carousel settings
        const settings = {
          infinite: true,
          speed: 450,
          slidesToShow: 5,
          slidesToScroll: 5,
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
  <div className="">
  <div className="row ms-lg-1 me-lg-2 mt-lg-2">
    <div className="col-lg-2">
        <img className='img-fluid hide' src="https://cdn.mdcomputers.in/image/cachewebp/catalog/2023/May/09-05-23/logitech-G502-HERO-196x540.webp" alt="" />
    </div>
    <div className="col-lg-10">
        <h1 className='text-center mt-5'>Get Latest Mouse</h1>
    <Carousel {...settings}>
    {data.map((card) => (
        <div className="col" key={card.id}>
    
          <div className="container">
            
            <div className="card card3">
              <div className="card-img-fluid-top text-center mx-auto p-lg-3 ">
                <img className="img-fluid" src={card.image} alt="" />
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

    </div>
  </div>
  </>
  )
}
