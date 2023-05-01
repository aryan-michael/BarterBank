import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='root-container'>
                <Link to={`/login/user-id`}>
                    <h1>Go to Login Page</h1>
                </Link>
                <div />
                <Link to={`/dashboard/buyer`}>
                    <h1>Go to Dashboard</h1>
                </Link>
                <Link to={`/dashboard/seller`}>
                    <h1>Go to Dashboard</h1>
                </Link>
            </div>
        </>
    );
}

export default Home
