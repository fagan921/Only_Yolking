//import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#FFF4E5] text-[#38B6FF] py-12">
      <div className="container mx-auto flex justify-between">
        <p>&copy; Only Yolking LLC</p>
        <div className="space-x-4">
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
