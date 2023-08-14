import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'

import './MyCard.css'

export default function MyCard({ id, title, cover }) {
	return (

	// <Link className='portfolio-item' to={ `./product/${ id }`}>
	<a className='portfolio-item' href={ `./product/${ id }`}>

		<Card>
			<Card.Img src={ cover } alt="Card image"/>

			<Card.ImgOverlay>
				<Card.Title className="bg-dark text-white">{ title }</Card.Title>
			</Card.ImgOverlay>
		</Card>

	</a>

)}