// src/pages/BlogDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const BlogDetailsPage = () => {
  const { slug } = useParams();

  return (
    <Layout>
      <h1>Blog Details</h1>
      <p>Details for the blog post with slug: {slug}. Here you can find more in-depth information about the selected blog post.</p>
    </Layout>
  );
};

export default BlogDetailsPage;
