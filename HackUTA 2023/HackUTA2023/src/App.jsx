import { useState } from 'react'
import NavBar from "./components/navbar"
import ItemDisplay from "./components/ItemDisplay"
import "./App.css"
import Item from "./Item.jsx"
import one from "./assets/macbook air.jpeg"
import two from "./assets/macbook pro m1.jpeg"
import three from "./assets/macbook pro m2.jpeg"
import four from "./assets/HP Celeron.jpeg"
import five from "./assets/Dell Inspiron.jpeg"
import six from "./assets/hp envy.png"
import seven from "./assets/yoga.jpeg"
import eight from "./assets/amd.jpeg"
import nine from "./assets/bars.png"
import ten from "./assets/shopping-cart.webp"
import ShoppingList from './components/ShoppingList'
import ShoppingListButton from './components/ShoppingListButton'
function App() {
    const[pageState, setPageState] = useState(0);
    const[shopList, setShopList] = useState();

    function PageHandler(number){
        console.log("bye")
        setPageState(number);
    }
    function ReturnHandler(){
        setPageState(0);
    }
     const laptops = Item()
    console.log(laptops)
    return (
        <div>
        {pageState === 0 && <div>
        <body>

    <nav class = "navigation">
    <div class = "navbar-center">
            <span class = "nav-icon">
                <img src={nine} alt="navigation bars" style={{ width: '30px', height: '30px' }} />
            </span>
            <h3>E-Commerence</h3>
            <div class = "cart-container">
            <div class = "cart-bin">
            <span class = "nav-icon">
                <ShoppingListButton numberPasser={PageHandler} ></ShoppingListButton>
            </span>
            <div class = "cart-items">0</div>
            </div>
            </div>
    </div>
</nav>

<header class = "main">
    <div class = "banner">
        <h1 class = "banner-title">Computers For You</h1>
        <button class = "banner-btn"><a href="#computer-section">shop now</a></button>
    </div>
</header>

  <div class="container">
    <div class="header" id="computer-section">
      <div class="logo">Our Computers</div>
    </div>

    <div class="computers">
        {laptops.map((laptop) => (
            <ItemDisplay name={laptop.title} price={laptop.cost} img ={laptop.images} link={laptop.links}></ItemDisplay>
        ))}

        <button class="bag-button" data-id={index}>
        <img src={ten} alt="shopping cart" style={{ width: '30px', height: '30px' }} />
        Add to Bag
      </button>
    </div>
</div>
</body>

        
        </div>
        }
        {pageState === 1 && <ShoppingList OnReturn={ReturnHandler}></ShoppingList>}
        </div>
    )
}
export default App
