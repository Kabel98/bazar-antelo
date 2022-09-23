import React, { useContext } from "react";
import { CartContext, CartProvider } from "../context/CartContext";


export const BuyerForm = () => {
    const {getTotalPrice,productCartList} = useContext(CartContext);

    const sendOrder = (e) =>{
        e.preventDefault();
        const order = {
            buyer: { 
                name: e.target[0].value, 
                phone: e.target[1].value, 
                email: e.target[2].value
            },
            items: productCartList,
            total: getTotalPrice()
        }

    }

    return(
        <form onSubmit={sendOrder}>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Telefono"/>
            <input type="email" placeholder="Email"/>
            <button type="submit">Enviar Orden</button>
        </form>
    )
}