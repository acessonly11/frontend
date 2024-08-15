// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    <>
 
  <footer className="tj-footer-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
          <div className="footer-widget footer1_col_1 footer-content-info">
            <a href="{{ route('welcome') }}">
            
              <img
                src="{{ asset('frontend/images/logo/logo-white.png') }}"
                alt="Logo"
              />
            </a>
            <p>
              Ship A1 Transport is one of the top logistic and shipping
              companies, with a vast variety of shipping methods, quality
              services, and a well-equipped staff.
            </p>
            <div className="footer-social-icon">
              <ul className="list-gap">
                <li className="mb-2">
                  <a href="https://www.facebook.com/ShipA1/">
             
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shipa1_transport/">
               
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shipa1-transport/">
                  
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@shipA1392">
                    
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
          <div className="footer-widget footer1_col_2 widget_nav_menu">
            <div className="footer-title">
              <h5 className="title">Our Services</h5>
            </div>
            <div className="widget-menu">
              <ul>
                <li>
                  <a href="{{ route('frontend.pages.services.boat-service') }}">
                    Boat Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.car-service') }}">
                    Car Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.dryvan-service') }}">
                    Dry Van Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.golf-cart-service') }}">
                    Golf Cart Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.heavy-service') }}">
                    Heavy Equipment
                  </a>
                </li>
                <li style={{ width: "108%" }}>
                  <a href="{{ route('frontend.pages.services.bike-service') }}">
                    Motorcycle Shipping
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.reefer-service') }}">
                    Reefer Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('frontend.pages.services.rv-service') }}">
                    RV Transport
                  </a>
                </li>
                <li>
                  <a href="{{ route('services') }}">View More</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="footer-widget footer1_col_3 widget_nav_menu">
            <div className="footer-title">
              <h5 className="title">Useful Links</h5>
            </div>
            <div className="widget-menu">
              <ul>
                <li>
                  <a href="{{ route('aboutUs') }}">About Us </a>
                </li>
                <li>
                  <a href="{{ route('blogs') }}">Blogs</a>
                </li>
                <li>
                  <a href="{{ route('contactUs') }}">Contact Us</a>
                </li>
                
                <li>
                  <a href="{{ route('faq') }}">FAQ!</a>
                </li>
                <li>
                  <a href="{{ route('order.form') }}">Order Form</a>
                </li>
                <li>
                  <a href="{{ route('blogs.trailer.truck') }}">
                    Trailers &amp; Trucks
                  </a>
                </li>
                <li>
                  <a href="{{ route('order.tracking') }}">Track Order </a>
                </li>
                <li>
                  <a href="{{ route('termsAndConditions') }}">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="{{ route('privacyPolicy') }}">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div className="footer-widget footer1_col_4 footer-contact-info">
            <div className="footer-title">
              <h5 className="title">Contact Info</h5>
            </div>
            <div className="widget-contact">
              <div className="contact-list">
                <ul className="list-gap">
                  <li>
                    <i className="flaticon-placeholder" />
                    <a href="https://www.google.com/maps/place/201+International+Cir+STE+230,+Hunt+Valley,+MD+210301344,+USA/@39.4960629,-76.6603247,17z/data=!3m2!4b1!5s0x89c8128abe53a693:0xccf0052e1abf77f2!4m6!3m5!1s0x89c81261c3eae243:0x81e995e93023e64a!8m2!3d39.4960629!4d-76.6603247!16s%2Fg%2F11scxbqcdd?entry=ttu">
                   
                      201 International Cir STE 230, Hunt Valley, MD 21030-1344
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone-call" />
                    <a href="tel: 1 (844) 474-4721"> 1 (844) 474-4721</a>
                  </li>
                  <li>
                    <i className="flaticon-email-2" />
                    <a href="mailto:info@shipa1.com">
                  
                      shawntransport@shipa1.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer-copyright-area">
              <div className="copyright-target">
                <p>Copyright © 2024 ShipA1. All Rights Reserved.</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  </footer>
);

export default Footer;
