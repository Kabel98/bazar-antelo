import React from "react";
import { useState, useEffect} from "react";
import { Item }  from './Item.js';
import asyncGetData from "../helpers/help";
import fotoAlfombra from '../imagenes/fotoAlfombra.jpg';
import fotoEquipo from '../imagenes/fotoEquipo.webp';
import fotoMaceta from '../imagenes/fotoMaceta.webp';


const Items = [
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
]

export const ItemList = () => {
    const [items,setItems] = useState([])

    const obtenerItems = ()=>{
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
    },[])

    return(
        <div className="listContainer">
            <p>Hola</p>
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
    )
}