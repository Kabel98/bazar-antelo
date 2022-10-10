import React, {useEffect} from "react";
import { doc, getDoc, query } from "firebase/firestore";
import {db} from "../utils/firebase"


export const PagFirebase = () => {

    useEffect(() => {

        const getDocumento = async() =>{
            const query = doc(db, "Items", "9eCVJJNQCJIXsTi1VwIC");
            const response = await getDoc(query);
            const producto = {
                ...response.data(),
                id:response.id
            }
            console.log("producto", producto);
        }
        getDocumento()
    },[])

    return(
        <div>Pagina Firebase</div>
    )

}
