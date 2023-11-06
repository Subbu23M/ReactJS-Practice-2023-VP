import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import {FaEdit, FaTrash} from 'react-icons/fa'
import '../style/style.css'

// LocalStorage concept - 2
const getLocalStorage = () => {
    let list = localStorage.getItem('todosList')
    if (list) {
        return JSON.parse(localStorage.getItem('todosList'))
    } else {
        return []
    }
}

export const App = () => {
    // For user input
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    // To add todos into array
    const [todosArray, setTodosArray] = useState(getLocalStorage())
    const [editBool, setEditBool] = useState(false)

    // LocalStorage concept - 1
    useEffect(() => {
        localStorage.setItem('todosList', JSON.stringify(todosArray))
    }, [todosArray])

    const reusableCode = () => {
        if (inputValue && editBool) {
            const result = todosArray.map((ele) => {
                if (ele.id === editItemId) {
                    return {
                        ...ele,
                        todo: inputValue
                    }
                }
                return ele
            })
            // console.log(result);
            setTodosArray(result)
            setInputValue('');
            swal('Todo Edited');
        } else {
            setTodosArray([{
                id: uuidv4(),
                todo: inputValue
            }, ...todosArray])
            setInputValue('')
            swal('Todo Added');
        }
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

    const [editItemId, setEditItemId] = useState(null)

    // Logic to edit each todo
    const handleEditTodo = (id) => {
        const specificItem = todosArray.find((item) => item.id === id)
        // console.log(specificItem);
        setEditItemId(id)
        setEditBool(true)
        setInputValue(specificItem.todo)
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
                                        >{<FaTrash/>}</button> - <button 
                                            className='btn mb-2 text-danger'
                                            onClick={() => handleEditTodo(id)}
                                        >{<FaEdit/>} </button>
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