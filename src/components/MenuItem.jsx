import React from 'react';
import { Stack } from '@manulife/mux';

const itemStyle = {
  padding: '10px 10px',
  borderRadius: '25px',
  background: '#00A758',
  maxWidth: '200px',
  flex: '1 0 calc(100% / 4)', // limits the number of elements per line
};

const itemNameStyle = {
  color: 'white',
};

const imageStyle = {
  maxWidth: '120px',
};

const MenuItem = ({ name, src }) => (
  <Stack style={itemStyle} gap="0">
    <div>
      <img src={src} alt="Menu" style={imageStyle} />
    </div>
    <div style={itemNameStyle}>
      <strong>{name ? name.toUpperCase() : ''}</strong>
    </div>
  </Stack>
);

export default MenuItem;
