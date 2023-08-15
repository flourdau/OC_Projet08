import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import './Skills.css'

export default function Skills({ Resume }) {

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const background = { backgroundColor:"#00DB66" }

	return (

	<div>

		<Button size="lg" variant="light" style={ background } onClick={ handleShow }>Compétences</Button>

		<Modal show={show} onHide={handleClose} backdrop="static" fullscreen={true} keyboard={true} >

			<Modal.Header closeButton>
				<Modal.Title>🔧 Compétences</Modal.Title>
			</Modal.Header>

			<Modal.Body className='skills'>
				{ Resume.skills.map((elem, i) => (
					<div key={ new Date().getTime() + i + "line"}>
						<div className='skill'>
							<h5>{ elem.name }</h5>
						{ elem.keywords.map((e, background) => (
							<span key={ new Date().getTime() + e + "skill" }>
								<img alt="skill" src={"/portfolio/img/Body/SVG/" + e + ".svg"}/>
								<p>{e}</p>
							</span>
							))
						}
						</div>
						<span><hr></hr></span>
					</div>
				))}
			</Modal.Body>

		</Modal>

	</div>)}