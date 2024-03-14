import { useState } from 'react';
import { H1, P, Stack, colors, Button } from '@manulife/mux';
import MenuItem from 'src/components/MenuItem';
import * as CDS from '@manulife/mux-cds-icons';

const Cart = () => {
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
  return (
    <Stack direction="column" align="flex-between">
      <H1>Kuya Z - Restaurant</H1>
      <hr />
      <Stack direction="column" align="flex-start">
        {
          cart.map(item => {
            return (
            <Stack key={item.id} direction="row" gap="10rem" style={{ paddingLeft: "10px" }}>
              <MenuItem src={item.product_imageUrl}/>
              <Stack direction="row" align="flex-end">
                <CDS.ButtonMinusIcon style={{ fontSize: "60px", cursor: "pointer" }} />
                <Button variant={Button.VARIANT.SECONDARY} disabled small style={{ backgroundColor: colors.light_grey }}>{item.count}</Button>
                <CDS.ButtonPlusIcon style={{ fontSize: "60px", cursor: "pointer" }} />
              </Stack>
            </Stack>
            )
          })
        }
        <Stack direction="row" align="center" style={{ paddingLeft: "10rem" }}>
          <Button variant={Button.VARIANT.PRIMARY} small onClick={handleConfirmCart} style={{ borderRaidius: "50%", backgroundColor: "" }}>Confirm</Button>
          <Button variant={Button.VARIANT.SECONDARY} small onClick={handleConfirmCart} style={{ borderRaidius: "50%", backgroundColor: "" }}>Cancel</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
