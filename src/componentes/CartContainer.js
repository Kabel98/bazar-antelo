import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { BuyerForm } from "./BuyerForm";

export const CartContainer = () => {
    const{productCartList, deleteProduct, clear, getTotalPrice} = useContext(CartContext);

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
                        <p>Precio Total : {getTotalPrice()}</p>
                        <BuyerForm/>
                    </>
                    :
                    <p>No se han agregado productos</p>
                }
            </div>
        </div>
    )
}