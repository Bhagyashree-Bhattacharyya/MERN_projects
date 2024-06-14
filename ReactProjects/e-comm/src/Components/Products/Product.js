import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem"; 
import axios from "axios";
import Loader from "../UI/Loader";



const Product = () => {


    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {

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
                setLoader(false)
                setItems(transformedData)   
            } 
            catch (error) {
                console.log("Error: ", error)
                alert("Some error occurred");
            }
            finally {
                setLoader(false)
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
    <>
    <div className={"product-list"}>
        <div className="product-list--wrapper">
                {items.map(item => <ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)}  
        </div>
    </div>
    {loader && <Loader/>}
    </>
    )
}
 
export default Product;