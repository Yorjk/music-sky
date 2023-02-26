import { ReactComponent as Prev } from './img/prev.svg';
import { ReactComponent as Play } from './img/play.svg';
import pausePlayer from './img/pause.png';
import { ReactComponent as Next } from './img/next.svg';
import { ReactComponent as Repeat } from './img/repeat.svg';
import { ReactComponent as Shuffle } from './img/shuffle.svg';
import { useState } from 'react';

export const BarPlayer = ({ audioRef }) => {
   const [active, setActive] = useState(false);
   const start = () => {
      audioRef.current.play();
      setActive(true);
   }
   const pausePlay = () => {
      audioRef.current.pause();
      setActive(false);
   }

   return (
      <div className="player__controls">
         <div className="player__btn_prev _btn_icon">
            <Prev />
         </div>
         <div className="player__btn_play _btn_icon" onClick={() => { active ? pausePlay() : start() }}>
            {active ? <img src={pausePlayer} alt="pause" /> : <Play alt="play" />}
         </div>
         <div className="player__btn_next _btn_icon">
            <Next alt="next" />
         </div>
         <div className="player__btn_repeat _btn_icon">
            <Repeat alt="repead" />
         </div>
         <div className="player__btn_shuffle _btn_icon">
            <Shuffle alt="shuffle" />
         </div>
      </div>
   )
}