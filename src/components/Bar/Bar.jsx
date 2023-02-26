import './Bar.css';
import { ReactComponent as Sprite } from './sprite.svg';
import { ReactComponent as Volume } from './volume.svg';
import { BarLike } from './BarLike/BarLike';
import { BarPlayer } from './BarPlayer/BarPlayer';
import { ProgressBar } from './ProgressBar/ProgressBar';
import track from './Bobby_Marleni_-_Dropin.mp3';
import { useEffect, useRef } from 'react';

export const Bar = (props) => {
   const audioRef = useRef(new Audio(track));
   const progressRef = useRef();
   useEffect(() => {
      audioRef.current.ontimeupdate = () => {
         const progress = (audioRef.current.currentTime / audioRef.current.duration) * 1000
         progressRef.current.value = progress
      }
   }, [audioRef, progressRef])
   const onVolumeChange = (event) => {
      audioRef.current.volume = event.target.value / 100
   }
   return (
      <div className="bar">
         <div className="bar__content">
            <ProgressBar {...{ progressRef, audioRef }} />
            <div className="bar__player_block">
               <div className="bar__player player">
                  <BarPlayer {...{ audioRef }} />
                  <div className="player__track_play track_play">
                     <div className="track_play__contain">
                        <div className="track_play__image">
                           <Sprite alt="avatar" />
                        </div>
                        <div className="track_play__author">
                           <a className="track_play__author_link" href="#">{props.track}
                           </a>
                        </div>
                        <div className="track_play__album">
                           <a className="track_play__album_link" href="#">{props.name}</a>
                        </div>
                     </div>
                     <BarLike />
                  </div>
               </div>
               <div className="bar__volume_block volume">
                  <div className="volume__content">
                     <div className="volume__image">
                        <Volume alt="volume" />
                     </div>
                     <div className="volume__progress _btn">
                        <input className="volume__progress-line _btn" type="range" name="range" onChange={onVolumeChange} defaultValue={100} min={0} max={100} />
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}