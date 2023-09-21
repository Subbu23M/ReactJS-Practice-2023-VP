import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import {FaTrash} from 'react-icons/fa'
import '../style/style.css'

export const App = () => {
    // For user input
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    // To add todos into array
    const [todosArray, setTodosArray] = useState([])

    const reusableCode = () => {
        setTodosArray([{
            id: uuidv4(),
            todo: inputValue
        }, ...todosArray])
        setInputValue('')
        swal('Todo Added');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        reusableCode()
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            reusableCode()
        }
    }

    // Logic to remove each todo
    const handleDeleteTodo = (id) => {
        const filterData = todosArray.filter((removeTodo) => {
            if (removeTodo.id !== id) {
                return true
            }
        })
        setTodosArray(filterData)
    }

    return (
        <>
            <h1 className="text-center my-2 display-4">
                Simple Todo App
            </h1>

            <form>
                <div className="form-group px-2">
                    <input 
                        type="text"
                        className="form-control form-control-sm text-muted"
                        placeholder="Enter todos...."
                        value={inputValue}
                        onChange={handleInput}
                        onKeyDown={handleEnter}
                    />
                </div>
                <button 
                    className='btn btn-primary mx-2'
                    type='submit'
                    onClick={handleSubmit}
                >
                    Add Todo 
                </button>
            </form>

            <h2 className='mx-2 my-2'>
                Todos List - <span> {todosArray.length > 0 && todosArray.length} </span>
            </h2>

            <div className="row">
            {
                todosArray.length > 0 && 
                    todosArray.map((todos) => {
                        const{todo,id} = todos
                        return (
                            <div className="col-lg-8 mx-3 my-2"  key={id}>
                                <div className="card p-2">
                                    <h3>
                                        {todo} - <button 
                                            className='btn mb-2 text-danger'
                                            onClick={() => handleDeleteTodo(id)}
                                        >{<FaTrash/>}</button>
                                    </h3>
                                </div>
                            </div>
                        )
                    })
            }
            </div>
        </>
    )
}