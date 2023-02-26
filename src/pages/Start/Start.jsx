import { Login } from "../../components/Login/Login";
import { Input } from "../../components/Login/Input";
import { Button } from "../../components/Login/Button";
import { useState } from "react";

export const Start = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => setUser({ login: "taradam" });
  const handleLogout = () => setUser(null);
  const onClick = () => { user ? handleLogout : handleLogin };

  return (
    <Login login={
      <Input type={'text'}
        className={'registration_input'}
        placeholder={'Логин'} />
    }
      password={
        <Input type={'password'}
          className={'registration_input password_input'}
          placeholder={'Пароль'} />
      }
      button={
        <Button link={'/main'}
          classname={'login_button'}
          name={'Войти'}
          onClick={() => { onClick }}
        />
      }
      secondButton={
        <Button link={'/registration'}
          classname={'registration_button'}
          name={'Зарегистрироваться'} />}
    />
  )
}