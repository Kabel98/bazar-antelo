import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { deleteProduct } from "../context/CartContext";


export const CartContainer = () => {
    const {productCartList} = useContext(CartContext)

    return(
        <div>
            <p>CartContainer</p>
            {
                productCartList.map(item=>(
                    <div>
                        <img src = {item.imagen}/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button onClick={() => deleteProduct(item.id)}>Eliminar producto</button>
                    </div>
                ))
            }
        </div>
    )
}