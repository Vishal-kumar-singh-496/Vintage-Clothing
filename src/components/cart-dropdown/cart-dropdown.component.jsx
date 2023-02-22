import Button from "../button/button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { Link,useNavigate } from "react-router-dom";

const CartDropdown = () => {

const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();


    const checkoutHandler=()=>{
        navigate('/checkout')
    }


    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map(item=><CartItem key={item.id} cartItem={item}></CartItem>)}
                </div>
        <Button className="inverted" onClick={checkoutHandler}>Go TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;