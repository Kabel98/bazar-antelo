import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const BuyerForm = () => {
    const {getTotalPrice,productCartList} = useContext(CartContext);
    const[idOrder, setIdOrder] = useState("");

    const sendOrder = (e) =>{
        e.preventDefault();
        const order = {
            buyer: { 
                name: e.target[0].value, 
                phone: e.target[1].value, 
                email: e.target[2].value
            },
            items: productCartList,
            date: Timestamp.now(),
            total: getTotalPrice()
        }


        const queryRef = collection(db, "Orders");
        addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
        console.log(order)

    }

    return(
        <form onSubmit={sendOrder}>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Teléfono"/>
            <input type="email" placeholder="Email"/>
            <button type="submit" >Enviar Orden</button>
        </form>
    )
}