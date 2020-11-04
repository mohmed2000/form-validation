import React from 'react'

function CheckBox({text,text2}) {
    return (
        <div>
            <input type="checkBox"/>
            <span htmlFor="checkbox"> {text} <span style={{color:"#00f"}} href="#3">{text2}</span></span>
        </div>
    )
}

export default CheckBox
