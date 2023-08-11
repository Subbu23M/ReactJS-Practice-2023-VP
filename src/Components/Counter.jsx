import { useDispatch, useSelector } from "react-redux"
import {increment,decrement,incrementBy} from '../redux/features/counterSlice'

export const Counter = () => {
    const counterValue = useSelector((state) => {
        return state.counter.count
    })

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementBy = () => {
        dispatch(incrementBy(5))
    }

    return (
        <>
            <h2>
                Counter - {counterValue}
            </h2>

            <button onClick={handleIncrement} className="btn btn-primary mr-2">
                Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary mr-2">
                Decrement
            </button>
            <button onClick={handleIncrementBy} className="btn btn-dark">
                Increment By
            </button>
        </>
    )
}