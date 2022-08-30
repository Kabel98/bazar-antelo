import React from "react";
import { Contador } from "./ItemCount";
import {useState} from 'react';
import { ItemList } from "./ItemList";
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';


function ItemListContainer(props){
    const greeting = props.greeting;

    const[numeroProductos, setNumeroProductos] = useState(0); 

    const agregar = (producto)=>{
        console.log('funcion onAdd', producto)
        setNumeroProductos(producto);
    }
   
    return(
         <div style={{margin: '10px', color: '#83B799'}}>
            <p>{greeting}</p>
            <Contador stock={6} inicial={1} onAdd={agregar}></Contador>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;