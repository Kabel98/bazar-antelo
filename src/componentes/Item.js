import React, {useState, useContext} from 'react';
import { Contador } from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Item = ({item}) => {
    const[numeroProductos, setNumeroProductos] = useState(0); 
    const{addProduct} = useContext(CartContext);

   
    const [quantity, setQuantity] = useState(0)

    const onAdd = (count) => {
        console.log("onAdd", count)
        const newProduct = {...item, quantity:count}
        addProduct(newProduct,count);
        setQuantity(count);
    }

    return (
        <div className='item' style={{margin: '10px', color: '#83B799'}}>
            <Link to={`/Item/${item.id}`}>
            <img src={item.imagen} alt ="" className='itemImg'/>
                </Link>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>{item.stock}</p>
            <Contador stock={item.stock} inicial={1} onAdd={onAdd}></Contador>
        </div>
    )
}



