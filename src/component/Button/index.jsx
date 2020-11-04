import React from 'react'

function Button(props) {
    const{text,img,className,}=props
    return (
        <div>
         <button type="submit" className={className}>{text}{img}</button>
        </div>
    )
}

export default Button
