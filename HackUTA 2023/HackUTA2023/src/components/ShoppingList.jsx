import "./ShoppingList.css"
import Card from "../UI/Card"
function ShoppingList(props){
    function ClickHandler(){
        props.OnReturn();
    }
    return(
        <div>
            <button onClick={ClickHandler}>Return to Shopping</button>
            <Card>
                <ul className='itemList'>
                    
                </ul>
            </Card>

        </div>

    )
}

export default ShoppingList;