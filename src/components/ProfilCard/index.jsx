import './ProfilCard.css'

export default function ProfilCard({Resume, imgProfile}) {	

	const background = {
		background: `url("${imgProfile}")`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '75%',
		backgroundPosition: 'right'
	}

	return (

	<div>
		<address className="myAddress" style={ background }></address>
	</div>

)}