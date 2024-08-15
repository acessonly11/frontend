// src/pages/ContactUsPage.js
import React from 'react';
import Layout from '../components/Layout';
import styles from '../assets/CSS/CustomQuateCard.css';

const ContactUsPage = () => (
  <Layout>
    <>
  <section className="tj-choose-us-section-get-quote pt-200">
    <div className="container w-75">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card car-card">
            <div className="card-body">
              <div className="card-icon">
              
              </div>
              <h5 className="card-title">Car</h5>
              <p className="card-text">Sedan, SUV, Pickup etc.</p>
              <a href="{{ route('form.vehicle.car') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card motorcycle-card">
            <div className="card-body">
              <div className="card-icon">
              
              </div>
              <h5 className="card-title">Motorcycle</h5>
              <p className="card-text">Mopeds, Power Sports etc.</p>
              <a href="{{ route('form.vehicle.form.vehicle.car') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card atv-utv-card">
            <div className="card-body">
              <div className="card-icon">
                
              </div>
              <h5 className="card-title">ATV/UTV</h5>
              <p className="card-text">Sport, Quads, Military etc.</p>
              <a href="{{ route('form.vehicle.atv_utv') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card golf-cart-card">
            <div className="card-body">
              <div className="card-icon">
              
              </div>
              <h5 className="card-title">Golf Cart</h5>
              <p className="card-text">Utility cart, electric cart etc.</p>
              <a href="{{ route('form.vehicle.golf_cart') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card construction-card">
            <div className="card-body">
              <div className="card-icon">
              
              </div>
              <h5 className="card-title">Construction</h5>
              <p className="card-text">Cranes, Drills, Grinders etc.</p>
              <a href="{{ route('frontend.forms.construction_transport') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card heavy-equip-card">
            <div className="card-body">
              <div className="card-icon">
                
              </div>
              <h5 className="card-title">Heavy Equip</h5>
              <p className="card-text">Trucks, Bulldozers etc.</p>
              <a href="{{ route('form.vehicle.heavyEquipment') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card excavator-card">
            <div className="card-body">
              <div className="card-icon">
             
              </div>
              <h5 className="card-title">Excavator</h5>
              <p className="card-text">Digger, Driller, Miners etc.</p>
              <a href="{{ route('frontend.forms.excavator') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="custom-card boat-card">
            <div className="card-body">
              <div className="card-icon">
               
              </div>
              <h5 className="card-title">Boat</h5>
              <p className="card-text">Speedboats, yard, jet skis etc.</p>
              <a href="{{ route('form.vehicle.boat') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="custom-card rv-card">
            <div className="card-body">
              <div className="card-icon">
              
              </div>
              <h5 className="card-title">RV</h5>
              <p className="card-text">Motorhome, camper van etc.</p>
              <a href="{{ route('frontend.forms.rv_transport') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="custom-card commercial-card">
            <div className="card-body">
              <div className="card-icon">
         
              </div>
              <h5 className="card-title">Commercial Truck</h5>
              <p className="card-text">Commercial, Dump Trucks etc.</p>
              <a href="{{ route('commercial.truck.transport') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="custom-card farm-card">
            <div className="card-body">
              <div className="card-icon">
                
              </div>
              <h5 className="card-title">Farm</h5>
              <p className="card-text">Tractor, Planter, Baler etc.</p>
              <a href="{{ route('frontend.forms.farm_transport') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="custom-card Reefer-card">
            <div className="card-body">
              <div className="card-icon">
               
              </div>
              <h5 className="card-title">Reefer</h5>
              <p className="card-text">frozen , refrigerated etc.</p>
              <a href="{{ route('frontend.forms.reefertrucking') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="custom-card hazmat-card">
            <div className="card-body">
              <div className="card-icon">
               
              </div>
              <h5 className="card-title">Hazmat</h5>
              <p className="card-text">Explosive, Flammable, etc.</p>
              <a href="{{ route('frontend.forms.hazmattransport') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="custom-card dry-van-card">
            <div className="card-body">
              <div className="card-icon">
               
              </div>
              <h5 className="card-title">Dry Van</h5>
              <p className="card-text">palletized, boxed, freight etc.</p>
              <a href="{{ route('frontend.forms.dryvan') }}">
                <button className="tj-submit-btn" type="button">
                  Get Quote
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
 
</>


  </Layout>
);

export default ContactUsPage;
