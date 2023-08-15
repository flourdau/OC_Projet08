import React from 'react'
import ReactDOM from "react-dom/client"
import reportWebVitals from './reportWebVitals'

import Layout from './components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'animate.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>
)
reportWebVitals()