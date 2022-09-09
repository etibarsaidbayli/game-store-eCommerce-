import style from "./CartItem.module.css";
import {useDispatch} from 'react-redux'
import {removeCartGames} from '../../features/cartSlice'

function CartItem({id,title,price}) {
  const dispatch=useDispatch()

  return (
    <div className={style.cart__item}>
      
      <h3>{title}</h3>
      <div className={style.cart__itemChild}>
        <small className={style.cart__itemPrice}>{price}$</small>
        <button
        onClick={() => dispatch(removeCartGames(id))}
        className={style.cart__itemDelBtn}>x</button>
      </div>
    </div>
    
  );
}

export default CartItem;
