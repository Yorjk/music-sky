import React from 'react';
import { ReactComponent as DisLike } from './img/dislike.svg';
import { useDispatch } from "react-redux";
import { toggleTodo } from '../../../store/actions/creaters/ToDo';

export const BarDisLike = ({todo}) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  }
    return (
      <div className="track_play__dislike track_play__dislike_svg _btn_icon" onClick={toggleTodoItem}>
        <DisLike alt="dislike" />
      </div>
    )
}