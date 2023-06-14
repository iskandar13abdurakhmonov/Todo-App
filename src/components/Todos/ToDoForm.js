import styles from './ToDoForm.module.css'
import { useState } from 'react'

function ToDoForm({ addTodo }) {

    const [text, setText] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return(
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
            <input 
                type="text" 
                placeholder="Enter new todo" 
                value={text} 
                onChange={(e) => setText(e.target.value)} />
            <button 
                type="submit" 
                value="todoBtn">Submit</button>
        </form>
        </div>
    )
}

export default ToDoForm