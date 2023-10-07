import cart_img from "../assets/shopping_cart.jpg"

function ShoppingListButton(){
    return(
        <button>
            <img src={cart_img} alt="shopping cart"></img>
        </button>
    )
}

export default ShoppingListButton;