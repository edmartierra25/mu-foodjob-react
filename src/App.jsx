import { useState } from 'react';
import { LANG, MuxProvider } from '@manulife/mux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AddToCart from './pages/AddToCart';
import Cart from './pages/Cart';
// import AdminLayout from './components/AdminLayout';
// import Home from './pages/Home';
// import Order from './pages/Order';
import ManageOrder from './pages/ManageOrder';
import ManageStore from './pages/ManageStore';
import Menu from './pages/Menu';
// import Home from './pages/Home';
import Restaurant from './pages/Restaurants';

import './App.css';

import Login from './pages/Login';

const App = () => {
  const [lang, setLang] = useState(LANG.EN_CA);
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState('admin');

  function toggleLang() {
    setLang(lang === LANG.EN_CA ? LANG.FR_CA : LANG.EN_CA);
  }

  return (
    <MuxProvider langProvider={{ lang }}>
      <BrowserRouter>
        {!isLogin ? (
          <Routes>
            <Route
              path="/"
              element={<Login setIsLogin={setIsLogin} setRole={setRole} />}
            />
            <Route
              path="/login"
              element={<Login setIsLogin={setIsLogin} setRole={setRole} />}
            />
          </Routes>
        ) : (
          <Layout toggleLang={toggleLang} role={role}>
            <Routes>
              {role === 'user' && (
                <>
                  <Route path="/" element={<Restaurant title="Restaurant" />} />
                  <Route
                    path="/view-restaurants"
                    element={<Restaurant title="Restaurant" />}
                  />
                  <Route path="/view-menu" element={<Menu title="Menu" />} />
                  <Route path="/view-cart" element={<Cart title="Cart" />} />
                  <Route
                    path="/add-to-cart"
                    element={<AddToCart title="Add to Cart" />}
                  />
                </>
              )}
              {role === 'admin' && (
                <>
                  <Route
                    path="/manage-order"
                    element={<ManageOrder title="ManageOrder" />}
                  />
                  <Route
                    path="/manage-store"
                    element={<ManageStore title="ManageStore" />}
                  />
                </>
              )}
            </Routes>
          </Layout>
        )}
      </BrowserRouter>
    </MuxProvider>
  );
};

export default App;
