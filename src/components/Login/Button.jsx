import { Link } from "react-router-dom"

export const Button = (props) => {

    return (
        <Link to={props.link}>
            <button className={props.classname}>{props.name}</button>
        </Link>
    )
}