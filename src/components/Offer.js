import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Offer() {
  return (
  <>
  <div className="offer" id='offer'>
   <h1 className='ms-lg-5 ms-3 fs-1'>Razer Offer</h1>
   <div className="row ms-lg-2 me-lg-2 ms-1 me-1">
    <div className="col-lg w-25">
    <Card >
        <Card.Img variant="top" src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/razer-headset-offer.webp" />
        <Card.Body>
          <Button  className='btn2'variant="primary w-100" >BUY NOW</Button>
        </Card.Body>
      </Card>
    </div>
   
    <div className="col-lg w-25">
    <Card>
        <Card.Img variant="top" src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/razer-keyboard-offer.webp" />
        <Card.Body>
          <Button className='btn2' variant="primary w-100">BUY NOW</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg w-25">
    <Card>
        <Card.Img variant="top" src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/razer-mouse-offer.webp" />
        <Card.Body>
          <Button className='btn2' variant="primary w-100">BUY NOW</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg w-25">
    <Card>
        <Card.Img variant="top" src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/razer-mouse-pad-offer.webp" />
        <Card.Body>
          <Button className='btn2' variant="primary w-100">BUY NOW</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="col-lg w-25 hide">
    <Card>
        <Card.Img variant="top" src="https://cdn.mdcomputers.in/image/catalog/2023/May/02-05-23/razer-accessories-offer.webp" />
        <Card.Body>
          <Button className='btn2' variant="primary w-100">BUY NOW</Button>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>
    
  </>
  )
}
