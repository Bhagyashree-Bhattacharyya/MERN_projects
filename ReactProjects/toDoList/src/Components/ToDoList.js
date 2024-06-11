const ToDoList = ({ list }) => {
    return (
        <ul>
            {
                list && list.map((item) => {
                    return (
                        <li key={`${item.id}`}>{item.text}</li>
                    )
                })
            }
        </ul>
    )
}

export default ToDoList