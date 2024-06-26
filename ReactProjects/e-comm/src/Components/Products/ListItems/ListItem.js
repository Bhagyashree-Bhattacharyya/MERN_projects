import AddToCartIcon from "../../../assets/icons/add_cart.svg";
import {Fragment, useState} from "react";
import Modal from "../../UI/Modal";

const ListItem = ({data, onAddItem, onRemoveItem}) => {

    const [counter, setCounter] = useState(0)
    const [showModal, setShowModal] = useState(false)

    const increaseCounterByOne = (e) => {
        e.stopPropagation()
        onAddItem(data.id)
        setCounter(counter+1);
    }
    const decreaseCounterByOne = (e) => {
        e.stopPropagation()
        onRemoveItem(data.id)
        if (counter <= 0) {return;}
        if (counter === 1) {setCounter(counter-1);}
        setCounter(counter-1);
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
            <div className={"item-card"} onClick={handleModal}>
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
                    {/* <button onClick={() => updateItemTitle(data.id)}>update the title</button> */}
                </div>
                {
                counter < 1 ?
                    <button className={"cart-add"} onClick={increaseCounterByOne}>
                        <span>Add to Cart</span>
                        <img src={AddToCartIcon} alt="cart icon"/>
                    </button>
                :    
                    <div className={"cart-addon"}>
                        <button onClick={decreaseCounterByOne}><span>-</span></button>
                        <span className={"counter"}>{counter}</span>
                        <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>     
                }
            </div>
            {showModal && 
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span>₹{data.discountedPrice}</span>
                                <small>
                                    <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                counter < 1 ?
                                <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
                                    <span>Add to Cart</span>
                                    <img src={AddToCartIcon} alt="Cart Icon"/>
                                </button>
                                :
                                <div className="cart-addon card-addon__modal">
                                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                                    <span>{counter}</span>
                                    <button onClick={increaseCounterByOne}><span>+</span></button>
                                </div>
                            }
                        </div>
                    </div>
                </Modal>}
        </Fragment>
    )
}

export default ListItem;