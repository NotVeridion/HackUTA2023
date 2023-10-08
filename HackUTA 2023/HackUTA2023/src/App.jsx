import { useState } from 'react'
import NavBar from "./components/navbar"
import ItemDisplay from "./components/ItemDisplay"
import "./App.css"
import one from "./assets/macbook air.jpeg"
import two from "./assets/macbook pro m1.jpeg"
import three from "./assets/macbook pro m2.jpeg"
import four from "./assets/HP Celeron.jpeg"
import five from "./assets/Dell Inspiron.jpeg"
import six from "./assets/hp envy.png"
import seven from "./assets/yoga.jpeg"
import eight from "./assets/amd.jpeg"
import nine from "./assets/bars.png"
import ShoppingList from './components/ShoppingList'
import ShoppingListButton from './components/ShoppingListButton'
function App() {
    const[pageState, setPageState] = useState(0);
    function PageHandler(number){
        console.log("bye")
        setPageState(number);
    }
    function ReturnHandler(){
        setPageState(0);
    }
    const laptops = [
        {
            name: "MacBook Air",
            price: "$749.99",
            src: one
        },
        {
            name: "MacbookPro M1",
            price: "$998.99",
            src: two
        },
        {
            name: "MacbookPro M2",
            price: "$1199.99",
            src: three
        },
        {
            name: "HP Chromebook Intel Celeron",
            price: "$149.99",
            src: four
        },
        {
            name: "Dell Inspiron",
            price: "$549.99",
            src: five
        },
        {
            name: "HP Envy",
            price: "$499.99",
            src: six
        },
        {
            name: "Lenovo Yoga 7i",
            price: "$899.99",
            src: seven
        },
        {
            name: "HP AMD Ryzen 3",
            price: "$540.00",
            src: eight
        },
    ]
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
            <div class = "cart-bin">
            <span class = "nav-icon">
                <ShoppingListButton numberPasser={PageHandler} ></ShoppingListButton>
            </span>
            <div class = "cart-items">0</div>
        </div>
    </div>
</nav>

  <div class="container">
    <div class="header">
      <div class="logo">Computers</div>
    </div>

    <div class="computers">
        {laptops.map((laptop) => (
            <ItemDisplay name={laptop.name} price={laptop.price} img ={laptop.src}></ItemDisplay>
        ))}
    </div>

    <div class="footer">
      <p>E commis</p>
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
