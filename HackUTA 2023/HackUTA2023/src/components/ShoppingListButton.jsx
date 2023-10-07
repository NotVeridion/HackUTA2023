import cart_img from "../assets/shopping_cart.jpg"

function ShoppingListButton(){
    return(
        <button>
            <img src={cart_img}></img>
        </button>
    )
}

export default ShoppingListButton;