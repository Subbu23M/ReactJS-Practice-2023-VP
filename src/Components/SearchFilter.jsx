import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { DisplayCard } from './DisplayCard'

export const SearchFilter = () => {
    const[searchValue,setSearchValue] = useState('')

    const handleSearchBox = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group mb-2 d-flex">
                            <input 
                                type="text"
                                className='form-control form-control-md mb-3'
                                placeholder='Search by card name...'
                                value={searchValue}
                                onChange={handleSearchBox}
                            /> <span className='mt-2'><FaSearch/></span>
                        </div>
                    </form>
                    <DisplayCard inputValue={searchValue}/>
                </div>
                
            </div>
        </div>
    )
}