import { LuRefreshCcw } from 'react-icons/lu';
import { MdOutlineDelete } from 'react-icons/md';
import style from './TodosActions.module.css';
import Button from '../UI/Button';

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
  return (
    <div className={style.container}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <LuRefreshCcw />
      </Button>
      <Button title="Clear completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
        <MdOutlineDelete />
      </Button>
    </div>
  );
}
export default TodosActions;
