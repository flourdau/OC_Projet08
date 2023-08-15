import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GetData from '../../components/GetData'
import Footer from '../../components/Footer'

/*
	PAGES: */
import Home from '../../pages/Home'
import Error from '../../pages/Error'


let Data = await GetData()
/*
	DEBUG: */
// console.log(Data)

export default function Routers() {
	
return (

	<Router>

		<main>
			<Routes>
				<Route path="/portfolio/" element={ <Home Data={Data} /> } />
				<Route path="*" element={ <Error /> } />
			</Routes>
		</main>

		<Footer Resume={ Data.Resume } />

	</Router>)}