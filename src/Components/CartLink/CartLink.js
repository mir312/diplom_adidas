import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink" >
      <Link to="/cart" className="cart_ic">
        <span className="cart_num">{total}</span>
        <i className="icons_head"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.45896 7.62555L0 32H32L30.541 7.62555H1.45896ZM3.81867 10.1885H28.1825L29.3345 29.437H2.66548L3.81748 10.1885H3.81867Z"
            fill="black" />
          <path
            d="M21.5917 7.78886C21.5917 4.89439 19.3019 2.53982 16.4871 2.53982C13.6723 2.53982 11.3825 4.89439 11.3825 7.78886H8.9126C8.9126 3.49408 12.3105 0 16.4871 0C20.6637 0 24.0616 3.49408 24.0616 7.78886H21.5917Z"
            fill="black" />
        </svg></i>
      </Link>
    </div>
  )
}