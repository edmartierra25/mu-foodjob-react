import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LANG, MuxProvider } from '@manulife/mux';

import Layout from './components/Layout';
<<<<<<< Updated upstream
// import Home from './pages/Home';
import Restaurant from './pages/Restaurants';
import Menu from './pages/Menu';

import AddToCart from './pages/AddToCart';
import Cart from './pages/Cart';
=======
// import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Order from './pages/Order';
import ManageOrder from './pages/ManageOrder';
import ManageStore from './pages/ManageStore';


>>>>>>> Stashed changes

import './App.css';

const App = () => {
  const [lang, setLang] = useState(LANG.EN_CA);

  function toggleLang() {
    setLang(lang === LANG.EN_CA ? LANG.FR_CA : LANG.EN_CA);
  }

  return (
    <MuxProvider langProvider={{ lang }}>
      <BrowserRouter>
        <Layout toggleLang={toggleLang}>
          <Routes>
<<<<<<< Updated upstream
            <Route path="/" element={<Restaurant title="Restaurant"/>} />
            <Route path="/view-restaurants" element={<Restaurant title="Restaurant"/>} />
            <Route path="/view-menu" element={<Menu title="Menu"/>} />
            <Route path="/view-cart" element={<Cart title="Cart"/>} />
            <Route path="/add-to-cart" element={<AddToCart title="Add to Cart" />} />
=======
            <Route path="/" element={<Home />} />
            <Route path="/view-order" element={<Order title="Order"/>} />
            <Route path="/manage-order" element={<ManageOrder title="ManageOrder"/>} />
            <Route path="/manage-store" element={<ManageStore title="ManageStore"/>} />
>>>>>>> Stashed changes
          </Routes>
        </Layout>
      </BrowserRouter>
    </MuxProvider>
  );
};

export default App;
