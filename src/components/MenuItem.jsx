import { Stack } from '@manulife/mux';
import React from 'react'

const itemStyle = {
    padding: '10px 10px',
    borderRadius: '25px',
    background: '#00A758',
    maxWidth: '200px',
    flex: '1 0 calc(100% / 4)' // limits the number of elements per line
}

const itemNameStyle = {
    color: 'white',
}


const MenuItem = ({ name }) => (
    <Stack style={itemStyle} gap="0">
        <div>MenuImage</div>
        <div style={itemNameStyle}><strong>{name.toUpperCase()}</strong></div>
    </Stack>
)

export default MenuItem;