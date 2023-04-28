import ItemCard from '../../components/ItemCard/ItemCard';
import NavBar from '../../components/NavBar/NavBar';
import NavBar2 from '../../components/NavBar2/NavBar2';
import pipes from '../../images/pipes.jpeg'
import '../Dashboard/Dashboard.scss'

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
				<div className='card-container'>
					<ItemCard
						image={pipes}
						label1='Favda'
						label2='Favda ka Description'
						label3='5000'
					/>
					<ItemCard
						image={pipes}
						label1='Favda'
						label2='Favda ka Description'
						label3='5000'
					/>
					<ItemCard
						image={pipes}
						label1='Favda'
						label2='Favda ka Description'
						label3='5000'
					/>
					<ItemCard
						image={pipes}
						label1='Favda'
						label2='Favda ka Description'
						label3='5000'
					/>
					<ItemCard
						image={pipes}
						label1='Favda'
						label2='Favda ka Description'
						label3='5000'
					/>
				</div>
			</div>
		</>
	)
}

export default Dashboard
