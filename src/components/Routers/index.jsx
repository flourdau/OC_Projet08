import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// PAGES:
import Home from '../../pages/Home'
// import Error from '../../pages/Error'
// import Product from '../../pages/Products'

export default function Routers() {

return (

	<Router>
		<main>
			<Routes>
				<Route path="/flourdau/" element={ <Home /> } />
				{/* <Route path='/flourdau/product/:id' element={ <Product /> } />
				<Route path="/flourdau/error" element={ <Error /> } /> */}
				<Route path="*" element={ <Error /> } />
			</Routes>
		</main>
	</Router>

)}