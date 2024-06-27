import {useFormik} from 'formik'
import { useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {X} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { store } from '../../App'
import './index.css'

const AddTodoForm = () => {
    const {setTodos} = useContext(store)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues : {
            id : uuidv4(),
            todoName : "",
            task : "",
            description : "",
            createdTime : new Date().toLocaleString(),
            status : "Active"
        },
        onSubmit : values => {
            console.log("values", values)
            //console.log("setTodos", setTodos)
            setTodos(prev => [values, ...prev])
            formik.resetForm()
            navigate("/")
        }
    })
    const changeFormActivity = () => {
        navigate("/")
    }
    return (
        <div className='form-container'>
            <X className='cross-icon' onClick={changeFormActivity}/>
            <form onSubmit={formik.handleSubmit} autoComplete='off' className='form'>
                <div className='popup-container'>
                    <label htmlFor='todoName' className='todoName'>TodoName</label>
                    <input type='text' name='todoName' id="todoName" className='form-input' {...formik.getFieldProps("todoName")} required/>

                    <label htmlFor='task' className='todoName'>Task</label>
                    <input type='text' name='task' id="task" className='form-input' {...formik.getFieldProps("task")} required/>

                    <label htmlFor='description' className='todoName'>Description</label>
                    <input type='text' name='description' id="description" className='form-input' {...formik.getFieldProps("description")} required/>

                    <label htmlFor='dropDown' className='status-dropdown'>Select Status</label>
                    <select className='dropDown' name='status' id='dropDown' {...formik.getFieldProps("status")} required>
                        <option>Active</option>
                        <option>InActive</option>
                        <option>InProgress</option>
                        <option>Close</option>
                    </select>
                </div>
                <div className='button-container'>
                    <button type='submit' className='add-button'>Add</button>
                </div>
            </form>
        </div>
        
    )
}
export default AddTodoForm