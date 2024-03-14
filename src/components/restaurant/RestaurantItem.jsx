import React, { useEffect } from 'react';
import { Card, colors, H1, P, Stack } from '@manulife/mux';
import { useNavigate } from 'react-router-dom';
import StarRating from '../commons/StarRating';

const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();
  const handleGotoProducts = (restaurantId) => {
    console.log('handleGotoProducts, restaurantId: ', restaurantId);
    navigate('/view-menu?restaurant_id=' + restaurantId);
  };

  return (
    <Card
      customStyle={{
        cardStyle: {
          maxWidth: '100%',
          height: '180px',
          padding: '1rem',
          backgroundColor: 'rgb(66, 69, 89)',
          cursor: 'pointer'
        }
      }}
    >
      <Stack direction="row" align="flex-start" onClick={()=>handleGotoProducts(restaurant.id)}>
        <Stack>
          <img src={restaurant.imageUrl} style={{ maxWidth: '209px', height: "139px"}}></img>
        </Stack>
        <Stack direction="column" align="flex-start" gap="0.5rem">
          <>
            <H1 color="white">{restaurant.name}</H1>
            <P color="white">{restaurant.address}</P>
            <Stack direction="row">
              <StarRating ratings={restaurant.averageRatings} />
            </Stack>
          </>
        </Stack>
      </Stack>
    </Card>
  );
}

export default RestaurantItem;
