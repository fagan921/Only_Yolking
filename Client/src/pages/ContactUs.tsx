// import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto py-10 px-4 flex flex-col items-center">
      {/* Page Title with Genty Font */}
      <h1 className="text-4xl sm:text-5xl text-blue-400 mb-5"
        style={{ fontFamily: 'Genty Regular, serif' }}>
        Contact Us
      </h1>

      <div className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg border border-gray-300 text-center">
        {/* Phone */}
        <div className="mb-10">
          <p className="text-2xl font-semibold text-gray-800 mb-2">📞 Phone:</p>
          <a
            href="tel:+15418527638"
            className="text-xl text-blue-500 hover:underline"
          >
            (541) 852-7638
          </a>
        </div>

        {/* Email */}
        <div className="mb-10">
          <p className="text-2xl font-semibold text-gray-800 mb-2">📧 Email:</p>
          <a
            href="mailto:OnlyYolkingTruck@gmail.com"
            className="text-xl text-blue-500 hover:underline"
          >
            OnlyYolkingTruck@gmail.com
          </a>
        </div>

        {/* Social Media */}
        <div className="mb-10">
          <p className="text-2xl font-semibold text-gray-800 mb-4">📱 Follow Us:</p>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.instagram.com/Only_Yolking/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 hover:underline"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/people/Only-Yolking/100087416063962/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 hover:underline"
            >
              Facebook
            </a>

            <a
              href="https://www.yelp.com/biz/only-yolking-eugene"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-red-500 hover:underline"
            >
              Yelp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;