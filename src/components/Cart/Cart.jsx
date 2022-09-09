import { FaOpencart } from "react-icons/fa";
import { useState } from "react";
import style from "./Cart.module.css";
import { useSelector } from "react-redux";
import EmptyCart from "../EmptyCart/EmptyCart";
import FullCart from "../FullCart/FullCart";
function Cart() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const cartGames = useSelector((state) => state.cart.cartGames);
  let summa = cartGames.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {isOpenCart && (cartGames.length > 0 ? <FullCart /> : <EmptyCart />)}

      <div className={style.cart} onClick={() => setIsOpenCart(!isOpenCart)}>
        <FaOpencart className={style.cart__icon} size={48} />
        <div className={style.cart__totalPrice}>{summa} $</div>
        <small className={style.cart__count}>{cartGames.length}</small>
      </div>
    </>
  );
}

export default Cart;
