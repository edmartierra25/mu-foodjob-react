import React, {useState} from 'react'
import { Stack, H1, P, PlusMinus, Button } from '@manulife/mux';
import Card from 'src/components/CardWrapper';
import CartItem from 'src/components/CartItem';


const item = {
    name: "Item Name 1",
    src: "http://localhost:3001/images/menus/clubhouse.jpg"
}


const AddToCart = () => {
    const [value, setValue] = useState(0);

    
    return (
        <Stack align="flex-start" direction='column'>
            <img alt='logo' src='http://localhost:3001/assets/horizontal-logo.png' />
            <H1>LOREM IPSUM</H1>
            <P>{`"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."`}</P>
            <Card maxWidth='100%'>
                {/* Stack for the Item and selectors */}
                <Stack align="center" direction='row' justify="space-around">
                    <CartItem {...item}
                    />                
                    {/* Stack for the description, selector, and button */}
                    <Stack direction="column" align="center" justify="space-around" style={{height: '32rem'}}>
                        <P>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the `}</P>
                        <PlusMinus
                        value={value}
                        onChange={(val) => setValue(val)}
                        />
                        <Button>Add To Cart</Button>
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    )
}

export default AddToCart;