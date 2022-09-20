import React from "react";
import {ItemDetail} from './ItemDetail'
import {useState, useEffect} from "react";
import { DatosProductos } from "./ProductData";
import {useParams} from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {ItemId} = useParams();
    const [Item, setItem] = useState({});
    

    const getItem = (id)=>{
         return new Promise((resolve, reject)=>{
          const item = DatosProductos.then(res => res.find(item=>item.id === parseInt(id)));
            resolve(item)
        })
     }

    useEffect(()=>{
        const getIt = async()=>{
            const item = await getItem(ItemId);
            setItem(item);
        }
        getIt();
    },[ItemId])

    console.log('item:', Item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>Producto seleccionado:</p>
            <ItemDetail item={Item}/>
        </div>
    )
}

export default ItemDetailContainer;