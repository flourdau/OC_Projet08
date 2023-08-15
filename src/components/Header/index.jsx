import TypeIt from "typeit-react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import ProfilCard from '../ProfilCard'
import Carousel from '../Carousel'
import Skills from '../Skills'
import imgProfile from '../../assets/flourdau.webp'

import './Header.css'

export default function Header({ Resume }) {

	const background = {backgroundColor:"#8997F5"}

	return (

	<header>

		<Carousel pictures={ Resume.meta.pictures }/>

		<Modal.Dialog className="modal show" backdrop={'static'} size="lg" show={"show"} id="contentTitle">
			<Modal.Header>
				<Modal.Title as="h3">{ Resume.meta.title }</Modal.Title>
			</Modal.Header>

			<Modal.Body className="myModalBody">

				<ProfilCard
					Resume={ Resume }
					imgProfile={ imgProfile } 
				/>

				<h4 className="myMessage">
					<TypeIt>{ Resume.meta.content }</TypeIt>
				</h4>
				
			</Modal.Body>

			<Modal.Footer>

				<div className='buttonsBar'>
					<Skills className="skills" Resume={ Resume } />
					<a target="_blank" rel="noreferrer" href="https://positive-link.net/curriculum">
						<Button size="lg" style={background} variant="dark">Mon CV</Button>
					</a>
				</div>

			</Modal.Footer>
		</Modal.Dialog>

	</header>)}