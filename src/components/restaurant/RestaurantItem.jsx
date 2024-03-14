import React from 'react';
import { Card, Stack, H1, P, colors } from '@manulife/mux';
import StarRating from '../commons/StarRating';

const RestaurantItem = ({ restaurant }) => (
  <Card customStyle={{ cardStyle: { maxWidth: "100%", height: "180px", padding: "1rem", backgroundColor: "rgb(66, 69, 89)" } }}>
    <Stack direction="row" align="flex-start">
      <Stack>
        <img src={restaurant.imageUrl} style={{ maxWidth: "209px" }}></img>
      </Stack>
      <Stack direction="column" align="flex-start" gap="0.5rem">
        <>
          <H1 color="white">{restaurant.name}</H1>
          <P color="white">{restaurant.address}</P>
          <Stack direction="row">
            <StarRating />
          </Stack>
        </>
      </Stack>
    </Stack>
  </Card>
);

export default RestaurantItem;
