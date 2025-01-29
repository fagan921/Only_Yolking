import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'; // 
//import FindUs from '../pages/FindUs';
//import Menu from '../pages/Menu';
//import Gallery from '../pages/Gallery';
//import ContactUs from '../pages/ContactUs';
//import Shop from '../pages/Shop';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-us" element={<FindUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;