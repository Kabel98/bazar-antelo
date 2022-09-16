import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartProvider } from "../context/CartContext";

export const CartContainer = () => {
    const{productCartList, deleteProduct, clear} = useContext(CartContext);

    return(
        <div>
            <p>Carro</p>

            <div>
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map(item=>(
                                <div>
                                    <img src = {item.imagen}/>
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                    <p>Cantidad seleccionada: {item.quantity}</p>
                                    {<p>Precio total: ${item.totalPrice}</p>}
                                    <button onClick={() => deleteProduct(item.id)}>Eliminar producto</button>
                                </div>
                            ))
                        }
                        <button onClick={clear}>Vaciar carro</button>
                    </>
                    :
                    <p>No se han agregado productos</p>
                }
            </div>
        </div>
    )
}