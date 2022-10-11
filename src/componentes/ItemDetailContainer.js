import React from "react";
import {ItemDetail} from './ItemDetail'
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { db } from "../utils/firebase";
import {doc, getDoc} from "firebase/firestore";

export const ItemDetailContainer = ()=>{
    const {ItemId} = useParams();
    const [Item, setItem] = useState({});

    

   useEffect(()=>{
            const queryRef = doc(db, "items", ItemId);
            getDoc(queryRef).then(response=>{
                const newDoc= {
                    ...response.data(),
                    id:response.id
                }
            console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
    },[ItemId]);

    console.log('item:', Item)
    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>Producto seleccionado:</p>
            <ItemDetail item={Item}/>
        </div>
    )
}

export default ItemDetailContainer;