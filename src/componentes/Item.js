import React from 'react';

//const cargarImagen = require.context("./imagenes", true);

export const Item = ({item}) => {
    const {title, price, imagen} = item;
    return (
        <div className='item'>
            <img src={imagen} alt ="" className='itemImg'/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}



