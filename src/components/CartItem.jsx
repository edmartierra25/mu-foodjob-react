import { Stack } from '@manulife/mux';
import React from 'react'

const itemStyle = {
    padding: '10px 10px',
    borderRadius: '25px',
    background: '#00A758',
    maxWidth: '40%',
    width: '40%',
    maxHeight: '40%',
    minHeight: '40%',
}

const itemNameStyle = {
    color: 'white',
    fontSize: '2.25rem',
    marginBottom: '40px'
}

const imageStyle = {
    maxWidth: '60%',
    marginTop:'50px',
    marginBottom: '30px'
}


const CartItem = ({ name, src }) => (
    <Stack style={itemStyle} gap="0">
        <img
            src={src} alt='Menu' style={imageStyle} />
        <div style={itemNameStyle}><strong>{name.toUpperCase()}</strong></div>
    </Stack>
)

export default CartItem;