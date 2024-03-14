import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LANG, MuxProvider } from '@manulife/mux';

import Layout from './components/Layout';
import Home from './pages/Home';
import Item from './pages/Item';

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
            <Route path="/item1" element={<Item title="Item 1" />} />
            <Route path="/item1_1" element={<Item title="Item 1.1" />} />
            <Route path="/item1_1_1" element={<Item title="Item 1.1.1" />} />
            <Route path="/item1_1_2" element={<Item title="Item 1.1.2" />} />
            <Route path="/item1_2" element={<Item title="Item 1.2" />} />
            <Route path="/item2" element={<Item title="Item 2" />} />
            <Route path="/item2_1" element={<Item title="Item 2.1" />} />
            <Route path="/item2_2" element={<Item title="Item 2.2" />} />
            <Route path="/item3" element={<Item title="Item 3" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MuxProvider>
  );
};

export default App;
