import GenreItem from "../GenresItem/GenreItem";
import style from "./DetailGameItem.module.css";
import GameAddButton from "../GameAddButton/GameAddButton";
import { useSelector } from "react-redux";

function DetailGameItem() {
  const detailGame = useSelector((state) => state.game.detailGame);

  return (
    <div>
      <h1 className={style.details__viewTitle}>{detailGame.title}</h1>
      <div className={style.details__box}>
        <iframe className={style.detailsIframe} src={detailGame.video}></iframe>
        <div className={style.details__info}>
          <div className={style.detailsInfoImage}>
            <img src={detailGame.image} alt="" />
          </div>
          <p className={style.details__description}>{detailGame.description}</p>
          <p>bu məhsul üçün məşhur etiketlər</p>
          <div className={style.details__genres}>
            {detailGame.genres.map((genre) => (
              <GenreItem genre={genre} />
            ))}
          </div>
          <div className={style.details__footer}>
            <small className={style.details__FooterPrice}>7878 $</small>
            <GameAddButton game={detailGame} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailGameItem;
