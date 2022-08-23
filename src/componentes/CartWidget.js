import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingCart } from "react-icons/fa";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";

function CartWidget(){
return(
   <span className= "fa-layers fa-fw fa-layers-top-left">
        <FaShoppingCart size={35} color="rgb(242, 228, 199)"/>
        <span class="fa-layers-counter" style={{color:"white", fontWeight:900}}>5</span>
    </span>
   
)
}

export default CartWidget;