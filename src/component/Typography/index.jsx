import React from 'react'
function Typography(props) {
    const{title,subTittle}=props
    return (
        <div>
            <aside>
                <h2 className="title">{title}</h2>
                <p className="sub-title">{subTittle}</p>
            </aside>
        </div>
    )
}

export default Typography
