import { Item } from "./Item";

export const ItemList = ({items})=> {
    return (
            <div className='grid-product'>
                {items.map(producto => (
                    //<Link key={item.id} to={`/productos/${item.id}`}> </Link>
                <Item key={producto.id} item={producto}/>
                ))}
            </div>
    )}

