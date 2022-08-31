import React from "react";
import { Contador } from "./ItemCount";
import {useState} from 'react';
import { ItemList } from "./ItemList";
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';


function ItemListContainer(props){
    const greeting = props.greeting;
   
    return(
         <div>
            <p>{greeting}</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;