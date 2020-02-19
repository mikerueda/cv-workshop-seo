import React from 'react'
import SideBar from './components/SideBar'
import Content from './components/Content'
import './index.scss'

const App = () => {
	return(
    <div className='container'>
      <SideBar/>
      <Content/>
    </div>
  )
}

export default App
