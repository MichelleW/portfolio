import React from 'react'
import { Link } from "react-router-dom";
import Switchmode from '../SwitchMode/Switchmode';

import './Navigation.scss';
import '@fortawesome/fontawesome-free';

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/" className="logo">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        Code/
           <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </Link> 
        <Link to="/blog">/ Blog</Link>
        <a ><Switchmode /></a>
      </nav>
    </div>
  )
}

export default Navigation
