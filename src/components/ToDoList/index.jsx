import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Header } from "../Header/Header";
import { BarLike } from "../Bar/BarLike/BarLike";

export const TodoList = () => {
    const todos = useSelector(todosSelector);

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <>
                    <Header key={todo.id} todo={todo} />
                    <BarLike key={todo.id} todo={todo} />
                </>
            ))}
        </ul>
    );
};