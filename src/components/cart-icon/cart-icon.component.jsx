import {ReactComponent as ShoppingIcon}from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../context/Cart.context';
import { useContext } from 'react';


const CartIcon =()=>{
    const {isOpen,setCartDetail,cartCount}=useContext(CartContext);


const handleCart=()=>{
    setCartDetail(!isOpen);
}


return(
    <div className='cart-icon-container' onClick={handleCart}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
    
);



}

export default CartIcon;