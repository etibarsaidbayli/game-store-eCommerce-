import style from "./GameAddButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartGames, removeCartGames } from "../../features/cartSlice";

function GameAddButton({ game }) {
  const cartGames = useSelector((state) => state.cart.cartGames);
  const isItemInCart = cartGames.some((item) => item.id === game?.id);

  const handleAddGame = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (isItemInCart) {
      dispatch(removeCartGames(game.id));
    } else {
      dispatch(addCartGames(game));
    }
  };
  const dispatch = useDispatch();
  return (
    <button
      onClick={handleAddGame}
      className={!isItemInCart ? style.addToCartBtn : style.removeToCart}
    >
      {!isItemInCart ? "sebete elave et" : "sebetden sil"}
    </button>
  );
}

export default GameAddButton;
