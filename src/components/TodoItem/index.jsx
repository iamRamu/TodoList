import { Pencil, Store } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import './index.css'
import { useContext, useState } from 'react';
import {store} from '../../App'
const TodoItem = props => {
    const {todoDetails, deleteTodo} = props
    const {id, todoName, task, description, createdTime, status} = todoDetails
    const [isEditing, setIsEditing] = useState(false)
    const {todos, setTodos} = useContext(store)
    const [editedTodo, setEditedTodo] = useState({
        todoName,
        task,
        description,
        status
    })
    let statusColor;
    switch (status) {
        case "Active":
            statusColor = "circle-green"
            break;
        case "InActive":
            statusColor = "circle-gray"
            break;
        case "InProgress":
            statusColor = "circle-blue"
            break;
        default:
            statusColor = "circle-red"
            break;
    }
    const clickedDeleteIcon = () => {
        console.log("id", id)
        if(status !== "Close"){
            alert("Todo can only be deleted when status is Close")
        }else{
            alert(`Are you sure you want to delete ${todoName} Todo?`)
            deleteTodo(id)
        }
    }
    const handleTodoName = event => {
        setEditedTodo(prev => ({...prev, todoName : event.target.value}))
    }
    const handleTodoTask = event => {
        setEditedTodo(prev => ({...prev, task : event.target.value}))
    }
    const handleTodoDescription = event => {
        setEditedTodo(prev => ({...prev, description : event.target.value}))
    }
    const handleTodoStatus = event => {
        setEditedTodo(prev => ({...prev, status : event.target.value}))
    }
    //console.log("editedTodos", editedTodo)
    //console.log("isEdited", isEditing)
    const handleEditedTodos = () => {
        const updatedTodos = todos.map(each => each.id === id ? {...each, ...editedTodo} : each)
        setTodos(updatedTodos)
        setIsEditing(false)
    }
    return(
        <tbody>
            {isEditing ? 
                <tr>
                    <td><input type='text' value={editedTodo.todoName} name='todoName' onChange={handleTodoName} className='edit-todoName-input'/></td>
                    <td><input type='text' value={editedTodo.task} name='todoName' onChange={handleTodoTask} className='edit-todoName-input'/></td>
                    <td><input type='text' value={editedTodo.description} name='todoName' onChange={handleTodoDescription} className='edit-todoName-input'/></td>
                    <td>{createdTime}</td>
                    <td>
                        <select value={editedTodo.status} name='status' onChange={handleTodoStatus} className='edit-todoName-input'>
                            <option>Active</option>
                            <option>InActive</option>
                            <option>InProgress</option>
                            <option>Close</option>
                        </select>
                    </td>
                    <td>
                        <div className='edit-buttons-container'>
                            <button onClick={handleEditedTodos} className='edit-save-button'>Save</button>
                            <button onClick={()=>setIsEditing(false)} className='edit-cancel-button'>Cancel</button>
                        </div>
                        
                    </td>
                </tr>
            :
                <tr>
                    <td className='todoItem-data1'>{todoName}</td>
                    <td className='todoItem-data1'>{task}</td>
                    <td className='todoItem-description'>{description}</td>
                    <td>{createdTime}</td>
                    <td>
                        <div className='customize-td'>
                            <div className={`${statusColor}`}/>{status}
                        </div>
                    </td>
                    <td><Pencil className='pencil-icon' onClick={()=>setIsEditing(true)}/> <Trash2 className='delete-icon' onClick={clickedDeleteIcon}/></td>
                </tr>
            }
        </tbody>
    )
}
export default TodoItem
