import React, { useState } from 'react'
import './Switchmode.scss';

const Switchmode = ({ rounded = true }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleCheckbox = (e) => {
    setDarkMode(e.target.checked)
  }
  const handleDarkMode = () => {
    let body = document.querySelector('body')
    return darkMode ? body.classList.add('dark') : body.classList.remove('dark')
  }
  return (
    <div className="Switchmode">

      {handleDarkMode()}
      <label htmlFor="switchmode" className="switch">
        <input type="checkbox" id="switchmode" checked={darkMode} onChange={handleCheckbox} />
        <span className={`slider ${rounded ? 'rounded' : ''} `}>
          {darkMode ? <i className="far fa-sun"></i> : <i className="fas fa-moon"></i>}
        </span>

      </label>

    </div>
  )
}

export default Switchmode
