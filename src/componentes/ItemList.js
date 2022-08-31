import React from "react";
import { useState, useEffect} from "react";
import { Item }  from './Item.js';
import asyncGetData from "../helpers/help";
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';
import getFetch from "../helpers/help";
import '@fortawesome/fontawesome-svg-core/styles.css'


/*const Items = [
    {
        id: 0,
        title: 'Alfombra',
        price: '$500',
        imagen: fotoAlfombra
    },
    {
        id: 1,
        title: 'Equipo de musica',
        price: '$2000',
        imagen: fotoEquipo
    },
    {
        id: 2,
        title: 'Maceta',
        price: '$250',
        imagen: fotoMaceta
    }
]*/

export const ItemList = () => {
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


    /*const obtenerItems = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(Items)
            }, 2000);
        })

    }

    useEffect(()=>{ 
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerItems();
                setItems(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
    },[])*/

    /*return(
        <div className="listContainer">
            <p>Productos disponibles</p>
            <div className= 'itemContainer'>
                {
                    Items.map((item)=>{
                        return(
                            <Item item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )*/
}