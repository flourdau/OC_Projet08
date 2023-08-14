// import ReactMarkdown from 'react-markdown'

import GetData from '../../components/GetData'
import Header from '../../components/Header'
import Nav from '../../components/Nav'
// import SocialNetwork from '../../components/SocialNetwork'
// import MyCard from '../../components/MyCard'
import Footer from '../../components/Footer'

import './Home.css'

let Data = await GetData()

/*	DEBUG 
*/
console.log(Data)


export default function App() {

	return (
	<section className="homeContainer"> 

		<Header Resume={ Data.Resume } />

		<Nav Resume={ Data.Resume } />

		<Footer Resume={ Data.Resume }/>

	</section>)}