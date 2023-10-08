import "./ShoppingList.css"

function ShoppingList(props){
    function ClickHandler(){
        props.OnReturn();
    }
    return(
        <div>HIIIIIIIIIIIIIIIIIIIIIIIIIi
            <button onClick={ClickHandler}>Return to Shopping</button>
        </div>

    )
}

export default ShoppingList;