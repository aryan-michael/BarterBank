import NavBar from '../../components/NavBar/NavBar';
import './Dashboard.scss';

const Dashboard = () => {
	return (
		<>
			<div className="root-container">
				<div className='nav-container'>
					<NavBar />
				</div>
				<div className='bottom-buttons'>
					<a href='' className='link'> <span className='spans'>Best Sellers</span></a>
					<a href='' className='link'> <span className='spans'>Deals</span></a>
					<a href='' className='link'> <span className='spans'>Customer Service</span></a>
					<a href='' className='link'> <span className='spans'>Coupons</span></a>
				</div>
				<div className=''>

				</div>
			</div>
		</>
	)
}

export default Dashboard
