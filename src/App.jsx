import reactLogo from './assets/react.svg'
import cssImg from './assets/cssImg.png'
import htmlImg from './assets/htmlmg.png'
import jsImg from './assets/jsimg.png'
import profilImg from './assets/profilImg.jpg'
import './App.css'

function App() {
  return (
    <>
    <div className='img'>
      <img className='image' src={htmlImg} alt="html" />
      <img className='image' src={cssImg} alt="css" />
      <img className='image' src={jsImg} alt="js" />
      <img className='image' src={reactLogo} alt="React" />
    </div>


    <div>
      <h1>SUBSCIRBE</h1>
      <p>Sign up with your address email to receives news and update</p>
    </div>
    
    <div className="form">
      <div className="formest first">
        <p>Fisrt Name</p>
      </div>
      <div className="formest last">
        <p>Last Name</p>
      </div>
      <div className="formest email">
        <p>Email</p>
      </div>
    </div>

    <div className="button">Subscribe</div>

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
    </>
  )
}

export default App
