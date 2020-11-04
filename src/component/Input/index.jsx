import React from 'react'

function Input(props) {
    const{label,placeholder,htmlFor,type,name,id,Rechange,value,error,}=props
    return (
        <div>
            <div className="label">
            <label htmlFor={htmlFor}>{label}</label>
            </div>
            <input className="input" onChange={Rechange} value={value} placeholder={placeholder} type={type} name={name} id={id} />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Input
