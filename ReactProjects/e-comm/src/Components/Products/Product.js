import { useState } from "react";
import ListItem from "./ListItems/ListItem"; 

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

    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [discountedPrice, setDiscountedPrice] = useState(0)
    // const [thumbnail, setThumbnail] = useState("")

    const [item, setItem] = useState({
        id : 0,
        discountedPrice : 199.00,
        price : 250.00,
        title : "title of Item",
        thumbnail : "placeholder.jpg"
    })

    // const handleTitle = (event) => {
    //     // setTitle(event.target.value);
    //     setItem({
    //         ...item,
    //         title : event.target.value
    //     })
    // }

    // const handlePrice = (event) => {
    //     // setPrice(event.target.value);
    //     setItem({
    //         ...item,
    //         price : event.target.value
    //     })
    // }

    // const handleDiscountedPrice = event => {
    //     // setDiscountedPrice(event.target.value);
    //     setItem({
    //         ...item,
    //         discount : event.target.value
    //     })
    // }

    // const handleThumbnail = event => {
    //     // setThumbnail(event.target.value);
    //     setItem({
    //         ...item,
    //         thumbnail : event.target.value
    //     })
    // }

    const handleInput = event => {
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // console.log({
        //     title : title,
        //     price, discountedPrice, thumbnail
        // })
        if (item.discountedPrice > item.price) { 
            alert("How come discounted price is greater than actual !!!!")
            return;
        }
        // setItem({title, price, discountedPrice, thumbnail})
    }

    return (
    <div className={"product-list"}>
        <div className="product-list--wrapper">
            <div className={"form"}>
                <form onSubmit={handleFormSubmit}>
                    <h4>Item Card Details</h4>
                    <div className={"input-field"}>
                        <label htmlFor="title">Title</label>
                        <input name="title" type="text" placeholder="enter title" value={item.title} onChange={handleInput} required/> {/* onChange={handleTitle} */}
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="price">Price</label>
                        <input name="price" type="number" placeholder="enter price" value={item.price} onChange={handleInput} required/>  {/* onChange={handlePrice} */}
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="discountedPrice">Discounted Price</label>
                        <input name="discountedPrice" type="number" placeholder="enter discounted price" value={item.discountedPrice} onChange={handleInput}/>  {/* onChange={handleDiscountedPrice} */}
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail</label>
                        <input name="thumbnail" type="text" placeholder="enter thumbnail name" value={item.thumbnail} onChange={handleInput}/>  {/* onChange={handleThumbnail} */}
                    </div>
                    <div className={"submit-wrap"}>
                        <button>Update</button>
                    </div>
                </form>
            </div>
            {/* {items.map(item => <ListItem key={item.id} data={item}/>)}
            <ListItem data={item}/> */}
        </div>
        {/* {items.map(item => <ListItem key={item.id} data={item}/>)} */}
        <ListItem data={item}/>
    </div>)
}
 
export default Product;