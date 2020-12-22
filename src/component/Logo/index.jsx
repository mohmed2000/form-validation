import React from 'react'
function Logo(props) {
    const{logo,className}=props
    return (
        <div>
            <img className={className} src={logo} alt="logo"/>
        </div>
    )
}

export default Logo
