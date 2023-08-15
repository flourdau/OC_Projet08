import ReactMarkdown from 'react-markdown'

import Header from '../../components/Header'
import Nav from '../../components/Nav'
import SocialNetwork from '../../components/SocialNetwork'
import MyCard from '../../components/MyCard'

import './Home.css'

export default function Home({ Data }) {

	return (
	<section className="homeContainer"> 

		<Header Resume={Data.Resume} />

		<Nav Resume={ Data.Resume } />

		<section className='blocCol'>

			<SocialNetwork Resume={ Data.Resume } />

			<a href='#Projets'>Mes projets</a>

			<div id="blocMain">

				<div id="Presentation">
					{ Data.arrayReadME.map((githubReadMeSection, i) => (
					<div key={ new Date().getTime() + i + "presentation"} id={ "collapse_" + i } >
						<h3>{ githubReadMeSection[0].trim().substr(3) }</h3>
						<div><ReactMarkdown children={ githubReadMeSection[1] } /></div>
					</div>
					))}
				</div>

				<div id="Formation">
					<h3>🎓 Formation</h3>
					<ul className='FormationList'>
					{ Data.Resume.education.map(( { institution, url, area }, id ) => (
						<li className={`${ institution }_${ id }`} key={`${ id }`}>
							<a href={ url }>
								<img alt={ "logo " + institution } src={ "/portfolio/img/Body/SVG/" + institution + ".svg" } />
							</a>
						</li>
					))}
					</ul>
				</div>

				<div id="Projets">
					<h3>📌 Projects</h3>
					<ul className='projectsList'>
					{ Data.Resume.projects.map(({ id, name, cover }, i) => (
						<li key={`${ id }`}>
							<MyCard
								id={ i }
								Data={ Data }
							/>
						</li>
					))}
					</ul>
				</div>

			</div>
		</section>

	</section>)}