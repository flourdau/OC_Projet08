import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GetData from '../../components/GetData'
// import Header from '../../components/Header'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

// PAGES:
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Product from '../../pages/Products'


let Data = await GetData()

export default function Routers() {
	
	/*	DEBUG 
	*/
	console.log(Data)

return (
	<Router>

		{/* <Header Resume={ Data.Resume } /> */}
		<Nav Resume={ Data.Resume } />
		<main>
			<Routes>
				<Route path="/portfolio/" element={ <Home Data={Data} /> } />
				<Route path='/portfolio/product/:id' element={ <Product Data={Data}/> } />
				<Route path="/portfolio/error" element={ <Error Data={Data} /> } />
				<Route path="*" element={ <Error /> } />
			</Routes>
		</main>
		<Footer Resume={ Data.Resume }/>
	</Router>

)}