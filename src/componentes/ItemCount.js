import {useState} from 'react';

export const Contador = ({stock, inicial, onAdd})=>{
    inicial = stock > 0 ? 1 : 0
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
            <p>Numero de productos seleccionados {contador}</p>
            <button className="button" onClick={sumar}>+</button>
            <button className="button" onClick={(()=>onAdd(contador))} disabled={contador > stock || contador == 0}>Agregar al carrito</button>
            <button className="button" onClick={restar}>-</button>
         </div>
    )
}