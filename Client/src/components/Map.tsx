function Map() {
  return (
    <div className="w-full max-w-6xl h-[500px] md:h-[600px] lg:h-[700px] border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <iframe
        title="Find Us"
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.2762026255905!2d-123.11175932329907!3d44.057004926219875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11f8c41473dd3%3A0xe26b4aeb3e7df45b!2sOnly%20Yolking!5e0!3m2!1sen!2sus!4v1738098857246!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;