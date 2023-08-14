import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import GetData from '../../components/GetData'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import './Products.css'

let  Data = await GetData()

export default function Products() {

	const navigate = useNavigate()
	const { id } = useParams()
	const [ product ] = Data.Resume.projects.filter(data => data.id === id)

	useEffect(() => {
		if (product === undefined) {
			navigate('/error')
		}
	})

	if (typeof product === 'object') {
		return (
		<section className='productContainer'>

			<div className="blocInfo">
				<div className="blocTitle">
					<h1 id='upPage'>{ product.name }</h1>
					<h2>{ product.type }</h2>
				</div>
				<img  className="coverProduct" src={ product.cover } alt="cover"/>
				<div className="blocCollapse">
					<div className='Description'><Collapse key={ 'blocCollapse1' } title={ `Description` } content={ product.description }/></div>
					<div className='Competences'><Collapse key={ 'blocCollapse2' } title={ `Compétences évaluées` } content={ product.highlights }/></div>
					<ul className='blocTag'>
						{ product.keywords.map(tag => 
						<li key={ new Date().getTime() + tag } >
							<img alt="compétence" src={ "/portfolio/img/Body/SVG/" + tag + ".svg"}/>
							<Tag key={ `${ product.id }-${ tag }-'tags`} tag={ tag } id={ product.id } />
						</li>
						) }
					</ul>
				</div>
				<div className='blocLinks'>
					<a href={ product.url}>Production</a>
					<a href={ product.depot}><img alt="" src="/flourdau/img/Body/SVG/GitHubAPI.svg"/>GitHub</a>
				</div>
			</div>

			<div className='blocImg, grid-portraits'>
			{ product.pictures.map((elem) => (
				<a key={ new Date().getTime() + elem } href={ elem } className="lien-conteneur-photo">
					<img src={ elem } alt="apercu"/>
					<div className="photo-hover">Voir la photo</div>
				</a>
			))}
			</div>

	</section>)}}