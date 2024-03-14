import { useState } from 'react';
import { H1, P, Stack, colors, Button, PlusMinus } from '@manulife/mux';
import MenuItem from 'src/components/MenuItem';
import * as CDS from '@manulife/mux-cds-icons';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      user_id: 1,
      product_id: 1,
      product_name: "Pancit Guisado",
      product_imageUrl: 'http://localhost:3001/images/restaurants/kuya-z.jpg',
      count: 2
    },
    {
      id: 2,
      user_id: 1,
      product_id: 1,
      product_name: "Pancit Guisado",
      product_imageUrl: 'http://localhost:3001/images/restaurants/kuya-z.jpg',
      count: 2
    }
  ]);

  const handleConfirmCart = () => {
    console.log("handleConfirmCart");
  };

  const handleCancelCart = () => {
    console.log("handleCancelCart");
    navigate('/view-restaurants');
  };

  const handleSetCount = (newValue, index) => {
    cart[index].count = newValue;
    setCart([...cart]);
  }

  return (
    <Stack direction="column" align="flex-between">
      <H1>Kuya Z - Restaurant</H1>
      <hr />
      <Stack direction="column" align="flex-start">
        {
          cart.map((item, index) => {
            return (
            <Stack key={item.id} direction="row" gap="10rem" style={{ paddingLeft: "10px" }}>
              <Stack direction="row">
                <MenuItem imageUrl={item.product_imageUrl}/>
                <P>{item.product_name}</P>
              </Stack>
              <Stack direction="row" align="flex-end">
                <PlusMinus value={item.count} onChange={(newValue) => handleSetCount(newValue, index)} />
              </Stack>
            </Stack>
            )
          })
        }
        <Stack direction="row" align="center" style={{ paddingLeft: "10rem" }}>
          <Button variant={Button.VARIANT.PRIMARY} small onClick={handleConfirmCart} style={{ borderRaidius: "50%", backgroundColor: "" }}>Confirm</Button>
          <Button variant={Button.VARIANT.SECONDARY} small onClick={handleCancelCart} style={{ borderRaidius: "50%", backgroundColor: "" }}>Cancel</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
