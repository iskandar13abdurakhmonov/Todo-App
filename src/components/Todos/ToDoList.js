import ToDo from "./ToDo"
import styles from "./ToDoList.module.css"

function ToDoList({ todos, deleteTodo }) {
    return(
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo, index) => {return(<ToDo key={index} deleteTodo={deleteTodo} index={index} todo={todo}/>)})}
        </div>
    )
}

export default ToDoList