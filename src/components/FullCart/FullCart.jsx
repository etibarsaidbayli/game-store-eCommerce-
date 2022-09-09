import style  from './FullCart.module.css'
import {useSelector} from 'react-redux'
import CartItem from "../CartItem/CartItem";

function FullCart () {
    const cartGames = useSelector((state)=>state.cart.cartGames)
    return (
        <div className={style.cart__block}>
          {cartGames?.map((cartGame) => (
            <CartItem key={cartGame.id} id={cartGame.id} title={cartGame.title} price={cartGame.price}/>
          ))}
        </div>
    )
}


export default FullCart 