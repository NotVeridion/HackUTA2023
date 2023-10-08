import "./ItemDisplay.css"
function ItemDisplay(props){

    return(
        <div class="card1">
        <p class="title">{props.name}</p>
        <img src={props.img} alt={props.name} style={{ width: '250px', height: '150px' }}/>
        <p class = "price">{props.price}</p>
        <a href={props.link}>To Seller</a>
      </div>
    )
}
export default ItemDisplay;