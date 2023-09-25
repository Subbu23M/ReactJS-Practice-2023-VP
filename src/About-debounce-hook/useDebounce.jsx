import { useEffect, useState } from "react"

// custom hook
export const useDebounce = (inputValue,timeOut) => {
    const[debouncedValue,setDebouncedValue] = useState(inputValue)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, timeOut)
        return () => {
            clearTimeout(timer)
        }
    }, [inputValue, timeOut])
    return debouncedValue
}