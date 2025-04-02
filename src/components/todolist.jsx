import ToDoCard from "./todocard"


export default function ToDoList(props){
    
    const {todos,selectedTab,handleCompleteTodo,handleDeleteTodo} = props
    const filterTodoList = (selectedTab==='All')?todos:(selectedTab==='Completed')?todos.filter(val=>val.complete):todos.filter(val=>!val.complete)
    return <>
    {
        filterTodoList.map((todo,todoindex)=>{
            return (
                <ToDoCard key={todoindex}
                 todo={todo}
                 handleDeleteTodo={handleDeleteTodo}
                 handleCompleteTodo={handleCompleteTodo}
                 />
                 
            )
        })
        
    }
          
    </>
}
