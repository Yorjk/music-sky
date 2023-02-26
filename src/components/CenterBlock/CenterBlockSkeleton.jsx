import s from './CenterBlock.module.css';

import playlistItemLoading from "../PlaylistItem/skeletonTrack.svg"

export const CenterBlockSkeleton = () => {
    return (
        <div className={s.centerblock__content}>
            <div className={`${s.content__title} ${s.playlist_title}`}>
                <div className={`${s.playlist_title__col} ${s.col01}`}>Трек</div>
                <div className={`${s.playlist_title__col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
                <div className={`${s.playlist_title__col} ${s.col03}`}>АЛЬБОМ</div>
                <div className={`${s.playlist_title__col} ${s.col04}`}>
                    <svg className={s.playlist_title__svg} alt="time">
                        <use xlinkHref="public/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>
            <div className={`${s.content__playlist} ${s.content__playlist__skeleton} ${s.playlist}`}>
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
                <img src={playlistItemLoading} alt="" />
            </div>
        </div>
    )
}