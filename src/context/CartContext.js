import { createContext, useState } from "react";
import { DatosProductos, ProductData } from "../componentes/ProductData";
import { ItemList } from "../componentes/ItemList";

export const CartContext = createContext();

export const CartProvider= ({children}) =>{
    //const productCartList = DatosProductos;
    const[productCartList, setproductCartList] = useState([]);

    const addProduct = (product) => {
        const newList = [...productCartList,product];
        setproductCartList(newList)
    } 

    const deleteProduct = (idProduct) => {
        const copyArray = [...productCartList];
        const newArray  = copyArray.filter(elm=>elm.id != idProduct);
        setproductCartList(newArray);
    }

    return(
            <CartContext.Provider value={{productCartList, addProduct, deleteProduct}}>
                {children}
            </CartContext.Provider>
    )
}