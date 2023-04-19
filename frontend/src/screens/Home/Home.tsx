import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='root-container'>
                <Link to={`/login/user-id`}>
                    <h1>Login</h1>
                </Link>
            </div>
        </>
    );
}

export default Home