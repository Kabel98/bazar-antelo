import React from "react";
import {ItemDetail} from './ItemDetail'
import {useState, useEffect} from "react";
import { ItemList } from "./ItemList";
import {useParams} from "react-router-dom";
import { Item } from "./Item";
function ItemDetailContainer () {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(()=>{

        ItemDetail.then(items => {
            if(id === undefined){
                setItem(items)
            }
            else{
                const nuevaLista = items.filter(item=>item.id === id);
                setItem(nuevaLista)
            }
            
            
        })
    },[id])

    return(
        <div className="itemContainer">
            {item.map(item => (
                        <ItemDetail item={item} key={item.id}/>
                ))}
        </div>
    )
}

export default ItemDetailContainer;