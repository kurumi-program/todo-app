import React from 'react'

const TodoList = ({todos, todoCompleted}) => {
  return (
   <>
    {todos.map(todo => {
      const getTodoCompleted = () => {
        todoCompleted(todo.id)
      }
      return (
        <div key={todo.id}>
          <label>
            <input
              checked={todo.completed}
              onChange={getTodoCompleted}
              type='checkbox'
            />
            {todo.name}
          </label>
        </div>
      )
    })}
   </>
  )
}

export default TodoList