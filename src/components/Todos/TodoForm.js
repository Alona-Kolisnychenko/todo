import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

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
        <Button type="submit" disabled={!text} title="Submit">Submit</Button>
      </form>
    </div>
  );
}
export default TodoForm;
