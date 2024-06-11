import { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList"

const ToDo = () => {
    const [list, setList] = useState([])

    const addListItem = item => {
        setList([item, ...list])
    }

    return (
        <div>
            <ToDoForm onAddItem={addListItem}/>
            <ToDoList list={list}/>
        </div>
    )
}

export default ToDo;