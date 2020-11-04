import React from 'react'
function Logo(props) {
    const{logo}=props
    return (
        <div>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo
