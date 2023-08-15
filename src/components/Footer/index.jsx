import SocialNetwork from '../../components/SocialNetwork'

import './Footer.css'

export default function Footer({ Resume }) {

	const myDate	= new Date()
	const year		= myDate.getFullYear()
	let created	= 2019

	if (year === created) {
		created = false
	}
	else {
		created = created + " - "
	}

	return (

		<footer className='portfolio-footer'>

			<p className='portfolio-footer-elem'>{ created } { year } | © { Resume.basics.name }</p>

			<SocialNetwork Resume={ Resume } />

		</footer>)}