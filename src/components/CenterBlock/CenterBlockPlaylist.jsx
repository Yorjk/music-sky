import s from './CenterBlock.module.css'
import tracks from "../../tracks"
import { PlaylistItem } from "../PlaylistItem/PlaylistItem"
import { useParams } from 'react-router-dom';

export const CenterBlockPlaylist = () => {
  const params = useParams();

  return (
    <div className={`${s.content__playlist} ${s.playlist}`}>
      {
        tracks.map(
          (track, index) => {
            return (
              <PlaylistItem key={index}
                trackId={index + 1}
                title={track.title}
                titleSpan={track.titleSpan}
                author={track.author}
                album={track.album}
                time={track.time} />)
          }
        )
      }
    </div>
  )
}