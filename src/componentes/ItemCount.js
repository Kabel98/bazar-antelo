import {useState} from 'react';

export const Contador = ({stock, inicial, agregarProducto})=>{
    const [contador, setContador] = useState(inicial);

    const sumar =()=>{
        if (contador<stock){
            setContador(contador + 1)
        }
    }

    const restar =()=>{
        if (contador>0){
            setContador(contador - 1)
        }  
    }

    return(
        <div>
            <p>Numero de clics {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={(()=>agregarProducto(contador))} disabled={contador == stock ? true : false}>Agregar al carrito</button>
            <button onClick={restar}>-</button>
         </div>
    )
}