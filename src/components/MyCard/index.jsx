import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'

import './MyCard.css'

export default function MyCard({ id, Data }) {

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		
		<Card key={id+"ModalProjet"}>

			<Card.Img src={ Data.Resume.projects[id].cover } alt="Card image"/>

			<Card.ImgOverlay  onClick={handleShow}>
				<Card.Title className="bg-dark text-white">{ Data.Resume.projects[id].name }</Card.Title>
			</Card.ImgOverlay>

			<Modal show={ show } onHide={handleClose} size="xl">

				<Modal.Header closeButton>
					<Modal.Title onClick={handleClose} as="h3">{ Data.Resume.projects[id].name  }</Modal.Title>
				</Modal.Header>

				<Modal.Body className="myModalBody">

				<div className="blocInfo">

					<img  className="coverProduct" src={ Data.Resume.projects[id].cover } alt="cover"/>

					<div className="blocTitle">
						<h4>{ Data.Resume.projects[id].type }</h4>
					</div>

					<div className="blocCollapse">
						
						<div className='Description'><Collapse key={ 'blocCollapse1' } title={ `Description` } content={ Data.Resume.projects[id].description }/></div>

						<ul className='blocTag'>
							{ Data.Resume.projects[id].keywords.map(tag => 
							<li key={ new Date().getTime() + tag } >
								<img alt="compétence" src={ "/portfolio/img/Body/SVG/" + tag + ".svg"}/>
								<Tag key={ `${ Data.Resume.projects[id].id }-${ tag }-'tags`} tag={ tag } id={ Data.Resume.projects[id].id + "tag"} />
							</li>
							) }
						</ul>

						<div className='Competences'><Collapse key={ 'blocCollapse2' } title={ `Compétences évaluées` } content={ Data.Resume.projects[id].highlights }/></div>

					</div>

					<div className='blocLinks'>
						<a target="_blank" rel="noreferrer" href={ Data.Resume.projects[id].url}>
							<span>Production</span>
						</a>
						<a target="_blank" rel="noreferrer" href={ Data.Resume.projects[id].depot}>
							<img alt="" src="/portfolio/img/Body/SVG/GitHubAPI.svg"/>
							<span>GitHub</span>
						</a>
					</div>
				</div>

				<div className='blocImg, grid-portraits'>
				{ Data.Resume.projects[id].pictures.map((elem) => (
					<a key={ new Date().getTime() + elem } href={ elem } className="lien-conteneur-photo">
						<img src={ elem } alt="apercu"/>
						<div className="photo-hover">Voir la photo</div>
					</a>
				))}
				</div>

				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>Close</Button>
				</Modal.Footer>

			</Modal>

		</Card>)}