import React from 'react';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          We are passionate about providing high-quality services to our users.
        </p>
      </div>
    </Layout>
  );
}

export default About;
