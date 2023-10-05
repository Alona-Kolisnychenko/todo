import styles from './Todo.module.css';
import {RiTodoFill} from 'react-icons/ri';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={()=> deleteTodo(index)}>
        <RiTodoFill/>
        <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
export default Todo;
