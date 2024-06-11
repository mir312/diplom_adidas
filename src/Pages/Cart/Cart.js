import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import { AppContext } from "../../App";
import Total from "../../Components/Total/Total";
import './Cart.css'
// import Image from "../Image/Image";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);
  
  if (Object.keys(cart).length === 0) {
    return (
    <div className="Cart" >
      <h1 className="cart_txt">Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
    )
  }
  if (!user) {
    <div className="Cart" >
      <h1 className="cart_txt">Cart</h1>
      <CartList />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  }

  return (
    <div className="Cart" >
      <h1 className="cart_txt">Cart</h1>
      <CartList />
      <Total />
      {/* <Image /> */}
      <button className="order" onClick={() => setModalActive(true)}>Order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  )
}