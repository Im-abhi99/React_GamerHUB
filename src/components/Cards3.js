import React from 'react'
import Console from "../mouse.json"
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from 'react-bootstrap/Button';

const filteredData = Console.filter(item => item.category.includes('console'))
export default function Cards3() {
       // Carousel settings
    //    const settings = {
    //     infinite: true,
    //     speed: 450,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1
    //         }
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   };
  return (
   <> 
<div className="container-fluid">
<h1 className='ms-lg-5'>Gaming Console </h1>  
        <div className="row">
          {filteredData.map((cards) => {
        
            return (
              <>

                <div className="col-lg-3">
              
                  <div className="container">
                   
                    <div className="card card4 text-center">
                    
                      <div className="card-img-top">
                        <img className="img-fluid" src={cards.image} alt="" />
                        <div className="card-title">{cards.name}</div>
                      </div>
                      <div className="card-body">
                    
                        <div className="card-text price  text-center text-danger mt-lg-0">${cards.price}/-</div>
               <Button variant="success  w-100">BUY NOW</Button>
            
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
   </>
  )
}
