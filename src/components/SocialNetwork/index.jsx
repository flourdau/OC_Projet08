import './SocialNetwork.css'

export default function SocialNetwork({ Resume }) {
	return (

	<ul className='social'>

	{ Resume.basics.profiles.map(({network, url }) => (
		<li key={ new Date().getTime() + url }>
			<a target="_blank" rel="noreferrer" href={ url }>
				<img src={"/portfolio/img/Body/SVG/" + network + ".svg"} alt={ network } />
			</a>
		</li>
	))}

	</ul>)}