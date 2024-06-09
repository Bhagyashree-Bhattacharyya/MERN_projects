import AddToCartIcon from "../../../assets/icons/add_cart.svg";

const ListItem = ({data}) => {
// const data = {
//     discountedPrice : 99.00,
//     price : 130.00,
//     title : "title of the Item",
//     thumbnail : "placeholder.jpg"
// }
// console.log(data);

    return (
    <div className={"item-card"}>
        <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
        <div className={"item-card__information"}>
            <div className={"pricing"}>
                <span>${data.discountedPrice}</span>
                <small>
                    <strike>${data.price}</strike>
                </small>
            </div>
            <div className={"title"}>
                <h3>{data.title}</h3>
            </div>
        </div>
        <button className={"cart-add"}>
            <span>Add to Cart</span>
            <img src={AddToCartIcon} alt="cart icon"/>
        </button>
    </div>
    )
}

export default ListItem;