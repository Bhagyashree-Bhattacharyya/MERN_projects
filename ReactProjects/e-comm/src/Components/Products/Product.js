import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItem"; 
import axios from "axios";
import Loader from "../UI/Loader";



const Product = ({onAddItem, onRemoveItem}) => {

    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [presentItems, setPresentitems] = useState([])

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

    // const updateItemTitle = async(itemId) => {
    //     console.log(`Item with id: ${itemId}`)
    //     try {
    //         let title = `Update Title #Item-${itemId}`
    //         await axios.patch(`https://react-e-comm-d19c1-default-rtdb.asia-southeast1.firebasedatabase.app/items/${itemId}.json`,{
    //             title: title
    //         })
    //         let data = [...items]
    //         let index = data.findIndex(e => e.id === itemId)
    //         data[index]['title'] = title

    //         setItems(data)
    //     }
    //     catch(error) {
    //         console.log("Error Updating the data!");
    //     }
    // }

    const handleAddItem = (id) => {
        if(presentItems.indexOf(id) > -1) {return;}
        setPresentitems([...presentItems, id])
        onAddItem();
    }

    const handleRemoveItem = (id) => {
        let index = presentItems.indexOf(id)
        if (index > -1) {
            let items = [...presentItems]
            items.splice(index, 1)
            setPresentitems([...items]);
            onRemoveItem();
        }      
    }

    return (
    <>
        <div className={"product-list"}>
            <div className="product-list--wrapper">
                    {items.map(item => <ListItem onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} key={item.id} data={item}/>)}  
            </div>
        </div>
        {loader && <Loader/>}
    </>
    )
}
 
export default Product;