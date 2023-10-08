import { useState } from 'react'
import NavBar from "./components/navbar"
import Card from "./UI/Card"
import "./App.css"
import one from "./assets/macbook air.jpeg"
import two from "./assets/macbook pro m1.jpeg"
import three from "./assets/macbook pro m2.jpeg"
import four from "./assets/HP Celeron.jpeg"
import five from "./assets/Dell Inspiron.jpeg"
import six from "./assets/hp envy.png"
import seven from "./assets/yoga.jpeg"
import eight from "./assets/amd.jpeg"
import ShoppingList from './components/ShoppingList'
function App() {
    const[pageState, setPageState] = useState(0);
    function PageHandler(number){
        console.log("bye")
        setPageState(number);
    }
    function ReturnHandler(){
        setPageState(0);
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
      <div class="logo">Computers</div>
    </div>

    <div class="computers">
      <div class="card">
        <p class="title">Macbook Air</p>
        <img src={one} alt="Macbook Air" style={{ width: '150px', height: '100px' }}/>
        <p>$749.99</p>
      </div>
      <div class="card">
        <p class="title">Macbook Pro M1</p>
        <img src={two} alt="Macbook Pro M1" style={{ width: '150px', height: '100px' }}/>
        <p>$998.99</p>
      </div>
      <div class="card">
        <p class="title">Macbook Pro M2</p>
        <img src={three} alt="Macbook Pro M2" style={{ width: '150px', height: '100px' }}/>
        <p>$1199.99</p>
      </div>
      <div class="card">
        <p class="title">HP Chromebook Intel Celeron</p>
        <img src={four} alt="HP Chromebook Intel Celeron" style={{ width: '150px', height: '100px' }}/>
        <p>$149.99</p>
      </div>
      <div class="card">
        <p class="title">Dell Inspiron</p>
        <img src={five} alt="Dell Inspiron" style={{ width: '150px', height: '100px' }}/>
        <p>$549.99</p>
      </div>
      <div class="card">
        <p class="title">HP Envy</p>
        <img src={six} alt="HP Envy" style={{ width: '150px', height: '100px' }}/>
        <p>$499.99</p>
      </div>
      <div class="card">
        <p class="title">Lenovo Yoga 7i</p>
        <img src={seven} alt="Lenovo Yoga 7i" style={{ width: '150px', height: '100px' }}/>
        <p>$899.99</p>
      </div>
      <div class="card">
        <p class="title">HP AMD Ryzen 3</p>
        <img src={eight} alt="HP AMD Ryzen 3" style={{ width: '150px', height: '100px' }}/>
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
        {pageState === 1 && <ShoppingList OnReturn={ReturnHandler}></ShoppingList>}
        </div>
    )
}
export default App
