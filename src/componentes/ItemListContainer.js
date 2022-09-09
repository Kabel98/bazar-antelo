import React from "react";
import {useState, useEffect} from 'react';
import { DatosProductos } from "./ProductData";
import {useParams} from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListContainer = ()=>{
    const [categoryFilteredItemList,setcategoryFilteredItemList] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams();
    
    useEffect(()=>{

        DatosProductos.then(resultado => {
            if(category === undefined){
                setLoading(false)
                setcategoryFilteredItemList(resultado)
            }
            else{
                const nuevaLista = resultado.filter(item=>item.category === category);
                setcategoryFilteredItemList(nuevaLista)
            }
            
            
        })
    },[category])

    return (
        <>
        <h1>Productos</h1>
        {
            loading ? <div className="fa-3x"><i className="fas fa-stroopwafel fa-spin"></i></div>
            :
            <ItemList items= {categoryFilteredItemList}/>
        }
        </>
    )

}

export default ItemListContainer;