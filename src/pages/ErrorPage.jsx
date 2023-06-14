import {Link} from 'react-router-dom';

export const ErrorPage = () => {
    return(
        <section className='m-2'>
            <h2>
                404 
            </h2>
            <p>
                Page Not Found 
            </p>
            <Link
                to='/'
                className='btn'
            >
                <button className='btn btn-primary'>
                    Back To Home
                </button>
            </Link>
        </section>
    )
}