const Form = (props) => {

    const handleInput = e => {
        props.onChangeInput(e)
    }
    
    return (
        <form onSubmit={props.onFormSubmission}>
            <h4>Item Card Details</h4>
            <div className={"input-field"}>
                <label htmlFor="title">Title</label>
                <input name="title" type="text" placeholder="enter title" value={props.item.title} onChange={handleInput} required/> 
            </div>
            <div className={"input-field"}>
                <label htmlFor="price">Price</label>
                <input name="price" type="number" placeholder="enter price" value={props.item.price} onChange={handleInput} required/> 
            </div>
            <div className={"input-field"}>
                <label htmlFor="discountedPrice">Discounted Price</label>
                <input name="discountedPrice" type="number" placeholder="enter discounted price" value={props.item.discountedPrice} onChange={handleInput}/> 
            </div>
            <div className={"input-field"}>
                <label htmlFor="thumbnail">Thumbnail</label>
                <input name="thumbnail" type="text" placeholder="enter thumbnail name" value={props.item.thumbnail} onChange={handleInput}/>  
            </div>
            <div className={"submit-wrap"}>
                <button>Update</button>
            </div>
        </form>
    )
}

export default Form;