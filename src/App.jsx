import { useEffect, useState } from "react"
import Header from "./components/header"
import Tabs from "./components/tabs"
import ToDoList from "./components/todolist"
import ToDoInput from "./components/todoinput"

function App() {

  /* React State: Mutable data that controls a component's behavior and 
   triggers re-renders when updated.*/

  const data = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
  ]

  const [todos,setTodos] = useState(data)
  const [selectedTab,setSelectedTab] = useState('All')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos,{input:newTodo,complete:false}]
    setTodos(newTodoList)
    console.log('handleAddTodo')
    console.log(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompleteTodo(index){
    let newTodoList=todos.map((todo,todoIndex)=>{
      if(todoIndex==index) todo.complete=true
      return todo
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((todo,todoIndex)=>todoIndex!==index)
    setTodos(newTodoList) 
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos){
    localStorage.setItem('todo-app',JSON.stringify({todos:currentTodos}))
  }

  useEffect(()=>{
    let db=[]
    if(localStorage && localStorage.getItem('todo-app')){
      db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
    } else{
      return
    }
    
  },[])

  return (
    <>
      <Header todos={todos} />
      <Tabs 
      selectTab={selectedTab} 
      setSelectedTab={setSelectedTab} 
      todos={todos}/>
      <ToDoList 
      handleDeleteTodo={handleDeleteTodo} 
      handleCompleteTodo={handleCompleteTodo}
      selectedTab={selectedTab} 
      todos={todos} />
      <ToDoInput 
      handleAddTodo={handleAddTodo}
      
      />
    </>
  )
}

export default App
