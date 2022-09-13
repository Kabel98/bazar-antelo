import './ItemDetail.css';
import {Contador} from './ItemCount';
import {Item} from './Item';

export const ItemDetail = ({item})=>{

    const onAdd = ( count) => {
        console.log("onAdd", count)
    }

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
            <Contador stock={item.stock} inicial={1} onAdd={onAdd}></Contador>
        </div>
    )
}
