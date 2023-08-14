import Card from 'react-bootstrap/Card'

import './MyCard.css'

export default function MyCard({ id, title, cover }) {
	return (

	<a className='portfolio-item' href={ `/portfolio/product/${ id }`}>

		<Card>
			<Card.Img src={ cover } alt="Card image"/>

			<Card.ImgOverlay>
				<Card.Title className="bg-dark text-white">{ title }</Card.Title>
			</Card.ImgOverlay>
		</Card>

	</a>

)}