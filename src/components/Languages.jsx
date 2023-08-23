import React from 'react';
import cssImg from '../assets/cssimg.png';
//import htmlImg from '../assets/htmlImg.png';
import jsImg from '../assets/jsimg.png';
import reactLogo  from '../assets/react.svg';
import '../App.css'

const Languages = () => {
    return (
      <div className="language">
        <img className='image' src={htmlImg} alt="html" />
        <img className='image' src={cssImg} alt="css" />
        <img className='image' src={jsImg} alt="js" />
        <img className='image' src={reactLogo} alt="React" />
    </div>
    );
  };

  export default Languages;
