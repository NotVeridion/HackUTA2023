import "./navbar.css"
import ShoppingListButton from "./ShoppingListButton"
function NavBar(props)
{
    function PageHandler(number){
        console.log("hello")
        props.pageState(number)
    }
    return (
        <nav class="navbar">
            <p>Navbar Working</p>
            <ShoppingListButton numberPasser={PageHandler} ></ShoppingListButton>
        </nav>
    )
}

export default NavBar