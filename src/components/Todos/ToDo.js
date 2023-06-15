import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './ToDo.module.css'

function ToDo({ todo, deleteTodo, toggleTodo }) {

    const deleteTodoHandler = () => {
        deleteTodo(todo.id)
    }

    return(
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={deleteTodoHandler}/>
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
        </div>
    )
}

export default ToDo