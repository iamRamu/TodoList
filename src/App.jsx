import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css"
import TodoList from "./components/TodoList"
import AddTodoForm from './components/AddTodoForm'
import { createContext, useState,  } from 'react'
export const store = createContext([])
const App = () => {
  const [todos, setTodos] = useState([])
  return (
      <store.Provider value={{todos, setTodos}}>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<TodoList/>}/>
                <Route path='/addtodo' element={<AddTodoForm/>}/>
            </Routes>
          </BrowserRouter>
      </store.Provider>
  )
}
export default App