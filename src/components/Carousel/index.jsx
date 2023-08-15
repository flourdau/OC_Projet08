import BSCarousel from 'react-bootstrap/Carousel'
import propTypes from 'prop-types'

import './Carousel.css'

export default function Carousel({ pictures }) {
	return (

	<BSCarousel className="myCarousel" controls={false} indicators={false} slide={true}>

		{ pictures.map((elem, i) => (
		<BSCarousel.Item  key={ new Date().getTime() + i + "item" }>
			<img src={pictures[i]} alt="slide"/>
		</BSCarousel.Item>
		))}

	</BSCarousel>)}

Carousel.propTypes = { pictures: propTypes.arrayOf(propTypes.string) }