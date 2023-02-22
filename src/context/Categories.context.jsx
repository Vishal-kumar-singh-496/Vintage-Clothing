import { useState ,useEffect} from "react";
import { createContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js"; 
import SHOP_DATA from "../shop-data.js";


export const CategoriesContext=createContext({
categoriesMap:{},
});

export const CategoriesProvider=({children})=>{
    const[categoriesMap,setCategoriesMap]=useState({});

    useEffect(()=>{

        const getCategoriesMap= async ()=>{
            const categoryMap= await getCategoriesAndDocuments();
            console.log("sssssssssss",categoryMap);
            setCategoriesMap(categoryMap);
        }
       getCategoriesMap();
    },[]);
   
    const Value={categoriesMap};

    return(
        <CategoriesContext.Provider value={Value }>{children}</CategoriesContext.Provider>

    );
   
}