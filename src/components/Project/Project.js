import React from 'react'
import Projectcard from '../Projectcard/Projectcard'
import './project.css'
const Project = () => {
  return (
    <div className='project_Img'>
        <div className='heading'>
            <h1>Project</h1>
            <p>Some of my recent projects</p>
            <Projectcard/>
        </div>
    </div>
  )
}

export default Project
