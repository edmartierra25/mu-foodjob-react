import { useState, useEffect } from 'react';
import { H1, P, Stack } from '@manulife/mux';
import axios from 'axios';

import CardWrapper from 'src/components/CardWrapper';
import MenuItem from 'src/components/MenuItem';
import { useSearchParams } from 'react-router-dom';

const Menu = ({ title }) => {
  const [restaurant, setRestaurant] = useState('Kuya Z - Restaurant');
  const [menuItems, setMenuItems] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const restaurant_id = searchParams.get('restaurant_id');
    axios.get('http://localhost:3001/menus?restaurant_id=' + restaurant_id).then(response => {
        setMenuItems(response.data);
    });
    axios.get('http://localhost:3001/restaurants/' + restaurant_id).then(response => {
        setRestaurant(response.data.name);
    });
  }, []);

  return (
    <Stack align="flex-start">
      <img src="http://localhost:3001/assets/horizontal-logo.png" alt="logo" />
      <H1>{title}</H1>
      <P>{restaurant}</P>
      <CardWrapper maxWidth="100%">
        <Stack direction="row" justify="space-around">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </Stack>
      </CardWrapper>
    </Stack>
  );
};

export default Menu;
