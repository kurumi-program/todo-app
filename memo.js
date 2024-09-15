//App.js
import './App.css';
import TodoList from './components/TodoList'
import { useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([
    {name: 'todo1', id: 1, completed: false}
  ])

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClickAddTodo = () => {
    if (inputValue === '') return
    setTodos((prevTodos) => {
      return [...prevTodos, {name: inputValue, id: uuidv4(), completed: false}]
    })
    setInputValue('')
  }

  const todoCompleted = (id) => {
    const newTodos = [...todos]
    const checkedTodo = newTodos.find(todo => todo.id === id)
    checkedTodo.completed = !checkedTodo.completed
    setTodos(newTodos)
  }

  const handleClear = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }
  return (
    <>
      <h1>Todo List</h1>
      <p>残タスク：０</p>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClickAddTodo}>追加</button>
      <button onClick={handleClear}>削除</button>
      <TodoList todos={todos} todoCompleted={todoCompleted} />
    </>
  )
}

export default App;


//todoList.jsx
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
            <input 
              type='checkbox'
              checked={todo.completed}
              onChange={getTodoCompleted}
            />
            {todo.name}
          </div>
        )
      })}
    </>
  )
}

export default TodoList
