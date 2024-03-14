import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LANG, MuxProvider } from '@manulife/mux';

import Layout from './components/Layout';
import Home from './pages/Home';
import Order from './pages/Order';

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
            <Route path="/" element={<Home />} />
            <Route path="/view-order" element={<Order title="Order"/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MuxProvider>
  );
};

export default App;
