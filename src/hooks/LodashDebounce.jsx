import _ from "lodash"
import { useCallback, useState } from "react"

export const LodashDebounce = () => {
    const[debouncedState,setDebouncedState] = useState('')

    const debounceFunc = (value) => handleDebounce(value)

    const handleDebounce = useCallback(
        _.debounce((_searchValue) => {
            setDebouncedState(_searchValue)
        },200),
        []
    )
    return [debouncedState,debounceFunc]
}