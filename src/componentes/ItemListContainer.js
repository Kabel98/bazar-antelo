import React from "react";
import { Contador } from "./ItemCount";
import {useState, useEffect} from 'react';
import { ItemList } from "./ItemList";
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';
import getFetch from "../helpers/help";
import { Item } from "./Item";


function ItemListContainer(props){
    const greeting = props.greeting;
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        getFetch.then(items => {
            setItems(items)
            setLoading(false)
        })
    },[])

    return (
        <>
        <div>
            <p>{greeting}</p>
            <ItemList productos={items}/>
        </div>
        <h1>Productos</h1>
        {
            loading ? <div class="fa-3x"><i class="fas fa-stroopwafel fa-spin"></i></div>
            :

            <div className='grid-product'>
                {items.map(items => (
                    <Item key = {items.title} items={items}/>
                ))}
            </div>
        }
        </>
    )
   
    
         
    
}

export default ItemListContainer;