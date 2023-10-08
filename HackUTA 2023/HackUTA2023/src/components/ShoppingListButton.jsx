import cart_img from "../assets/shopping_cart.jpg"
import "./ShoppingListButton.css"
import { useState } from 'react'
function ShoppingListButton(props){
    function ClickHandler(){
        console.log("hi")
        props.numberPasser(1);
    }
    return(
        <button class="shoppingButton" onClick={ClickHandler}>
            <img src={cart_img} alt="shopping cart"></img>
        </button>
    )
}

export default ShoppingListButton;