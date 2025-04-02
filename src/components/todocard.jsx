

export default function ToDoCard(props) {

  const {todo,handleDeleteTodo,handleCompleteTodo} = props
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button 
        disabled={todo.complete} 
        onClick={()=>{
          console.log('handlecomplete passed id',todo.id)
          handleCompleteTodo(todo.id)
        }}>
          <h6>Done</h6>
        </button>
        <button onClick={()=>{
          console.log('handledelete passed id',todo.id)
          handleDeleteTodo(todo.id)
        }}><h6>Delete</h6></button>
      </div>

    </div>

  )
}
