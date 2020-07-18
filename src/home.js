import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import axios from 'axios'
import './styles/index.css'

const fetchHeader = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'secret-key': '$2b$10$5nuQcJ7ZfFm7ND3hL59pnOtCwE8UyDerAhTOcB86u2V.zqnX2QKLS'
	}
}

const App = () => {
	const [ experiences, setExperiences ] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://api.jsonbin.io/b/5f124cc6c1edc4661759241f', fetchHeader)
			setExperiences(response.data)
		}
		fetchData()
	}, [])

	return (
		<div className="container">
			<SideBar />
			<Content experiences={experiences}/>
		</div>
	)
}

export default App
