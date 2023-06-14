import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <>
            <nav className="liNav">
                <ul>
                    <li>
                        <Link 
                            to='/your' 
                        >
                            Your 
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to='/all' 
                        >
                            All 
                        </Link>
                    </li>
                    
                    <li>
                        <Link 
                            to='/blocked' 
                        >
                            Blocked 
                        </Link>
                    </li>
                    <hr className="hO"/>
                </ul>
            </nav>
        </>
    )
}