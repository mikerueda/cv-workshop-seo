import React from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import './styles/index.css'

const App = () => {
	console.log(window.innerWidth > 720 ? 'showing desktop version' : 'showing mobile version')
	return (
		<div className="container">
			<SideBar />
			<Content />
		</div>
	)
}

export default App
