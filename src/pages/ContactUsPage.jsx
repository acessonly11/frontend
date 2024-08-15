// src/pages/ContactUsPage.js
import React from 'react';
import Layout from '../components/Layout';

const ContactUsPage = () => (
  <Layout>
    <>
  
  <section
    className="breadcrumb-wrapper"
    data-bg-image="{{ asset('frontend/images/banner/all-cover-banner.webp') }}"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title text-center">Contact Us</h1>
            <div className="breadcrumb-link">
              <span>
                <a href="{{ route('welcome') }}">
                  <span>Home</span>
                </a>
              </span>
              &gt;
              <span>
                <span> Contact</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="tj-contact-page">
    <div className="container">
      <div className="row tj-contact-box">
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-left"
          data-sal-duration={800}
        >
          <div className="tj-contact-list">
            <div className="contact-icon">
              <i className="flaticon-phone-call" />
            </div>
            <div className="contact-header">
              <span>Any Questions? Call us</span>
              <a href="tel: 1 (844) 474-4721">1 (844) 474-4721</a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-top"
          data-sal-duration={800}
        >
          <div className="tj-contact-list">
            <div className="contact-icon">
              <i className="flaticon-email-3" />
            </div>
            <div className="contact-header">
              <span>Any Questions? Email us</span>
              <a href="mailto:info@shipa1.com" className="text-break">
             
                shawntransport@shipa1.com
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6"
          data-sal="slide-right"
          data-sal-duration={800}
        >
          <div className="tj-contact-list">
            <div className="contact-icon">
              <i className="flaticon-map" />
            </div>
            <div className="contact-header">
              <span>201 International Cir STE 230,</span>
              <a href="#"> Hunt Valley, MD 21030-1344</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div
          className="col-lg-7"
          data-sal="slide-right"
          data-sal-duration={800}
        >
          <div className="tj-section-heading">
            <span className="sub-title active-shape"> Need Any Help?</span>
            <h3 className="title">Get in Touch With Us</h3>
          </div>
          <div className="tj-animate-form d-flex align-items-center">
            <form
              id="contactForm"
              className="animate-form"
              action="{{ route('contact_messages.store') }}"
              method="POST"
            >
              @csrf
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input"
                      name="first_name"
                      placeholder=" "
                    />
                    <label className="form__label">First Name</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input"
                      name="last_name"
                      placeholder=" "
                    />
                    <label className="form__label">Last Name</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input"
                      name="phone"
                      placeholder=" "
                    />
                    <label className="form__label">Phone</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="email"
                      className="form__input"
                      name="email"
                      placeholder=" "
                    />
                    <label className="form__label">Email Address</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input"
                      name="website"
                      placeholder=" "
                    />
                    <label className="form__label">Website</label>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input"
                      name="subject"
                      placeholder=" "
                    />
                    <label className="form__label">Subject</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form__div">
                    <input
                      type="text"
                      className="form__input textarea"
                      name="message"
                      placeholder=" "
                    />
                    <label className="form__label">Message</label>
                  </div>
                </div>
              </div>
              <div className="tj-theme-button">
                <button
                  id="submitButton"
                  className="tj-primary-btn contact-btn"
                  type="button"
                >
                  Send Message <i className="flaticon-right-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5" data-sal="slide-left" data-sal-duration={800}>
          <div className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.167331138309!2d-76.66251388426676!3d39.496062943506464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81261c3eae243%3A0x81e995e93023e64a!2s201%20International%20Cir%20STE%20230%2C%20Hunt%20Valley%2C%20MD%2021030%2C%20USA!5e0!3m2!1sen!2s!4v1649863458559!5m2!1sen!2s"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</>

  </Layout>
);

export default ContactUsPage;
