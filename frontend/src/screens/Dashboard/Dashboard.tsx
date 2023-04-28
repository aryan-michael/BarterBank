import NavBar from '../../components/NavBar/NavBar';
import NavBar2 from '../../components/NavBar2/NavBar2';

const Dashboard = () => {
	return (
		<>
			<div className="root-container">
				<div className='nav-container'>
					<NavBar />
				</div>
				<div className='nav-container'>
					<NavBar2 />
				</div>
			</div>
		</>
	)
}

export default Dashboard
