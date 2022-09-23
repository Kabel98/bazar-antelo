import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider= ({children}) =>{

    const[productCartList, setproductCartList] = useState([]);

    const addProduct = (product,qty) => {
        const newList = [...productCartList];

        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(elm=>elm.id === product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity*newList[productIndex].price;
            setproductCartList(newList)

        }else{
            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}
            const newList = [...productCartList];
            newList.push(newProduct);
            setproductCartList(newList);
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

    const getTotalProducts = () =>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity,0)
        return totalProducts;
    }

    const getTotalPrice = () => {
        const totalPriceProducts = productCartList.reduce((acc, item)=>acc + item.totalPrice,0);
        return totalPriceProducts;
    }

    return(
            <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clear, getTotalProducts, isInCart, getTotalPrice}}>
                {children}
            </CartContext.Provider>
    )
}