import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
<<<<<<< HEAD
import ShoppingListButton from './components/ShoppingListButton'
import "./App.css"
=======

>>>>>>> 238fb11881191b4e991b8db6b8ffd9ddf6a924af
function App() {
    
    return (
        <div>

        <NavBar>

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
    )
}

export default App
