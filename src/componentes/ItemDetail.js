import { useState,useEffect} from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import './ItemDetail.css'
import { Item } from "./Item";
import {useParams} from "react-router-dom";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>item detail</p>
            <div className='img-container'>
                <img src={item.imagen} alt={item.title}/>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
        </div>
    )
}