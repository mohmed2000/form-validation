import React from 'react'
import google from '../../img/google.png'
import twitter from '../../img/twitter.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import "../../pages/SignIn/style.css"

function Icon() {
    return (
        <div className="icons">
            <div className="icon googleImg">
                <img src={google} alt="google"/>
            </div>
            <div className="icon twitterImg">
                <img src={twitter} alt="twitter"/>
            </div>
            <div className="icon linkedinImg">
                <img src={linkedin} alt="linkedin"/>
            </div>
            <div className="icon githubImg">
                <img src={github} alt="github"/>
            </div>
        </div>
    )
}

export default Icon
