import s from './CenterBlock.module.css'
import { ReactComponent as Watch } from './img/watch.svg'

export const CenterBlock = (props) => {
    return (
        <div className={s.centerblock__content}>
            <div className={`${s.content__title} ${s.playlist_title}`}>
                <div className={`${s.playlist_title__col} ${s.col01}`}>Трек</div>
                <div className={`${s.playlist_title__col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
                <div className={`${s.playlist_title__col} ${s.col03}`}>АЛЬБОМ</div>
                <div className={`${s.playlist_title__col} ${s.col04}`}>
                    <Watch className={s.playlist_title__svg} alt="time" />
                </div>
            </div>
            {props.playlist}
        </div>
    )
}