import React from "react";
import {useState, useEffect} from 'react';
import { DatosProductos } from "./ProductData";
import {useParams} from "react-router-dom";
import { ItemList } from "./ItemList";
import {collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../utils/firebase";

export const ItemListContainer = ()=>{
    const [categoryFilteredItemList,setcategoryFilteredItemList] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams();
    
    useEffect(()=>{
        const getData = async() => {
            let queryRef = ""

            try {
                if(category === undefined){
                    queryRef = collection(db, "Items");
               }
                else{
                    queryRef = query(collection(db, "Items"), where("category","==", category))
                }
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                })
                setcategoryFilteredItemList(datos);

            } 
            catch (error) {
                console.log(error);
            }
            
        }
        getData()
        .finally(() => setLoading(false))
    },[category])

    return (
        <>
        <h1>Productos</h1>
        {
            loading ? <div className="fa-3x"><i className="fas fa-stroopwafel fa-spin"></i></div>
            :
            <ItemList items= {categoryFilteredItemList} />
        }
        </>
    )

}

export default ItemListContainer;