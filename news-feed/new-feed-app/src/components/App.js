import React, { Component } from 'react';
import './App.css';
import News from './News/News';
// import Pagination from './Pagination/Pagination';
import Sidenews from "./News/Sidenews";
// import TeslaForm from './teslaForm/teslaForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news1: { 
        type: 'top-headlines',
        query: 'sources=bbc-news' 
      },
      techcrunch: { 
        type:'top-headlines',
        query:'sources=techcrunch'
      },
      news3:{
        type:'everything',
        query:'q=apple&from=2018-11-30&to=2018-11-30&sortBy=popularity'
      }
      
    };
 
   
  }
 

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="brand-logo center">My Feed</a>
            </div>
          </nav>
        </div>
      {/* <TeslaForm /> */}
        <div className="row">
          <div className="col s12">
            <News news={this.state.techcrunch} />
            <News news={this.state.news1} />
          </div>
          <div className="col s4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div> 
        
      </div>
    );
  }
}

export default App;
