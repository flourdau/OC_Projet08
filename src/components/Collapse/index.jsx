import propTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'

import './Collapse.css'
export default function Collapse({ index, title, content }) {

	return (

	<Accordion className="empty" id={ "collapse_" + index } defaultActiveKey={ index } flush>
		<Accordion.Item eventKey={ index }>
			<Accordion.Header as="h3">{ title }</Accordion.Header>
			{ !Array.isArray(content)
				?( <Accordion.Body>{ content }</Accordion.Body> )
				:( <Accordion.Body>{ content.map((item, i) => (<p key={ i }>{ item }</p>))}</Accordion.Body> )
			}		
		</Accordion.Item>
	</Accordion>
	
)}

Collapse.propTypes = {
	title: propTypes.string,
	content: propTypes.oneOfType([propTypes.arrayOf(propTypes.string), propTypes.string])}

Collapse.defaultProps = {
	title: 'Title',
	content: "Content"}