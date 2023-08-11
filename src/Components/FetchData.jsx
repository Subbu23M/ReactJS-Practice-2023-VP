import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPopulationByUrl } from "../redux/features/populationSlice"

export const FetchData = () => {
    const populationDataLength = useSelector((state) => {
        return state.population?.data.data
    })
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPopulationByUrl())
    },[dispatch])

    return(
        <>
            <h2>
                Population length - {populationDataLength?.length}
            </h2>
            {
                populationDataLength && <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Year</th>
                            <th>Population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            populationDataLength?.map((ele,i) => {
                                const{State,Year,Population} = ele
                                return (
                                    <tr key={i}>
                                        <td>
                                            {State}
                                            </td>
                                        <td>
                                            {Year}
                                        </td>
                                        <td>
                                            {Population}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}