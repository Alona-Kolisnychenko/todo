import { useState } from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.toDoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TodoForm;
