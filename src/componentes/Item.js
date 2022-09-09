import React, {useState} from 'react';
import { Contador } from './ItemCount';
import { Link } from 'react-router-dom';

//const cargarImagen = require.context("./imagenes", true);

export const Item = ({item}) => {
    const[numeroProductos, setNumeroProductos] = useState(0); 

    const agregar = (producto)=>{
        console.log('funcion onAdd', producto)
        setNumeroProductos(producto);
    }

    return (
        <div className='item' style={{margin: '10px', color: '#83B799'}}>
            <Link to={`/item/${item.id}`}>
            <img src={item.imagen} alt ="" className='itemImg'/>
                </Link>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <Contador stock={6} inicial={1} onAdd={agregar}></Contador>
        </div>
    )
}



