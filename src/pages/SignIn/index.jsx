import React from 'react'
import logo from '../../img/logoLarge.png'
import Logo from '../../component/Logo'
// import Quote from '../../component/Quote'
import Qimg from '../../img/Qgray.png'
import Qimg2 from '../../img/toy.png'
import Form from './Form'
import {useFetch} from '../../component/fetch'

import "./style.css"
function Index(props) {
    const{handleLogeIn}=props

    const [giphy] = useFetch("https://api.giphy.com/v1/gifs/random?api_key=j7zz2sAHXNWYdGjBCxCHn3H6MjHGVnoT&tag=&rating=g")


    return (
        //hello world
        <div className="SignIn" id="SignIn">
            <div className="SignIn-left">
            <Logo className="logoIn" logo={logo}/>
            {/* <Quote className="textIn" Qimg={Qimg} Qimg2={Qimg2}/> */}
            <div >
            {giphy.State && <div><h3>gif by custom hook</h3><img className="gif" src={giphy.State.data.images.original.url} alt="vv"/></div>}
            </div>

            </div>
            <div className="SignIn-right">
            <Form handleLogeIn={handleLogeIn}/>
            </div>
        </div>
    )
}

export default Index
