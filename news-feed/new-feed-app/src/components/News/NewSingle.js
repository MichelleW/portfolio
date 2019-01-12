import React from 'react';

const NewSingle = ({ item }) => (
 
    <div className="col s4">
    <a href={item.url}><div className="card">
        <div className="card-image">
          <img src={item.urlToImage} />
          <span className="card-title">{item.source.name} </span>
        </div>
        <div className="card-content">
          <p>{item.content}</p>
        </div>
      </div>
      </a>
    </div>
   
 
  
)

export default NewSingle;