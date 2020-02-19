import React, { useEffect, useState } from 'react'

const fetchHeader = {
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	}
}

const ExperienceItem = ({ data }) => {
	return (
		<li className="experienceItem">
			<h4>
				<strong>{data.company} </strong>
				<span>{data.location}</span>
			</h4>
			<h5>
				<strong>{data.role} </strong>
				<span>{data.date}</span>
			</h5>
			{data.description.map((desc, index) => <p key={index}>{desc}</p>)}
		</li>
	)
}

export default () => {
	const [ experiences, setExperiences ] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/experiences.json', fetchHeader)
			setExperiences(await response.json())
		}
		fetchData()
	}, [])
	return <ul>{experiences.map((exp, index) => <ExperienceItem key={index} data={exp} />)}</ul>
}
