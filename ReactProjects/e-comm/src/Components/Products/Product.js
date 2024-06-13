import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem"; 
import axios from "axios";



const Product = () => {


    const [items, setItems] = useState([
        // {
        //     id : 0,
        //     discountedPrice : 99.00,
        //     price : 130.00,
        //     title : "title of Item 1",
        //     thumbnail : "placeholder.jpg"
        // },
        // {
        //     id : 1,
        //     discountedPrice : 49.00,
        //     price : 90.00,
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
    ])

    useEffect(() => {
        // fetch(`https://react-e-comm-d19c1-default-rtdb.asia-southeast1.firebasedatabase.app/items.json`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        // axios.get(`https://react-e-comm-d19c1-default-rtdb.asia-southeast1.firebasedatabase.app/items.json`)
        // .then(response => {
        //     const data = response.data
        //     const transformedData = data.map((item, index) => {
        //         return {
        //             ...item,
        //             id : index
        //         }
        //     })
        //     setItems(transformedData)
        // })
        // .catch(error =>{
        //     console.log(error)
        // })

        async function fetchItems() {
            try {
                const response = await axios.get('https://react-e-comm-d19c1-default-rtdb.asia-southeast1.firebasedatabase.app/items.json')
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        id: index
                    }
                })
                setItems(transformedData)   
            } 
            catch (error) {
                console.log("Error: ", error)
                alert("Some error occurred");
            }
        }

        fetchItems();
    }, [])

    const updateItemTitle = async(itemId) => {
        console.log(`Item with id: ${itemId}`)
        try {
            let title = `Update Title #Item-${itemId}`
            await axios.patch(`https://react-e-comm-d19c1-default-rtdb.asia-southeast1.firebasedatabase.app/items/${itemId}.json`,{
                title: title
            })
            let data = [...items]
            let index = data.findIndex(e => e.id === itemId)
            data[index]['title'] = title

            setItems(data)
        }
        catch(error) {
            console.log("Error Updating the data!");
        }
    }

    return (
    <div className={"product-list"}>
        <div className="product-list--wrapper">
                {items.map(item => <ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)}  
        </div>
    </div>)
}
 
export default Product;