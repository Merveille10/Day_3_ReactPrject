import React from 'react';
import '../App.css'

function Subscribe(){
    return(
        <>
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
        </>
    )
}

export default Subscribe;