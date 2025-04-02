import React from 'react'

export default function Header(props) {
  const {todos} = props
  const todosLength = todos.length

  const isTasksPlural = todosLength != 1
  return (
    <header className='text-gradient'>   
        You have {todosLength} open {isTasksPlural?'tasks':'task'}.  
    </header>
  )
}
