import { useState } from "react";
import ListItem from "./ListItems/ListItem"; 



const Product = () => {


    const [items, setItems] = useState([
        {
            id : 0,
            discountedPrice : 99.00,
            price : 130.00,
            title : "title of Item 1",
            thumbnail : "placeholder.jpg"
        },
        {
            id : 1,
            discountedPrice : 49.00,
            price : 90.00,
            title : "title of Item 2",
            thumbnail : "placeholder.jpg"
        },
        {
            id : 2,
            discountedPrice : 89.00,
            price : 110.00,
            title : "title of Item 3",
            thumbnail : "placeholder.jpg"
        },
        {
            id : 3,
            discountedPrice : 149.00,
            price : 180.00,
            title : "title of Item 4",
            thumbnail : "placeholder.jpg"
        },
        {
            id : 4,
            discountedPrice : 199.00,
            price : 250.00,
            title : "title of Item 5",
            thumbnail : "placeholder.jpg"
        }
    ])

    return (
    <div className={"product-list"}>
        <div className="product-list--wrapper">
                {items.map(item => <ListItem key={item.id} data={item}/>)}  
        </div>
    </div>)
}
 
export default Product;