import { Item } from "./Item";

export const ItemList = ({items})=> {
    return (
            <div className='grid-product'>
                {items.map(producto => (
                <Item key={producto.id} item={producto}/>
                ))}
            </div>
    )}

