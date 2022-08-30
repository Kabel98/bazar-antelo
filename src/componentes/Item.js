import React from 'react';

//const cargarImagen = require.context("./imagenes", true);

export const Item = ({Item}) => {
    const {title, price, imagen} = Item;
    return (
        <div className='itemContainer'>
            <img src={imagen} alt ="" className='itemImg'/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}



