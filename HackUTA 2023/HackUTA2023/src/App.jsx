import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import "./App.css"
function App() {
    
    return (
        <div>

        <NavBar>

        </NavBar>
        <Card>
        <body>
            <div class="container">

                <div class="header">
                <div class="logo">Ecomerence Logo</div>
                <div class="menu">
                <ul>
                        <li>header link one</li>
                        <li>header link two</li>
                        <li>header link three</li>
                        <li>header link four</li>
                 </ul>
                </div>
            </div>

            <div class="sidebar">
            <div class="photo">
                <p>placeholder for image</p>    
            </div>
            <div class="side-content">Box 1
            </div>
            <div class="side-content">Box 2
            </div>
            <div class="side-content">Box 3
            </div>
            </div>

            <div class="nav">
                <ul>
                    <li>Latest Technology</li>
                    <li>Most Viewed Technology</li>
                    <li>Featured</li>
                </ul>
            </div>

            <div class="Computers">
                <div class="card">
                    <p class="title">Macbook Air</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 
                    
                </div>
                <div class="card">
                    <p class="title">Macbook Pro</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                 </div>
                <div class="card">
                    <p class="title">Lenovo</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                </div>
                <div class="card">
                     <p class="title">Windows</p>
                     <p>placeholder for image</p> 
                     <p>placeholder for price</p> 

                </div>
                 <div class="card">
                    <p class="title">Lenovo</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                </div>
                 <div class="card">
                    <p class="title">Surface Pro</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                </div>
                <div class="card">
                    <p class="title">Lenovo</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                </div>
                <div class="card">
                    <p class="title">Macbook Pro M2</p>
                    <p>placeholder for image</p> 
                    <p>placeholder for price</p> 

                </div>
            </div>

      <div class="footer">
        <p>E commis</p>
      </div>
      
    </div>
  </body>
        </Card>
        </div>
    )
}

export default App
