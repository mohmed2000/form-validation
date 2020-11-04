import React from 'react'
import logo from '../../img/logoLarge.png'
import Logo from '../../component/Logo'
import Quote from '../../component/Quote'
import Qimg from '../../img/Qgray.png'
import Qimg2 from '../../img/toy.png'
import Form from './Form'
import "./style.css"
function index(props) {
    return (
        //hello world
        <div className="SignIn" id="SignIn">
            <div className="SignIn-left">
            <Logo logo={logo}/>
            <Quote className="textIn" Qimg={Qimg} Qimg2={Qimg2}/>
            </div>
            <div className="SignIn-right">
            <Form />
            </div>
        </div>
    )
}

export default index
