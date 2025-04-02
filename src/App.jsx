import { useEffect, useState } from "react"
import Header from "./components/header"
import Tabs from "./components/tabs"
import ToDoList from "./components/todolist"
import ToDoInput from "./components/todoinput"

function App() {

  /* React State: Mutable data that controls a component's behavior and 
   triggers re-renders when updated.*/

  const data = [
    { id:1,input: 'Hello! Add your first todo!', complete: true },
    { id:2,input: 'Get the groceries!', complete: false },
    { id:3,input: 'Learn how to web design', complete: false },
    { id:4,input: 'Say hi to gran gran', complete: true },
  ]

  const [todos,setTodos] = useState(data)
  const [selectedTab,setSelectedTab] = useState('All')

  function handleAddTodo(newTodo){
    let lastIndex = todos.length - 1
    let lastValue = todos[lastIndex]
    let newid = lastValue?lastValue.id + 1:1
    console.log('hello',newid)
    const newTodoList = [...todos,{id:newid,input:newTodo,complete:false}]
    setTodos(newTodoList)
    console.log('handleAddTodo')
    console.log(newTodoList)
    handleSaveData(newTodoList)
  }
  function handleCompleteTodo(id){
    let newTodoList=todos.map((todo)=>{
      if(todo.id==id) todo.complete=true
      return todo
    })
    setTodos(newTodoList)
    console.log('data state : ',todos)
    handleSaveData(newTodoList)
  }
  function handleDeleteTodo(id){
    let newTodoList = todos.filter((todo)=>todo.id!==id)
    setTodos(newTodoList) 
    console.log('data state : ',todos)
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
  console.log('data state')
  console.log(todos)
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
