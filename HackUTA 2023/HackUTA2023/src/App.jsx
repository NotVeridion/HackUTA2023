import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import ShoppingListButton from './components/ShoppingListButton'
function App() {
    
    return (
        <div>

        <NavBar>
            <ShoppingListButton>
                
            </ShoppingListButton>
        </NavBar>
        <Card>
            <div class = "computers">
                <div class = "card">
                    <p class = "item">Macbook Air</p>
                    <p>$999.99</p>
                </div>
                <div class = "card">
                    <p class = "item">Macbook Pro</p>
                    <p>$1399.99</p>
                    <div class = "card">
                    <p class = "item">HP Intel Core i3</p>
                    <p>$849.99</p>
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
                </div>
            </div>
        </Card>
        </div>
    )
}

export default App
