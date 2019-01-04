import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props){
    super(props);
    

  }
  componentDidMount() {
     
    let publisherarr = ["bbc-news","engadget","hacker-news"];
    // create buttons 

    const pubbuttons = publisherarr.map((source) => {
      return <button>source</button>
    })

    let publisher = "engadget"
    let url = `https://newsapi.org/v2/top-headlines?sources=${publisher}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;
    console.log(publisher)
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => console.log(error));
      
      
   
    }
 


  render(){



    return (
        <pubbuttons />
    )
  }


}

export default Pagination;