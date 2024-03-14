import { H1, P, Stack } from '@manulife/mux';
import RestaurantItem from 'src/components/restaurant/RestaurantItem';
import { useState } from 'react';

const Order = ({ title }) => {

  const [restaurants, setRestaurants] = useState(
    [
      {
        id: 1,
        name: "Kuya Z - Restaurant",
        imageUrl: "http://localhost:3001/images/restaurants/mang-inasal.jfif",
        address: "Ground Flr, Kroma Tower, Dela Rosa Street, Legaspi Village, Makati, Metro Manila"
      },
      {
        id: 2,
        name: "Kuya Z - Restaurant",
        imageUrl: "http://localhost:3001/images/restaurants/mang-inasal.jfif",
        address: "Ground Flr, Kroma Tower, Dela Rosa Street, Legaspi Village, Makati, Metro Manila"
      },
      {
        id: 3,
        name: "Kuya Z - Restaurant",
        imageUrl: "http://localhost:3001/images/restaurants/mang-inasal.jfif",
        address: "Ground Flr, Kroma Tower, Dela Rosa Street, Legaspi Village, Makati, Metro Manila"
      },
      {
        id: 4,
        name: "Kuya Z - Restaurant",
        imageUrl: "http://localhost:3001/images/restaurants/mang-inasal.jfif",
        address: "Ground Flr, Kroma Tower, Dela Rosa Street, Legaspi Village, Makati, Metro Manila"
      }
    ]
);

  return (
    <Stack align="flex-start">
      <H1>Hi User! Ready for Lunch?</H1>
      <Stack direction="row">
        {
          restaurants.map(restaurant => {
            return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
          })
        }
      </Stack>
    </Stack>
  );
}

export default Order;
