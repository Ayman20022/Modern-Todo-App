import { useState } from "react"

export default function ToDoInput(props){
    const {handleAddTodo} = props
    const [input,setInput] = useState('')
    return (
    <div className="input-container">
        <input placeholder="Add task" value={input} onChange={(e)=>{
            setInput(e.target.value)
            
        }} />
        <button onClick={()=> {
            if(input) handleAddTodo(input)
            setInput('')
        }}>
               <i className="fa-solid fa-plus"></i> 
        </button>
    </div>
    )
}