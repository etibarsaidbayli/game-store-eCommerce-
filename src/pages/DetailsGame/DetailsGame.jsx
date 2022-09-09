import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailGameItem from "../../components/DetailGameItem/DetailGameItem";
import { setDetailGame } from "../../features/gameSlice";
function DetailsGame() {
  const games = useSelector((state) => state.game.games);
  const { gameId } = useParams();

  const dispatch = useDispatch();

  dispatch(setDetailGame(games.find((g) => g.id == gameId)));

  return (
    <section style={{ padding: "70px 0" }}>
      <DetailGameItem />
    </section>
  );
}

export default DetailsGame;
