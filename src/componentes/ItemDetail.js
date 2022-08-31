import { useState,useEffect} from "react";
import getFetch from "../helpers/help";
import ItemDetailContainer from "./ItemDetailContainer";
import './ItemDetail.css'
import { Item } from "./Item";

const ItemDetail = () => {
    const [item, setItem] = useState({})
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(response => {
            setItem(response.find(art => art.id === 1))
            setLoading(false)
        })
    }, [])

    console.log(item)
         return (
            <div className="itemContainer">
                {
                    loading ? <h2>Cargando...</h2>
                    :
                     <div className="itemDetail">
                            <img src={item.imagen} alt="" />
                            <h2>{item.title}</h2>
                            <h3>{item.price}</h3>
                            <h4>{item.description}</h4>
                        </div>

                }
            </div>
            
        )
}

export default ItemDetail