import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import UniToggle from '../../components/UniToggle'

import './Nav.css'

export default function MyNav({ Resume }) {

	return (

	<Navbar expand="xxl" sticky="top" bg="light" data-bs-theme="light">

		<Navbar.Brand href="/portfolio/">
			<h1>{ Resume.basics.name }</h1>
		</Navbar.Brand>

		<Navbar.Brand >
			<div id="contentSubTitle">

				<Nav.Link href="https://positive-link.net/curriculum">
					<h2 id="subTitle" className="empty"> { Resume.basics.label }</h2>
				</Nav.Link>

				<UniToggle />

			</div>
		</Navbar.Brand>

		<Navbar.Toggle aria-controls="basic-navbar-nav"/>

		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
				<Nav.Link className="infoSocial" href={ "mailto:" + Resume.basics.email }><span className='icone'>📧 </span> - { Resume.basics.email }</Nav.Link>
				<Nav.Link className="infoSocial" href={ "tel:" + Resume.basics.phone }><span className='icone'>📱 </span> - { Resume.basics.phone }</Nav.Link>
			</Nav>
		</Navbar.Collapse>

	</Navbar>)}