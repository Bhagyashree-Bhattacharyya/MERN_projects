import AddToCartIcon from "../../assets/icons/add_cart.svg";

const Header = () => {
    return (
        <header>
            <div className="nav-brand">
                <a href="/">
                    <span>SassyBeauty</span>
                    <div className="cosmetic-icons">
                        <img src="https://cdn-icons-png.flaticon.com/512/6075/6075201.png" alt="Cosmetic Icon"/>
                    </div>
                </a>
            </div>
            <div className="searchBox-container">
                <form>
                    <input name="search" type="text"
                        id="search" placeholder="Enter product name, category" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                            height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </button>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                    height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
            </div>
            <div className="cart-container">
                    <button>
                        <span data-items={0}>Cart</span>
                        <img src={AddToCartIcon} alt="Cart Icon" className="cart-icon" />
                    </button>
            </div>
        </header >
    )
}

export default Header;