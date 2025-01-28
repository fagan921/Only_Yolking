import React from 'react';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl text-center border-2 border-gray-300 rounded-lg p-8 bg-white shadow-md">
          <p className="text-lg text-gray-800 leading-relaxed">
            "We are Liz and Koa, the proud owners of <strong>Only Yolking!</strong> Our food cart was born from a shared
            love of cooking and all things breakfast. The classic egg-in-the-hole, known by many names, holds a special
            place in countless hearts, including ours. 
            <br /><br />
            For me, Liz, it’s more than just comfort food—it’s a cherished memory. My mom would make egg-in-the-holes 
            for me growing up, whether to lift my spirits or to fuel me before a big day.
            <br /><br />
            We’re so excited to share this nostalgic favorite with you, made with the same care and love we’ve always put 
            into our cooking. Thank you for supporting our small, local business—we truly appreciate it and hope you enjoy every bite!"
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;