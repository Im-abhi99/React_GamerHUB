import Navbar1 from "./components/Navbar";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Offer from "./components/Offer";
import Cards2 from "./components/Cards2";
import Offers2 from "./components/Offers2";
import Card3 from "./components/Cards3"
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <>

    <Navbar1 />
    <Carousel />
    <div className="text-center">
    <img className=" container img-fluid w-100 mt-3 mb-3 " src="https://cdn.mdcomputers.in/image/catalog/2023/May/05-05-23/clearance-sale/clearence-sale.webp" alt="" />
    </div>
    <Offer />
    <Cards />
    <div className=" text-center my-3">
      <img  src="https://cdn.mdcomputers.in/image/catalog/2023/May/10-05-23/samsung-super-brand-day.webp" alt="" className=" img-fluid w-100 " />
    </div>
    <Cards2 />
    <div className=" text-center">
      <img  src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/benq-mobiuz-series-monitor-offer.webp" alt="" className=" img-fluid w-100 " />
    </div>
    <Offers2 />
    <div className=" text-center my-3 ">
      <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47e66971890947.5bd4b1c45178e.jpg" alt="" className="console img-fluid w-100" />
    </div>
    <Card3 />
    <div className=" text-center d-flex container">
      <img  src="https://promotions.newegg.com/marketplace/23-0597/800x120.jpg" alt="" className="banner img-fluid w-50 p-lg-1 me-lg-2" />      <img  src="https://promotions.newegg.com/nepro/23-0023/800x120.jpg" alt="" className="banner img-fluid w-50 p-lg-1" />
    </div>
    <Brands />
    <div className=" text-center container-fluid mt-lg-1 mb-lg-5 mb-3" >
      <img  src="https://cdn.mdcomputers.in/image/catalog/2023/May/11-05-23/clearance-sale-desktop.webp" alt="" className=" img-fluid w-100 " />
    </div>
    <Footer/>
    </>
  
  );
}

export default App;
