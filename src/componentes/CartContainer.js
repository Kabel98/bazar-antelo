import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartProvider } from "../context/CartContext";

export const CartContainer = () => {
    const{productCartList, deleteProduct, clear} = useContext(CartContext);

    return(
        <div>
            <p>CartContainer</p>
            {
                productCartList.map(item=>(
                    <div>
                        <img src = {item.imagen}/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <button onClick={() => deleteProduct(item.id)}>Eliminar producto</button>
                    </div>
                ))
            }
            <button onClick={clear}>Vaciar carro</button>
        </div>
    )
}