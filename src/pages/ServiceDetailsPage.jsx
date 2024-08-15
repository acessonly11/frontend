// src/pages/ServiceDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const ServiceDetailsPage = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <h1>Service Details</h1>
      <p>Details for the service with slug: {slug}. Here you can find more information about the specific service you are interested in.</p>
    </Layout>
  );
};

export default ServiceDetailsPage;
