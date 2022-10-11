import './ItemDetail.css';
import {Contador} from './ItemCount';
import {Item} from './Item';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({item})=>{
    const{addProduct} = useContext(CartContext);
    const [quantity, setQuantity] = useState(0)

    const onAdd = (count) => {
        const newProduct = {...item, quantity:count}
        addProduct(newProduct,count);
        setQuantity(count);
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}></p>
            <div className='img-container'>
                <img src={item.imagen} />
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5> $ {item.price}</h5>
            </div>
            <Contador stock={item.stock} inicial={1} onAdd={onAdd}></Contador>
            {
                quantity>0 &&
                <Link to="/cart">
                <button>Ir al carrito</button>
                </Link>
            }
        </div>
    )
}
