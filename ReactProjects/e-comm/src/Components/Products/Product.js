import { useState } from "react";
import ListItem from "./ListItems/ListItem"; 
import Form from "../Form";

// const items = [
    // {
    //     id : 0,
    //     discountedPrice : 99.00,
    //     price : 130.00,
    //     title : "title of Item 1",
    //     thumbnail : "placeholder.jpg"
    // },
    // {
    //     id : 1,
    //     discountedPrice : 99.00,
    //     price : 130.00,
    //     title : "title of Item 2",
    //     thumbnail : "placeholder.jpg"
    // },
    // {
    //     id : 2,
    //     discountedPrice : 89.00,
    //     price : 110.00,
    //     title : "title of Item 3",
    //     thumbnail : "placeholder.jpg"
    // },
    // {
    //     id : 3,
    //     discountedPrice : 149.00,
    //     price : 180.00,
    //     title : "title of Item 4",
    //     thumbnail : "placeholder.jpg"
    // },
    // {
    //     id : 4,
    //     discountedPrice : 199.00,
    //     price : 250.00,
    //     title : "title of Item 5",
    //     thumbnail : "placeholder.jpg"
    // }
// ]

const Product = () => {


    const [item, setItem] = useState({
        id : 0,
        discountedPrice : 199.00,
        price : 250.00,
        title : "title of Item",
        thumbnail : "placeholder.jpg"
    })

    const handleInput = event => {
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (item.discountedPrice > item.price) { 
            alert("How come discounted price is greater than actual !!!!")
            return;
        }
    }

    return (
    <div className={"product-list"}>
        <div className="product-list--wrapper">
            <div className={"form"}>
                <Form item={item} onChangeInput={handleInput} onFormSubmission={handleFormSubmit}/>
                {/* {items.map(item => <ListItem key={item.id} data={item}/>)}
                <ListItem data={item}/> */}
            </div>  
        </div>
        {/* {items.map(item => <ListItem key={item.id} data={item}/>)} */}
        <ListItem data={item}/>
    </div>)
}
 
export default Product;