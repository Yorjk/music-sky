import { Link } from 'react-router-dom';
import s from './SideBar.module.css';

export const SideBar = (props) => {
  return (
    <div className={`${s.main__sidebar} ${s.sidebar}`}>
      <div className={s.sidebar__personal}>
        <p className={s.sidebar__personal_name}>{props.name}</p>
        <div className={s.sidebar__avatar}>

        </div>
      </div>
      <div className={s.sidebar__block}>
        <div className={s.sidebar__list}>
          <div className={s.sidebar__item}>
            <Link className={s.sidebar__link} to='/day'>
              <img className={s.sidebar__img}
                src={props.imageList1}
                alt="day's playlist" />
            </Link>
          </div>
          <div className={s.sidebar__item}>
            <Link className={s.sidebar__link} to='/top'>
              <img className={s.sidebar__img}
                src={props.imageList2}
                alt="day's playlist" />
            </Link>
          </div>
          <div className={s.sidebar__item}>
            <Link className={s.sidebar__link} to='/indy'>
              <img className={s.sidebar__img}
                src={props.imageList3}
                alt="day's playlist" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}