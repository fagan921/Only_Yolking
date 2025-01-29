import React from 'react';

function Map() {
  return (
    <div className="w-full max-w-4xl h-96 border-2 border-gray-300 rounded-lg shadow-md overflow-hidden">
      <iframe
        title="Find Us"
        className="w-full h-full"
        src="https://maps.app.goo.gl/KyiLbpiwybNhX3JM7"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
