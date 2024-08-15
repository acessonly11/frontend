// src/pages/HomePage.js
import React from 'react';
import Layout from '../components/Layout';


const HomePage = () => (
  <Layout>
    <>
    
  <section className="tj-slider-section">
    <div className="slider_shape">
      <img
        src="{{ asset('frontend/images/banner/home-underline.png') }}"
        alt="Image"
      />
    </div>
    <div className="swiper sc-slider-1" data-autoplay={5000}>
      <div className="swiper-wrapper">
        <div
          className="swiper-slide"
          data-bg-image="{{ asset('frontend/images/slider/home-slider-1.webp') }}"
        >
          <div className="container">
            <div className="slider-content p-z-idex">
              <h1 className="slider-title">
                RELIABLE, SECURE &amp; VALUE FOR MONEY TRANSPORTATION SERVICES
              </h1>
              <div className="slider-desc">
                ShipA1 has pledged to provide all-in-one auto transport
                solutions to all its customers and seeks your trust in return of
                our services.
              </div>
              <div className="tj-theme-button">
                <a
                  className="tj-transparent-btn ms-4 "
                  href="{{ route('quote.form.combine') }}"
                >
                  Get Quote
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="banner-shape" />
        </div>
        <div
          className="swiper-slide"
          data-bg-image="{{ asset('frontend/images/slider/home-slider-2.webp') }}"
        >
          <div className="container">
            <div className="slider-content p-z-idex">
              <h1 className="slider-title">
                RELIABLE, SECURE &amp; VALUE FOR MONEY TRANSPORTATION SERVICES
              </h1>
              <div className="slider-desc">
                ShipA1 has pledged to provide all-in-one Heavy Equipment
                transportation solutions to all its customers and seeks your
                trust in return of our services.
              </div>
              <div className="tj-theme-button">
                <a
                  className="tj-transparent-btn ms-4 "
                  href="{{ route('quote.form.combine') }}"
                >
                  Get Quote
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="banner-shape" />
        </div>
        <div
          className="swiper-slide"
          data-bg-image="{{ asset('frontend/images/slider/home-slider-3.webp') }}"
        >
          <div className="container">
            <div className="slider-content p-z-idex">
              <h1 className="slider-title">
                RELIABLE, SECURE &amp; VALUE FOR MONEY LOGISTICS SERVICES
              </h1>
              <div className="slider-desc">
                ShipA1 has pledged to provide all-in-one Freight Shipping
                solutions to all its customers and seeks your trust in return of
                our services.
              </div>
              <div className="tj-theme-button">
                <a
                  className="tj-transparent-btn ms-4 mt-4"
                  href="{{ route('quote.form.combine') }}"
                >
                  Get Quote
                  <i className="flaticon-right-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="banner-shape" />
        </div>
      </div>
      <div className="" />
    </div>
    <div className="tj-service-icon-box">
      <ul className="list-gap">
        <li>
          <div className="service-item">
            <a
              href="{{ route('vehicleTransportDetail') }}"
              className="service-link"
            >
              <div className="tj-service-icon">
                <div className="service-icon">
                  <i className="fa-light fa-car-side fa-2xs" />
                </div>
                <div className="sub-title">
                  <span>
                    VEHICLE <br />
                    TRANSPORTATION
                  </span>
                </div>
              </div>
            </a>
            <div className="service-arrow">
              <a
                href="{{ route('vehicleTransportDetail') }}"
                className="service-link"
              ></a>
              <a href="{{ route('vehicleTransportDetail') }}">
                <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="service-item">
            <a
              href="{{ route('heavy-transport-detail') }}"
              className="service-link"
            >
              <div className="tj-service-icon">
                <div className="service-icon">
                  <i className="fa-light fa-tractor fa-xs" />
                </div>
                <div className="sub-title">
                  <span>
                    HEAVY <br />
                    TRANSPORTATION 
                  </span>
                </div>
              </div>
            </a>
            <div className="service-arrow">
              <a
                href="{{ route('heavy-transport-detail') }}"
                className="service-link"
              ></a>
              <a href="{{ route('heavy-transport-detail') }}">
                 
                <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="service-item">
            <a
              href="{{ route('freighttransport-detail') }}"
              className="service-link"
            >
              <div className="tj-service-icon">
                <div className="service-icon">
                  <i className="fa-light fa-truck fa-xs" />
                </div>
                <div className="sub-title">
                  <span>
                    FREIGHT <br />
                    TRANSPORTATION
                  </span>
                </div>
              </div>
            </a>
            <div className="service-arrow">
              <a
                href="{{ route('freighttransport-detail') }}"
                className="service-link"
              ></a>
              <a href="{{ route('freighttransport-detail') }}">
                 
                <i className="fa-light fa-arrow-right" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  <section className="tj-service-section pt-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="tj-section-heading text-center">
            <span className="sub-title active-shape">What We Do</span>
            <h2 className="title">Logistic &amp; Transport</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-up"
          data-sal-duration={800}
          data-sal-delay={100}
        >
          <a
            href="{{ route('vehicleTransportDetail') }}"
            className="service-link"
          >
            <div
              className="tj-service-item"
              data-bg-image="{{ asset('frontend/images/service/vehicle-transport.webp') }}"
            >
              <div className="icon-box">
                <i className="fa-light fa-car-side fa-2xs" />
                
              </div>
              <div className="service-content">
                <h4>VEHICLE TRANSPORTATION</h4>
                <p>
                  Long established fact that reader will be distracted by the
                </p>
              </div>
            </div>
          </a>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-up"
          data-sal-duration={800}
          data-sal-delay={200}
        >
          <a
            href="{{ route('heavy-transport-detail') }}"
            className="service-link"
          >
            <div
              className="tj-service-item"
              data-bg-image="{{ asset('frontend/images/service/heavy-transport.webp') }}"
            >
              <div className="icon-box">
                <i className="fa-light fa-tractor fa-2xs" />
                
              </div>
              <div className="service-content">
                <h4>HEAVY TRANSPORTATION</h4>
                <p>
                  Long established fact that reader will be distracted by the
                </p>
              </div>
            </div>
          </a>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-up"
          data-sal-duration={800}
          data-sal-delay={300}
        >
          <a
            href="{{ route('freighttransport-detail') }}"
            className="service-link"
          >
            <div
              className="tj-service-item"
              data-bg-image="{{ asset('frontend/images/service/feright-transport.webp') }}"
            >
              <div className="icon-box">
                <i className="fa-light fa-truck fa-2xs" />
              </div>
              <div className="service-content">
                <h4>FREIGHT TRANSPORTATION</h4>
                <p>
                  Long established fact that reader will be distracted by the
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <section className="tj-cta-section icon-animate">
    <div
      className="cta-inner"
      data-bg-image="{{ asset('frontend/images/cta/cta-auto-aucation.webp') }}"
    />
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="cta-content-area">
            <div className="cta-content">
              <div className="cta-icon">
                <i className="fa-light fa-car-rear" />
              </div>
              <div className="cta-text">
                <h3 className="title">SHIP A CAR DIRECT FROM AUTO Auction</h3>
                <p className="desc">
                  We deliver quality, with prosperity. Because your Shipping
                  needs, our solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 position-relative">
          <div className="tj-theme-button">
            <a
              className="tj-transparent-btn"
              href="{{ route('quote.form.combine') }}"
            >
              GET QUOTE
              <i className="flaticon-right-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-about-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6" data-sal="slide-left" data-sal-duration={800}>
          <div className="about-content-one">
            <div className="tj-section-heading">
              <span className="sub-title active-shape">
                 
                A1 Transportation Company
              </span>
              <h2 className="title">What Makes Us Dependable?</h2>
              <p className="desc">
                Among all the shipping companies out there, factors that make us
                stand out from therest are:
              </p>
            </div>
            <div className="tj-icon-box">
              <div className="ab-text d-flex align-items-center">
                <div className="ab-icon">
                  <img
                    src="{{ asset('frontend/images/icon/winner.svg') }}"
                    alt="Icon"
                  />
                </div>
                <div className="ab-title">
                  <h5 className="title">Our Values</h5>
                </div>
              </div>
              <p className="desc">
                We are a licensed Transportation company with high moral values
                and have attained customer satisfaction through their remarks on
                esteemed platforms.
              </p>
            </div>
            <div className="tj-icon-box">
              <div className="ab-text d-flex align-items-center">
                <div className="ab-icon">
                  <i
                    className="fa-light fa-bell-concierge fa-2xl"
                    style={{ color: "#8fc445" }}
                  />
                </div>
                <div className="ab-title">
                  <h5 className="title">Scope of Services</h5>
                </div>
              </div>
              <p className="desc">
                Range of vehicles, we ship, is not limited to just conventional
                cars and motorbikes.
              </p>
            </div>
            <div className="tj-icon-box">
              <div className="ab-text d-flex align-items-center">
                <div className="ab-icon">
                  <i
                    className="fa-light fa-shield-heart fa-2xl"
                    style={{ color: "#8fc445" }}
                  />
                </div>
                <div className="ab-title">
                  <h5 className="title">Safety Is Our Priority</h5>
                </div>
              </div>
              <p className="desc">
                No matter which mode of transportation you use, ShipA1 assures
                its customers, utmostsecurity to their assets.
              </p>
            </div>
            <div className="tj-icon-box">
              <div className="ab-text d-flex align-items-center">
                <div className="ab-icon">
                  <i
                    className="fa-light fa-handshake fa-2xl"
                    style={{ color: "#8fc445" }}
                  />
                </div>
                <div className="ab-title">
                  <h5 className="title">Skilful &amp; Devoted Staff</h5>
                </div>
              </div>
              <p className="desc">
                Our team is loaded with highly experienced professionals of both
                customer dealing andvehicle handling.
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-6"
          data-sal="slide-right"
          data-sal-duration={800}
        >
          <div className="about-group-image d-flex flex-wrap align-items-start flex-column">
            <div className="tj-icon-box2 text-center">
              <div className="number-icon">
                <i className="flaticon-in-person" />
              </div>
              <div className="about-number">
                <div className="tj-count">
                  <span className="odometer" data-count={1700}>
                    0
                  </span>
                </div>
                <p className="desc">Satisfied Client</p>
              </div>
            </div>
            <div className="image-box">
              <img
                className="p-z-idex"
                src="{{ asset('frontend/images/about/about-3.webp') }}"
                alt="Image"
              />
            </div>
            <img
              className="group-1 p-z-idex"
              src="{{ asset('frontend/images/about/about-5.webp') }}"
              alt="Image"
            />
            <img
              className="group-shape"
              src="{{ asset('frontend/images/about/ab-shape.png') }}"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-cta-section-two">
    <div className="tj_cta_image" />
    <div className="tj_cta_image1" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="tj-cta-content">
            <div className="tj-section-heading">
              <span className="sub-title active-shape2"> Here We Are</span>
              <h4 className="title">
                 
                Get Anytype Quote From Your Shipping Need
              </h4>
            </div>
            <div className="tj-theme-button">
              <a
                className="tj-transparent-btn"
                href="{{ route('quote.form.combine') }}"
              >
                Get Quote
                <i className="flaticon-right-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="tj-cta-content tj-cta-content2">
            <div className="tj-section-heading">
              <span className="sub-title active-shape2">
                 
                Support Center 24/7 
              </span>
              <h4 className="title">
                Feel Free To Contact Us For Additional Info
              </h4>
            </div>
            <div className="tj-theme-button">
              <a className="tj-transparent-btn" href="{{ route('contactUs') }}">
                Get Support
                <i className="flaticon-right-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-step-section">
    <div className="container">
      <div className="row">
        <div className="tj-section-heading text-center">
          <span className="sub-title active-shape"> Working Process</span>
          <h2 className="title">We Follow Great Process</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tj-step-area">
              <div className="tj-step-item text-center">
                <div className="step-icon-box">
                  <div className="step-box" />
                  <i className="flaticon-economics" />
                  <span className="number"> 01.</span>
                </div>
                <div className="step-content">
                  <h4 className="title">Online Quote</h4>
                  <span>
                     
                    Get an instant online quote from our website or call our
                    agent.
                  </span>
                </div>
              </div>
              <div className="tj-step-item text-center">
                <div className="step-icon-box">
                  <div className="step-box" />
                  <i className="flaticon-pick" />
                  <span className="number"> 02.</span>
                </div>
                <div className="step-content">
                  <h4 className="title">Confirm Order</h4>
                  <span>
                     
                    Confirm your order over the phone and fill out the booking
                    form.
                  </span>
                </div>
              </div>
              <div className="tj-step-item text-center">
                <div className="step-icon-box">
                  <div className="step-box" />
                  <i className="flaticon-tracking" />
                  <span className="number"> 03.</span>
                </div>
                <div className="step-content">
                  <h4 className="title">Track Shipment</h4>
                  <span>
                     
                    Track your shipment by your unique order id number.
                  </span>
                </div>
              </div>
              <div className="tj-step-item text-center">
                <div className="step-icon-box">
                  <div className="step-box" />
                  <i className="flaticon-delivery-van" />
                  <span className="number"> 04.</span>
                </div>
                <div className="step-content">
                  <h4 className="title">Shipment Delivery</h4>
                  <span>
                     
                    Your shipment reached to their drop-off location.
                  </span>
                </div>
                <div className="stp-arrow">
                  <i className="fa-regular fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="tj-choose-us-section-home">
    <div className="container">
      <div className="row">
        @if (session('success'))
        <div className="alert alert-success">
          {"{"}
          {"{"} session('success') {"}"}
          {"}"}
        </div>
        @endif @if (session('error'))
        <div className="alert alert-error">
          {"{"}
          {"{"} session('error') {"}"}
          {"}"}
        </div>
        @endif
        <div
          className="col-lg-6 sal-animate"
          data-sal="slide-left"
          data-sal-duration={800}
        >
          <div className="choose-us-content-1">
            <div className="tj-section-heading">
              <span className="sub-title active-shape2">Get Instant quote</span>
              <h2 className="title">
                Get an instant quote in few simple steps
              </h2>
              <p className="desc">
                ShipA1 has pledged to provide all-in-one auto transport
                solutions to all its customers and seeks your trust in return of
                our services.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-6">
                <div className="tj-icon-box3 text-center">
                  <i className="flaticon flaticon-courier" />
                  <h6 className="title">Optimized Cost</h6>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="tj-icon-box3 text-center">
                  <i className="flaticon flaticon-cargo" />
                  <h6 className="title">Delivery on Time</h6>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="tj-icon-box3 text-center">
                  <i className="flaticon flaticon-agreement" />
                  <h6 className="title">Safety &amp; Reliability</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-sal="slide-down" data-sal-duration={800}>
          @include('partials.multi-form')
        </div>
      </div>
    </div>
  </section>

  <section className="tj-team-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="tj-section-heading text-center">
            <span className="sub-title active-shape"> Our Services</span>
            <h2 className="title">Pick Your Transport Type</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-project-section">
    <div className="tj-project-slider owl-carousel">
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.car-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/9.webp') }}"
            alt="Car Shipping Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.car-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.car-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">CAR</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.car-service') }}"
              className="title-link"
            >
              Car Shipping Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.bike-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/62.webp') }}"
            alt="Motorcycle Shipping Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.bike-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.bike-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">MOTORCYCLE</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.bike-service') }}"
              className="title-link"
            >
              Motorcycle Shipping Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.heavy-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/1.webp') }}"
            alt="Heavy Transportation Services"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.heavy-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.heavy-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">HEAVY EQUIP</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.heavy-service') }}"
              className="title-link"
            >
              Heavy Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.roro-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/roro-slider-image.webp') }}"
            alt="Roro Shipping"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.roro-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.roro-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">RORO</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.roro-service') }}"
              className="title-link"
            >
              Roro Shipping International
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.golf-cart-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/4.webp') }}"
            alt="Golf Cart Transport Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.golf-cart-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.golf-cart-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">Golf Cart</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.golf-cart-service') }}"
              className="title-link"
            >
              Golf Cart Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.atv-utv-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/atv,utv-1.webp') }}"
            alt="ATV/UTV Transport Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.atv-utv-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.atv-utv-service') }}">
             
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">ATV/UTV</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.atv-utv-service') }}"
              className="title-link"
            >
              ATV/UTV Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.construction-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/Commercial--.webp') }}"
            alt="Construction Transport Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.construction-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.construction-service') }}">
    
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">CONSTRUCTION</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.construction-service') }}"
              className="title-link"
            >
              Construction Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.farm-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/10.webp') }}"
            alt="Farm equipment Transport service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.farm-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.farm-service') }}">
       
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">FARM</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.farm-service') }}"
              className="title-link"
            >
              Farm Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.excavator-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/excavator-pickup.webp') }}"
            alt="excavator Transport service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.excavator-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.excavator-service') }}">
           
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">EXCAVATOR</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.excavator-service') }}"
              className="title-link"
            >
              Excavator Shipping Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.commercial-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/commercial-truck.webp') }}"
            alt="commercial transport service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.commercial-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.commercial-service') }}">
  
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">TRUCKS</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.commercial-service') }}"
              className="title-link"
            >
              Truck Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.reefer-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/reefer-truck-1.webp') }}"
            alt="Reefer Transport Service"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.reefer-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.reefer-service') }}">
        
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">Reefer</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.reefer-service') }}"
              className="title-link"
            >
              Reefer Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.hazmat-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/7.webp') }}"
            alt="Hazmat Transportation Services"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.hazmat-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.hazmat-service') }}">
         
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">Hazmat</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.hazmat-service') }}"
              className="title-link"
            >
              Hazmat Transportation Service
            </a>
          </h4>
        </div>
      </div>
      <div className="tj-project-item">
        <a
          href="{{ route('frontend.pages.services.dryvan-service') }}"
          className="project-link"
        >
          <img
            src="{{ asset('frontend/images/project/5.webp') }}"
            alt="Dry van Transportation Services"
          />
        </a>
        <div className="arrow-icon">
          <a
            href="{{ route('frontend.pages.services.dryvan-service') }}"
            className="project-link"
          ></a>
          <a href="{{ route('frontend.pages.services.dryvan-service') }}">
           
            <i className="fa-light fa-arrow-right" />
          </a>
        </div>
        <div className="tj-project-content">
          <span className="sub-title">Dry van</span>
          <h4>
            <a
              href="{{ route('frontend.pages.services.dryvan-service') }}"
              className="title-link"
            >
              Dry van Transportation Service
            </a>
          </h4>
        </div>
      </div>
    </div>
  </section>
 
  <section className="tj-map-section">
    <div className="google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.167331138309!2d-76.66251388426676!3d39.496062943506464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81261c3eae243%3A0x81e995e93023e64a!2s201%20International%20Cir%20STE%20230%2C%20Hunt%20Valley%2C%20MD%2021030%2C%20USA!5e0!3m2!1sen!2s!4v1649863458559!5m2!1sen!2s"></iframe>
    </div>
    <div
      className="tj-map-tabs"
      data-bg-image="{{ asset('frontend/images/banner/form-shape2.png') }}"
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Contact us
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{}}
          >
            <div className="accordion-body">
              <ul className="list-gap">
                <li>
                  <i className="flaticon-placeholder" />
                  <span>
                   
                    201 International Cir STE 230, Hunt Valley, MD 21030-1344
                  </span>
                </li>
                <li>
                  <i className="flaticon-mail" />
                  <a href="mailto:info@shipa1.com">shawntransport@shipa1.com</a>
                </li>
                <li>
                  <i className="flaticon-call" />
                  <a href="tel:1 (844) 474-4721"> 1 (844) 474-4721</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-counter-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ">
          <div className="tj-counter-area">
            <div
              className="counter-item d-flex align-items-center"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={300}
            >
              <div className="counter-icon">
                <i className="fa-light fa-car-side mt-4 fa-2xs" />
              </div>
              <div className="counter-number">
                <div className="tj-count">
                  <span className="odometer" data-count={318}>
                    0
                  </span>
                  k+
                </div>
                <span className="sub-title">Succesful Shipment</span>
              </div>
            </div>
            <div
              className="counter-item d-flex align-items-center"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={400}
            >
              <div className="counter-icon">
                <i className="flaticon-courier" />
              </div>
              <div className="counter-number">
                <div className="tj-count">
                  <span className="odometer" data-count={28}>
                    0
                  </span>
                  k+
                </div>
                <span className="sub-title">Satisfied Clients</span>
              </div>
            </div>
            <div
              className="counter-item d-flex align-items-center"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={500}
            >
              <div className="counter-icon">
                <i className="flaticon-worldwide" />
              </div>
              <div className="counter-number">
                <div className="tj-count">
                  <span className="odometer" data-count="270,092">
                    0
                  </span>
                  k
                </div>
                <span className="sub-title">Miles Covered</span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>

  </Layout>
);

export default HomePage;
