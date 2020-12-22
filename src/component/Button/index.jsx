import React from 'react'
function Button(props) {
    const{text,img,className,onClick}=props
    return (
        <div> 
         <button  onClick={onClick} type="submit" className={className}>{text}{img}</button>
        </div>
    )
}

export default Button
