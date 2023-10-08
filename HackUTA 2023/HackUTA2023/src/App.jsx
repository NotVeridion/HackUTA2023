import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import "./App.css"
import one from "./assets/macbook air.jpeg"
import two from "./assets/macbook pro m1.jpeg"
import three from "./assets/macbook pro m2.jpeg"
import four from "./assets/HP Celeron.jpeg"
import five from "./assets/Dell Inspiron.jpeg"
import ShoppingList from './components/ShoppingList'
function App() {
    const[pageState, setPageState] = useState(0);
    function PageHandler(number){
        console.log("bye")
        setPageState(number);
    }
    return (
        <div>
        {pageState === 0 && <div>
        <NavBar pageState={PageHandler}>

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
                    <a href="default.asp">
                    <img src={one} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    </a> 
                    <p>$749.99</p> 
                    
                </div>
                <div class="card">
                    <p class="title">Macbook Pro M1</p>
                    <img src={two} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$998.99</p> 

                 </div>
                <div class="card">
                    <p class="title">Macbook Pro M2</p>
                    <img src={three} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$1199.99</p> 

                </div>
                <div class="card">
                     <p class="title">HP Chromebook Intel Celeron</p>
                     <img src={four} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                     <p>$149.99</p> 

                </div>
                 <div class="card">
                    <p class="title">Dell Inspiron</p>
                    <img src={five} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$549.99</p> 

                </div>
                 <div class="card">
                    <p class="title">HP Envy</p>
                    <img src={one} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$499.99</p> 

                </div>
                <div class="card">
                    <p class="title">Lenovo Yoga 7i</p>
                    <img src={one} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$899.99</p> 

                </div>
                <div class="card">
                    <p class="title">HP AMD Ryzen 3</p>
                    <img src={one} alt="Macbook img" style={{ width: '150px', height: '100px' }} />
                    <p>$540.00</p> 

                </div>
            </div>

      <div class="footer">
        <p>E commis</p>
      </div>
      
    </div>
  </body>
        </Card>
        </div>
        }
        {pageState === 1 && <ShoppingList></ShoppingList>}
        </div>
    )
}
export default App
