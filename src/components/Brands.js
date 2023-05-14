import React from 'react'
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export default function Brands() {
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

<div className=" border p-lg-3 rounded-3 shadow m-lg-5 m-5">
  <div className="row ms-lg-1 me-lg-2 mt-lg-2">
    <div className="col-lg-2">
       <h1 className='fs-3 mx-3 mt-3'>Our Partner</h1>
    </div>
    <div className="col-lg-10 ban ">
       
    <Carousel {...settings}>
    <img className='img-fluid brandban w-75  ps-lg-5 px-5' src="https://c1.neweggimages.com/brandimage/Brand8484.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand1306.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand12008.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand1623.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand8476.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand145018.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand1305.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand1314.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3 px-2' src="https://c1.neweggimages.com/brandimage/Brand12078.gif" alt="" />

  </Carousel>
    </div>

    </div>
  </div>
    {/* <div className="container-fluid mt-lg-5 ">

<Carousel className='border' {...settings}>

<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand8484.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand1306.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand12008.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand1623.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand8476.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand145018.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand1305.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand1314.gif" alt="" />
<img className='img-fluid brandban w-75 ps-lg-3' src="https://c1.neweggimages.com/brandimage/Brand12078.gif" alt="" />

</Carousel>
</div> */}
    </>
  )
}
