import { Link } from 'react-router-dom';
function TodoList(props) {
  console.log(props);
  return (
    <div className='todolist'>
      <Link to={`/${props.todoList.id}`}>상세보기{props.todoList.id}</Link>
      <h2>Todo-{props.todoList.title}</h2>
      <div>todo-{props.todoList.content}</div>
      <div className='todolist_button'>
        <button
          color='red'
          onClick={() => {
            props.handledDelete(props.todoList.id);
          }}
        >
          삭제하기
        </button>
        <button
          color='green'
          onClick={() => {
            props.doneLisHandler(props.todoList.id);
          }}
        >
          {props.todoList.isComplete ? '취소' : '완료'}
        </button>
      </div>
    </div>
  );
}

export default TodoList;
