import React from "react";
import {useState, useEffect} from 'react';
import { ItemList } from "./ItemList";
import { Item } from "./Item";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

function ItemListContainer(){
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const {category} = useParams();
    
    useEffect(()=>{

        ItemList.then(items => {
            if(category === undefined){
                setLoading(false)
                setItems(items)
            }
            else{
                const nuevaLista = items.filter(item=>item.category === category);
                setItems(nuevaLista)
            }
            
            
        })
    },[category])

    return (
        <>
        <h1>Productos</h1>
        {
            loading ? <div class="fa-3x"><i class="fas fa-stroopwafel fa-spin"></i></div>
            :

            <div className='grid-product'>
                {items.map(items => (
                    <Link key={items.id} to={`/productos/${items.id}`}>
                        <Item items={items}/>
                    </Link>
                ))}
            </div>
        }
        </>
    )

}

export default ItemListContainer;