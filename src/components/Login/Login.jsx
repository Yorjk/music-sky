import logo from './logo.png';
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    return (
        <div className='login'>
            <form className="registration">
                <Link className="registration_logo" to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                {props.login}
                {props.password}
                {props.repeadPassword}
                {props.button}
                {props.secondButton}
            </form>
        </div>
    )
}