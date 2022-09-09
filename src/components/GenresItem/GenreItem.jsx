import style from './GenreItem.module.css'


function GenreItem ({genre}) {
    
    return (
        <div className={style.game__genres__item}>{genre}</div>
       
    )
}

export default GenreItem