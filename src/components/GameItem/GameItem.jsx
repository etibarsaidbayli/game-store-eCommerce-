import GameAddButton from "../GameAddButton/GameAddButton";
import GenresItem from "../GenresItem/GenreItem";
import style from "./GameItem.module.css";
import { Link } from "react-router-dom";
import { setDetailGame } from "../../features/gameSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function GameItem({ id, image, title, genres, price, game }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleClickItem = () => {
    dispatch(setDetailGame(game));
    navigate(`details/${game.id}`)
  };

  return (
    <div className={style.game__item} onClick={handleClickItem}>
      <div
        className={style.game__itemImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={style.game__itemItems}>
        <h3 className={style.game__title}>{title}</h3>
        <div className={style.game__genres}>
          {genres.map((genre) => (
            <GenresItem key={genre} genre={genre} />
          ))}
        </div>
      </div>

      <div className={style.game__itemFooter}>
        <h5 className={style.game__itemPrice}>{price}$</h5>
        <GameAddButton game={game} />
      </div>
    </div>
  );
}

export default GameItem;
