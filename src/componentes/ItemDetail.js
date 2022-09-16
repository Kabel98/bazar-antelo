import './ItemDetail.css';
import {Contador} from './ItemCount';
import {Item} from './Item';
import { themeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({item})=>{
    const{addProduct} = useContext(CartContext);
    const {texto} = useContext(themeContext);

    const onAdd = (count) => {
        console.log("onAdd", count)
        const newProduct = {...item, quantity:count}
        addProduct(newProduct)
    }

    return(
        <div className='detail-container'>
            <p style={{width: "100%"}}>{texto}</p>
            <div className='img-container'>
                <img src={item.imagen} />
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5> $ {item.price}</h5>
            </div>
            <Contador stock={item.stock} inicial={1} onAdd={onAdd}></Contador>
        </div>
    )
}
