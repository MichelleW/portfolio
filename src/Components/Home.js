import React from 'react'
import Projects from './Projects'


const Home = () => {

  return (
    <div className="home">
      <div className="jumbotron">
        <div className="column large-6 medium-7 small-12">
          <h1 className="into">Hello,</h1>
          <div className="typography-headline">
            <span>Welcome to Michelle's web space</span>
            <div className="product-name">Design + code.
            <span></span>
            </div>
            <div className="skills-icons">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3"></i>
              <i className="fab fa-js"></i>
              <i className="fab fa-node-js"></i>
            </div>
          </div>
        </div>
      </div> 
      <Projects title="projects" /> 
    </div>
  )
}

export default Home
