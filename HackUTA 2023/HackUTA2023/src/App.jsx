import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import "./App.css"
import ShoppingList from './components/ShoppingList'
function App() {
    const[pageState, setPageState] = useState(0)
    function PageHandler(){
        setPageState(1);
    }
    return (
        <div>
        {pageState === 0 && <div>
        <NavBar OnChangePage={PageHandler}>

        </NavBar>
        <Card>
        <div class = "container">

            <div class = "computers">
                <div class = "card">
                    <p class = "item">Macbook Air</p>
                    <p>$999.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Macbook Pro</p>
                    <p>$1399.99</p>
                </div>
                <div class = "card">
                    <p class = "item">HP Intel Celeron</p>
                    <p>$1399.99</p>
                </div>
                <div class = "card">
                    <p class = "item">HP Chromebookr</p>
                    <p>$649.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Lenovo Yoga 7i</p>
                    <p>$749.99.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Dell XPS</p>
                    <p>$1599.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Surface Laptop Go 2</p>
                    <p>$599.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Surface Laptop 5</p>
                    <p>$950.99</p>
                </div>
                </div>
        </div>

        </Card>
        </div>
        }
        {pageState === 1 && <ShoppingList></ShoppingList>}
        </div>
    )
}
export default App
