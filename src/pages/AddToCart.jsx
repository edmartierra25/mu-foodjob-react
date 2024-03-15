import React, { useEffect, useState } from 'react';
import { Button, H1, P, PlusMinus, Stack } from '@manulife/mux';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import Card from 'src/components/CardWrapper';
import CartItem from 'src/components/CartItem';

const AddToCart = () => {
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState(1);
  const [product, setProduct] = useState();

  useEffect(() => {
    const product_id = searchParams.get('product_id');
    axios.get(`http://localhost:3001/menus/${product_id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const handleAddToCart = async () => {
    const product_id = searchParams.get('product_id');
    const response = await axios.post(`http://localhost:3001/cart`, {
      user_id: 1,
      product_id: parseInt(product_id),
      count: value,
    });
    if (response.status === 200) {
        alert("Successfully added to cart!");
    }
  };

  return (
    product && (
      <Stack align="flex-start" direction="column">
        <H1>{product.name}</H1>
        <P>{product.address}</P>
        <Card maxWidth="100%">
          {/* Stack for the Item and selectors */}
          <Stack align="center" direction="row" justify="space-around">
            <CartItem {...product} src={product.imageUrl} />
            {/* Stack for the description, selector, and button */}
            <Stack
              direction="column"
              align="center"
              justify="space-around"
              style={{ height: '32rem' }}
            >
              <P>{product.description}</P>
              <PlusMinus value={value} onChange={(val) => setValue(val)} />
              <Button onClick={handleAddToCart}>Add To Cart</Button>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    )
  );
};

export default AddToCart;
