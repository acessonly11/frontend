import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "../assets/img/logo/old-logo.png"; // Adjust the path as necessary
import '../assets/js/main.js';



const Header = () => {
  const [navbars, setNavbars] = useState([]);
  const [services, setServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navbarResponse = await axios.get("/api/navbars");
        const serviceResponse = await axios.get("/api/services");
        setNavbars(navbarResponse.data);
        setServices(serviceResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const isActive = (path) => location.pathname.includes(path);

  return (
    <header>
      <div className="tj-header-section" id="header-sticky">
        <div className="container" style={{ borderRadius: 12 }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-color d-flex flex-wrap">
                <div className="logo-area">
                  <div className="logo-box">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                </div>

                <div className="header-content-area">
                  <div className="header-topbar">
                    <div className="topbar-content-area d-flex flex-wrap align-items-center justify-content-start">
                      <div className="header-content-right mr-4">
                        <span>
                          <i
                            className="fa-regular fa-mobile-screen fa-bounce fa-lg"
                            style={{ color: "#8fc445" }}
                          />
                          <a
                            href="tel:1 (844) 474-4721"
                            className="text-white nav-num-hover"
                          >
                            1 (844) 474-4721
                          </a>
                        </span>
                      </div>
                      <div className="header-content-left me-auto">
                        <span>
                          <i
                            className="fa-regular fa-envelope fa-bounce fa-lg"
                            style={{ color: "#8fc445" }}
                          />
                          <a
                            href="mailto:info@shipa1.com"
                            className="text-white"
                          >
                            shawntransport@shipa1.com
                          </a>
                        </span>
                      </div>
                      <div className="header-content-right">
                        <div className="header-social-icon">
                          <ul className="list-gap social-list">
                            <li>
                              <a href="https://www.facebook.com/shipa1autotransport">
                                <i className="fa-brands fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.youtube.com/@shipA1autotransport">
                                <i className="fa-brands fa-youtube" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/shipa1-transport/">
                                <i className="fa-brands fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a href="https://twitter.com/ShipA1Transport">
                                <i className="fa-brands fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.yelp.com/biz/ship-a1-hunt-valley">
                                <i className="fa-brands fa-yelp" />
                              </a>
                            </li>
                            <li>
                              <a href="https://wa.me/+14107184031">
                                <i className="fa-brands fa-whatsapp" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/shipa1_transport/">
                                <i className="fa-brands fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header-content d-flex flex-wrap align-items-center justify-content-between">
                    <div className="mobile-logo-area d-lg-none">
                      <Link to="/">
                        <img src={logo} alt="Logo" />
                      </Link>
                    </div>

                    <div
                      className="tj-main-menu d-lg-block d-none text-end"
                      id="main-menu"
                    >
                      <ul className="main-menu">
                        <li className="ab-gap">
                          <Link to="/" className={isActive("/") ? "active" : ""}>
                            Home
                          </Link>
                        </li>
                        <li className="ab-gap">
                          <Link
                            to="/quote/form/combine"
                            className={isActive("/quote/form/combine") ? "active" : ""}
                          >
                            Get a Quote
                          </Link>
                        </li>
                        <li className="current-menu-item menu-item-has-children">
                          <Link
                            to="/services"
                            className={isActive("/services") ? "active" : ""}
                          >
                            Services
                          </Link>
                          <ul className="list-gap sub-menu-list sub-menu-list-2">
                            <div className="row">
                              {/* Example for Vehicle Transportation */}
                              <div className="col-sm-4 bd-l bd-r">
                                <Link
                                  className="mb-3"
                                  style={{
                                    letterSpacing: 1,
                                    fontSize: "larger",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                  }}
                                  to="#"
                                >
                                  Vehicle Transportation
                                </Link>
                                <li>
                                  <Link className="title" to="/form/vehicle/atv-utv">
                                    ATV/UTV Transport
                                  </Link>
                                </li>
                                {/* Add other service links here */}
                              </div>
                              {/* Add other columns as necessary */}
                            </div>
                          </ul>
                        </li>
                        <li className="ab-gap">
                          <Link
                            to="/auto-auction"
                            className={isActive("/auto-auction") ? "active" : ""}
                          >
                            Auto Auction
                          </Link>
                        </li>
                        <li className="ab-gap">
                          <Link
                            to="/blogs"
                            className={isActive("/blogs") ? "active" : ""}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact-us"
                            className={isActive("/contact-us") ? "active" : ""}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/order-tracking"
                            className={isActive("/order-tracking") ? "active" : ""}
                          >
                            Track Order
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="header-menu-select d-flex align-items-center justify-content-end">
                      <div className="header-language">
                        <ul className="languages dropdown">
                          <li>
                            <ul className="lang_lists">
                              <li>
                                <Link>
                                  <img
                                    src="../assets/images/icon/flag-1.png" // Adjust the path as necessary
                                    alt="Icon"
                                  />
                                </Link>
                              </li>
                              {/* Add other languages as necessary */}
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="tj-header-button d-none d-lg-block">
                        <Link
                          className="tj-header-btn"
                          to="/quote/form/combine"
                        >
                          Get Quote
                          <i className="flaticon-right-1" />
                        </Link>
                      </div>
                      <div className="tj-hambagur-icon d-lg-none">
                        <Link
                          className="canva_expander nav-menu-link menu-button"
                          to="#"
                        >
                          <span className="dot1" />
                          <span className="dot2" />
                          <span className="dot3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
