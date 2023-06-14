import {RiTodoFill} from 'react-icons/ri'
import styles from './ToDo.module.css'

function ToDo({ todo, index, deleteTodo }) {

    return(
        <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}

export default ToDo