import cart_img from "../assets/shopping_cart.jpg"
import "./ShoppingListButton.css"
function ShoppingListButton(){
    function clickHandler(){
        console.log("hello");
    }
    return(
        <button class="shoppingButton" onClick={clickHandler}>
            <img src={cart_img} alt="shopping cart"></img>
        </button>
    )
}

export default ShoppingListButton;