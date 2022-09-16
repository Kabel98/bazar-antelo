import { createContext, useState } from "react";
import { DatosProductos, ProductData } from "../componentes/ProductData";
import { ItemList } from "../componentes/ItemList";

export const CartContext = createContext();

export const CartProvider= ({children}) =>{
    //const productCartList = DatosProductos;
    const[productCartList, setproductCartList] = useState([]);

    const addProduct = (product,qty) => {
        const newList = [...productCartList,product];
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(elm=>elm.id === product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
        }else{
            const newList = [...productCartList,product];
        setproductCartList(newList)
        }
        
    } 

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray  = copyArray.filter(elm=>elm.id != idProduct);
        setproductCartList(newArray);
    }

    const clear = () => {
        setproductCartList([])
    }

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
        
    }

    return(
            <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clear}}>
                {children}
            </CartContext.Provider>
    )
}