import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import styles from './ToDoActions.module.css'
import Button from "../UI/Button"

function ToDoActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
    return(
        <>
            <Button title="Delete Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
                <RiDeleteBin2Line className={styles.ActionsIcon}/>
            </Button>
            <Button title="Refresh Todos" onClick={resetTodos}>
                <RiRefreshLine className={styles.ActionsIcon}/>
            </Button>
        </>
    )
}

export default ToDoActions