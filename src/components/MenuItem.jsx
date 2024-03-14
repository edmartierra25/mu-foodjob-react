import React from 'react';
import { Stack } from '@manulife/mux';
import { useEffect } from 'react';
import axios from "axios";
import { useSearchParams } from 'react-router-dom';

const itemStyle = {
  padding: '10px 10px',
  borderRadius: '25px',
  background: '#00A758',
  maxWidth: '200px',
  cursor: 'pointer',
  flex: '1 0 calc(100% / 4)', // limits the number of elements per line
  height: '200px'
};

const itemNameStyle = {
  color: 'white',
};

const imageStyle = {
  maxWidth: '120px',
};

const MenuItem = ({ name, imageUrl }) => {
  const handleGotoProduct = () => {
    console.log("handleGotoProduct");
  };

  return (
    <Stack style={itemStyle} gap="0" onClick={handleGotoProduct} justify="center">
      <div>
        <img src={imageUrl} alt="Menu" style={imageStyle} />
      </div>
      <div style={itemNameStyle}>
        <strong>{name ? name.toUpperCase() : ''}</strong>
      </div>
    </Stack>
  );
};

export default MenuItem;
