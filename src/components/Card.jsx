import React from 'react'
import '../App.css'
import profilImg from '../assets/profilImg.jpg'

const Card = () =>{
    return(
            <div className="card">
                <img className="user-img" src={profilImg} alt="profil" />
                <h3>ASABENEH YETAYEH</h3>
                <p className='user-state'>Senior Developer, Finland</p>
                <h3>Skills</h3>

                <div className="skills">
                    <div className="elt">HTML</div>
                    <div className="elt">Css</div>
                    <div className="elt">Sass</div>
                    <div className="elt">Js</div>
                    <div className="elt">React</div>
                    <div className="elt">Redux</div>
                    <div className="elt">Node</div>
                    <div className="elt">MongoDB</div>
                    <div className="elt">Python</div>
                    <div className="elt">Flask</div>
                    <div className="elt">Django</div>
                    <div className="elt">Numpy</div>
                    <div className="elt">Panda</div>
                    <div className="elt">MySql</div>
                    <div className="elt">Git</div>
                </div>

                <p className='user-state'>Joined on Aug 30, 2020</p>
             </div>
    )
}

export default Card;