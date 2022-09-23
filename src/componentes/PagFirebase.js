import React, {useEffect} from "react";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import {db} from "../utils/firebase"
import { useState } from "react";

export const PagFirebase = () => {
    const[arregloProductos, setArregloProductos] = useState([]);

    useEffect(() => {
        // const getData = async() =>{
        //     const queryRef = query(collection(db, "Items"), where("category", "==", "hogar"), limit(1));
        //     const response = await getDocs(queryRef);
        //     const docs = response.docs;
        //     //console.log("docs info", docs[0].data());
        //     //console.log("docs id", docs[0].id);
        //     const data = docs.map(doc=>{return{...doc.data(), id:doc.id}});
        //     setArregloProductos(data);
        // }
        // getData()

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
