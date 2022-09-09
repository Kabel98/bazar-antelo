import './CartWidget.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import React from "react";


export const CartWidget = ()=>{
return(
    <div className="fa-2x">
        <span className= "fa-layers fa-fw" >
            <link rel="stylesheet" href="CartWidget.css"></link>
            <i className="fas fa-shopping-cart" style={{color:"#83B799"}}></i>
            <span className="fa-layers-counter" style={{background:"tomato", color:"white", fontSize:50}}>6</span>
    </span>
    </div>
   
)
}

export default CartWidget;