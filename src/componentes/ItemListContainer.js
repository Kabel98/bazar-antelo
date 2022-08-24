import React from "react";
import { Contador } from "./ItemCount";
import {useState} from 'react';


function ItemListContainer(props){
    const greeting = props.greeting;

    const[numeroProductos, setNumeroProductos] = useState(0 ); 

    const agregar = (producto)=>{
        console.log('funcion agregar', producto)
        setNumeroProductos(producto);
    }
   
    return(
         <div style={{margin: '10px', color: '#83B799'}}>
            <p>{greeting}</p>
            <Contador stock={10} inicial={1} agregarProducto={agregar}></Contador>
        </div>
    )
}

export default ItemListContainer;