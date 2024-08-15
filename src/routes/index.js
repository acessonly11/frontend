import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import AboutUsPage from '../pages/AboutUsPage';
import QuoteForm from '../pages/QuoteForm';
import AutoAction from '../pages/AutoAction';
import ContactUsPage from '../pages/ContactUsPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
// import AdminDashboardPage from '../pages/Admin/AdminDashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
// import '../assets/CSS/style.css';
// import '../assets/CSS/responsive.css';
// import '../assets/CSS/animate.css';
// import '../assets/js/meanmenu.js';
 

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailsPage />} />
      <Route path="/about_us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/auto-auction" element={<AutoAction />} />
      <Route path="/services/:slug" element={<ServiceDetailsPage />} />
      <Route path="/quote/form/combine" element={<QuoteForm />} />
      {/* <Route path="/admin" element={<AdminDashboardPage />} /> */}
      {/* Add other admin routes here */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;



