import { useContext, useState } from 'react'
import { ArrowDownUp } from 'lucide-react';
import TodoItem from '../TodoItem'
import { useNavigate } from 'react-router-dom'
import { store } from '../../App'
import './index.css'

const TodoList = () => {
    const {todos, setTodos} = useContext(store)
    const [serchInput, setSearchInput] = useState("")
    const [isAscSorting, setIsAscSorting] = useState(true)
    const navigate = useNavigate()
    console.log("todos", todos)
    const filteredResults = todos.filter(eachTodo => eachTodo.todoName.toLowerCase().includes(serchInput.toLocaleLowerCase()))
    const deleteTodo = id => {
        const modifiedTodos = filteredResults.filter(eachTodoItem => eachTodoItem.id !== id)
        setTodos(modifiedTodos)
    }
    const soringTodoName = () => {
        if(isAscSorting){
            const ascSortTodos = [...filteredResults].sort((a,b) => a.todoName.toLowerCase() < b.todoName.toLowerCase() ? -1:1)
            setTodos(ascSortTodos)
            setIsAscSorting(!isAscSorting)
        }else{
            const desSortTodos = [...filteredResults].sort((a,b) => a.todoName.toLowerCase() < b.todoName.toLowerCase() ? 1:-1)
            setTodos(desSortTodos)
            setIsAscSorting(!isAscSorting)
        }
    }
    const soringTodoTask = () =>{
        if(isAscSorting){
            const ascSortTodos = [...filteredResults].sort((a,b) => a.task.toLowerCase() < b.task.toLowerCase() ? -1:1)
            setTodos(ascSortTodos)
            setIsAscSorting(!isAscSorting)
        }else{
            const desSortTodos = [...filteredResults].sort((a,b) => a.task.toLowerCase() < b.task.toLowerCase() ? 1:-1)
            setTodos(desSortTodos)
            setIsAscSorting(!isAscSorting)
        }
    }
    const soringTodoDescription = () => {
        if(isAscSorting){
            const ascSortTodos = [...filteredResults].sort((a,b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1:1)
            setTodos(ascSortTodos)
            setIsAscSorting(!isAscSorting)
        }else{
            const desSortTodos = [...filteredResults].sort((a,b) => a.description.toLowerCase() < b.description.toLowerCase() ? 1:-1)
            setTodos(desSortTodos)
            setIsAscSorting(!isAscSorting)
        }
    }
    const soringTodoTime = () => {
        if(isAscSorting){
            const ascSortTodos = [...filteredResults].sort((a,b) => a.createdTime.toLowerCase() < b.createdTime.toLowerCase() ? -1:1)
            setTodos(ascSortTodos)
            setIsAscSorting(!isAscSorting)
        }else{
            const desSortTodos = [...filteredResults].sort((a,b) => a.createdTime.toLowerCase() < b.createdTime.toLowerCase() ? 1:-1)
            setTodos(desSortTodos)
            setIsAscSorting(!isAscSorting)
        }
    }
    const soringTodoStatus = () => {
        if(isAscSorting){
            const ascSortTodos = [...filteredResults].sort((a,b) => a.status.toLowerCase() < b.status.toLowerCase() ? -1:1)
            setTodos(ascSortTodos)
            setIsAscSorting(!isAscSorting)
        }else{
            const desSortTodos = [...filteredResults].sort((a,b) => a.status.toLowerCase() < b.status.toLowerCase() ? 1:-1)
            setTodos(desSortTodos)
            setIsAscSorting(!isAscSorting)
        }
    }
    return (
        <div className="todolist-bg-container">
            <div className="search-and-addTodo-container">
                <input type="text" placeholder='Search Todo' className='search-input' onChange={e => setSearchInput(e.target.value)}/>
                <button type="button" className='addTodo-button' onClick={() => navigate("/addtodo") }>Add Todo</button>
            </div>

            <ul className='todoList-container'>
                <table>
                    <thead>
                        <tr>
                            <th className='table-name'>Todo Name <ArrowDownUp className='sorting-icon' onClick={soringTodoName}/></th>
                            <th className='table-name'>Task <ArrowDownUp className='sorting-icon' onClick={soringTodoTask}/></th>
                            <th className='table-description'>Description <ArrowDownUp className='sorting-icon' onClick={soringTodoDescription}/></th>
                            <th className='created-time'>Created Time <ArrowDownUp className='sorting-icon' onClick={soringTodoTime}/></th>
                            <th className='table-name'>Status <ArrowDownUp className='sorting-icon' onClick={soringTodoStatus}/></th>
                            <th className='table-name'>Options</th>
                        </tr>
                    </thead>
                    {filteredResults.map(each =>
                        <TodoItem key={each.id} todoDetails={each} deleteTodo={deleteTodo}/>
                    )}
                </table>

                {filteredResults.length === 0 && <p className='no-items-available'>No Items Available</p>}

            </ul>
        </div>
        
    )
}
export default TodoList