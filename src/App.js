import './App.css';
import TodoList from './components/TodoList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([
    {name: 'todo1', id: 1, completed: false},
  ])
  
  const [inputValue, setInputValue] = useState('')
  const getInputValue = (e) => {
    setInputValue(e.target.value)
  }
  const handleAddTodo = () => {
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
      <p>残タスク：{todos.filter(todo => !todo.completed).length}</p>
      <input
        value={inputValue}
        onChange={getInputValue}
      />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear}>削除</button>
      <TodoList todos={todos} todoCompleted={todoCompleted} />
    </>
  )
}

export default App;
