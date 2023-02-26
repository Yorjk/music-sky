import s from './PlaylistItem.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Sprite } from './img/sprite.svg';
import { ReactComponent as Like } from './img/like.svg';

export const PlaylistItem = (props) => {
   return (
      <div className={s.playlist__item}>
         <Link to={`/playlist/${props.trackId}`}>
            <div className={`${s.playlist__track} ${s.track}`}>
               <div className={s.track__title}>
                  <div className={s.track__title_image}>
                     <Sprite />
                  </div>
                  <div className={s.track__title_text}>
                     <a className={s.track__title_link} href="#">{props.title} <span className={s.track__title_span}>{props.titleSpan}</span>
                     </a>
                  </div>
               </div>
               <div className={s.track__author}>
                  <a className={s.track__author_link} href="#">{props.author}</a>
               </div>
               <div className={s.track__album}>
                  <a className={s.track__album_link} href="#">{props.album}</a>
               </div>
               <div className={s.track__time}>
                  <svg className={s.track__time_svg} alt="time">
                     <Like />
                  </svg>
                  <span className={s.track__time_text}>{props.time}</span>
               </div>
            </div>
         </Link>
      </div>
   )
}