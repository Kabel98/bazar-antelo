import React, {useState} from 'react';
import { Contador } from './ItemCount';
import { ItemList } from './ItemList';

//const cargarImagen = require.context("./imagenes", true);

export const Item = ({items}) => {
    const {title, price, imagen} = items;
    const[numeroProductos, setNumeroProductos] = useState(0); 

    const agregar = (producto)=>{
        console.log('funcion onAdd', producto)
        setNumeroProductos(producto);
    }

    return (
        <div className='item' key={title} style={{margin: '10px', color: '#83B799'}}>
            <img src={imagen} alt ="" className='itemImg'/>
            <p>{title}</p>
            <p>{price}</p>
            <Contador stock={6} inicial={1} onAdd={agregar}></Contador>
        </div>
    )
}



