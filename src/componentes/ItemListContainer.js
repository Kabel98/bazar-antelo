import React from "react";

function ItemListContainer(props){
    const greeting = props.greeting;
    return(
         <div style={{margin: '10px', color: '#83B799'}}>
            <p>{greeting}</p>
        </div>
    
    )
}

export default ItemListContainer;

