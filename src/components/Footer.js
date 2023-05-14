import React from 'react'

export default function Footer() {
  return (
   <>
   <div class="footer">
  <div class="container-fluid pt-lg-5 pt-5">
    <div class="row">
      <div class="col-6 ps-lg-5 ms-lg-5 col-md-2 ">
        <h5 className='fs-5'>Customer</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Help sCenter</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Track an Order</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Return an Item</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Return Policy</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Feedback</a></li>
        </ul>
      </div>

      <div class="col-6 ps-lg-5 col-md-2 mb-3">
        <h5 className='fs-5'>My Account</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Login/Register</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Order History</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Returns History</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Address Book</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Wish Lists</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5 className='fs-5'>COMPANY INFORMATION</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">About Us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Awards/Rankings</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Investor Relations</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-links p-0">Press Inquiries
</a></li>
        </ul>
      </div>

      <div class="col-md-5  mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
            <button class="btn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex container-fluid flex-column flex-sm-row justify-content-between pt-lg-2 pt-2 border-top border-5 border-white">
      <p>© 2023 Rachamalla Abhishek Kumar, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-facebook"></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-youtube"></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-linkedin"></i></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
</div>
   </>
  )
}
