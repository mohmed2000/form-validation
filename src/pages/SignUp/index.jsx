import React from 'react'
import logo from '../../img/logo.png'
import Logo from '../../component/Logo'
import Quote from '../../component/Quote'
import Qimg from '../../img/Q.png'
import Qimg2 from '../../img/arrow.png'
import hand from '../../img/hand.png'
import Back from '../../component/Back'
import Form from './Form'
import "./style.css";
function SignUp(props) {
    return (
        <div className="SignUp" id="SignUp">
            <div className="left">
                <img className="hand" src={hand} alt="" />
                <div className="content">
                <div className="Wlogo"><Logo className="logoUp" logo={logo}/></div>
                <Quote className="textUp" Qimg={Qimg} Qimg2={Qimg2}/>
                </div>
            </div>
            <div className="right">
                <div className="back">
                </div>
            <Form/>
            </div>

        </div>
    )
}

export default SignUp
