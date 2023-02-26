import s from "./counter.module.css";

export const Counter = (props) => {
    return (
        <div className={s.counter__filters}>
            {props.counter}
        </div>
    )
}