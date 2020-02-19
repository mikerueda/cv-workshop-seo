import React from 'react'
import PersonalIformation from './PersonalIformation'
import image from '../assets/mike.jpg'

export default () => {
	return (
		<aside className="sidebar">
			<header>
				<span className="portrait">
					<img alt="Mike" src={image} />
				</span>
				<h1>Mike Rueda</h1>
			</header>
			<PersonalIformation />
		</aside>
	)
}
