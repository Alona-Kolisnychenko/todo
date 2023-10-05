import styles from './Todo.module.css';
import {RiTodoFill} from 'react-icons/ri';
import {MdOutlineDelete, MdDone} from 'react-icons/md';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted? styles.completedTodo : ''}`}>
        <RiTodoFill/>
        <div className={styles.todoText}>{todo.text}</div>
        <MdOutlineDelete className={styles.deleteIcon} onClick={()=> deleteTodo(todo.id)}/>
        <MdDone className={styles.checkIcon} onClick={()=>toggleTodo(todo.id)}/>
    </div>
  )
}
export default Todo;
