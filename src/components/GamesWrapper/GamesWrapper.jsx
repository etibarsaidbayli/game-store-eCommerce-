import {useSelector} from 'react-redux'
import style from './GamesWrapper.module.css'
import GameItem from '../GameItem/GameItem'


function GamesWrapper () {
    const games = useSelector((state)=>state.game.games)

    
    return (
        <section className={style.gameWrapper__section}>
            {games.map((game)=> (
                <GameItem key={game.id} {...game} game={game}/>
            ))}
        </section>
    )
}

export default GamesWrapper