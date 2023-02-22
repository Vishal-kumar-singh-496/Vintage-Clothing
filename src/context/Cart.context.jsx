import { useEffect } from 'react';
import {useState} from 'react'
import { createContext } from "react";

const addCartItem=(cartItems,productToAdd)=>{
const exisitingCartItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id);


if(exisitingCartItem){
    return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem);
}
 
    return [...cartItems,{...productToAdd,quantity:1}];
  }


  const removeCartItem=(cartItems,cartItemToRemove)=>{
    const exisitingCartItem=cartItems.find(
        (cartItem)=>cartItem.id==cartItemToRemove.id
    );

    if(exisitingCartItem.quantity==1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id);
    }


    return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem);
  }


  const clearCartItem=(cartItems,cartItemToClear)=>  cartItems.filter(cartItem=>cartItem.id!==cartItemToClear.id);

export const CartContext= createContext({
    isOpen:false,
    setCartDetail:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemToCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    cartTotal:0,

});

export const CartProvider=({children})=>{
    
   const[isOpen,setCartDetail]=useState(false);
   const [cartItems,setCartItems]=useState([]);
   const [cartCount,setCartCount]=useState(0);
   const [cartTotal,setCartTotal]=useState(0);


   useEffect(()=>{
   const newCartCount= cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
   setCartCount(newCartCount);
   },[cartItems])

   useEffect(()=>{
    const cartTotalComplete= cartItems.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
    setCartTotal(cartTotalComplete);
    },[cartItems])
 
 
   const addItemToCart=(productToAdd)=>{

    setCartItems(addCartItem(cartItems,productToAdd))

   }
   const removeItemToCart=(cartItemToRemove)=>{

    setCartItems(removeCartItem(cartItems,cartItemToRemove))

   }
   const clearItemFromCart=(cartItemToClear)=>{

    setCartItems(clearCartItem(cartItems,cartItemToClear))

   }
   const value={isOpen,setCartDetail,addItemToCart,cartItems,cartCount,removeItemToCart,clearItemFromCart,cartTotal}

    return(
        <CartContext.Provider value={value }>{children}</CartContext.Provider>

    );
   
}