import { useState } from "react"
import '../style/style.css'
import { LodashDebounce } from "../hooks/lodashDebounce"

export const App = () => {
    const[inputValue,setInputValue] = useState('')

    const[debouncedState,debounceFunc] = LodashDebounce(inputValue)

    const handleChange = (e) => {
        const eventValue = e.target.value; 
        setInputValue(eventValue)
        debounceFunc(eventValue)
    }
    return (
        <>
            <form>
                <div className="form-group">
                    <input 
                        type="text"  
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <p>
                Search value : {inputValue}
            </p>
            <p>
                Debounced Value : {debouncedState}
            </p>
        </>
    )
}