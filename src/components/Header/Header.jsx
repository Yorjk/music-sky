import './Header.css';
import mainLogo from './img/logo.png';
import { ReactComponent as LogoLettersDark } from './img/darkLogo.svg';
import { ReactComponent as LogoLettersLight } from './img/lightLogo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dark } from './img/dark.svg';
import { ReactComponent as Light } from './img/light.svg';
const { useState, useEffect } = React;
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/creaters/ToDo";

export const Header = () => {
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodo(setVisible(!visible)));
  }

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  return (
    <>
      <nav className={visible ? "main__nav nav" : "nav__menu_hidden main__nav nav"}>
        <div className="nav__logo logo">
          <Link to='/main'>
            <img className="logo__image"
              src={mainLogo}
              alt="logo"
            />
            {theme === 'dark' ? <LogoLettersDark /> : <LogoLettersLight />}
          </Link>
        </div>
        <div className="nav__burger burger" onClick={handleAddTodo}>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
        {visible || (
          <div className="nav__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="menu__link" to='/main'>Главное</Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to='/my'>Мой плейлист</Link>
              </li>
              <li className="menu__item">
                <Link className="menu__link" to='/'>Войти</Link>
              </li>
              <li className="menu__item" onClick={toggleTheme}>
                {theme === 'dark' ? <Dark /> : <Light />}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}