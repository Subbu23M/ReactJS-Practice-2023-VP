import { useEffect, useState } from 'react'
import '../style/style.css'
import { useDebounce } from './useDebounce'

export const App = () => {
    const [inputValue, setInputValue] = useState('')
    const handleUserInput = (e) => setInputValue(e.target.value)

    const debounceHookLogic = useDebounce(inputValue, 1000)

    useEffect(() => {
        console.log('debounce', inputValue);
        setInputValue('')
    }, [debounceHookLogic])

    return (
        <>
            <h1 className='text-center my-2 display-3'>
                About useDebounce() hook
            </h1>
            <>
                <div className="form-group mx-2">
                    <input 
                        type="text" 
                        className="form-control form-control-sm text-dark py-2"
                        value={inputValue}
                        onChange={handleUserInput}
                        placeholder='Search....'
                    />
                </div>
            </>
        </>
    )
}