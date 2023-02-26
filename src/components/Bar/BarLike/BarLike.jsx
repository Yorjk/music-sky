import { ReactComponent as Like } from './img/like.svg';
import { BarDisLike } from '../BarDisLike/BarDisLike';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../../../store/actions/creaters/ToDo';

export const BarLike = () => {
  const [like, setLike] = useState(true);
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(like));
    setLike(!like)
  }

  return (
    <div className="track_play__like_dis">
      <div className="track_play__like track_play__like_svg _btn_icon" onClick={handleAddTodo}>
        <Like alt="like" />
      </div>
      <BarDisLike/>
    </div>
  )
}