import ToDo from "./ToDo"
import styles from "./ToDoList.module.css"

function ToDoList({ todos, deleteTodo, toggleTodo }) {
    return(
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) => {return(<ToDo key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo}/>)})}
        </div>
    )
}

export default ToDoList