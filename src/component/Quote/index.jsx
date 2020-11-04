import React from 'react'
function Quote(props) {
    const{Qimg,Qimg2,className}=props
    return (
        <div>
            <div className="Qimg">
                <img src={Qimg} alt="Quote"/>
            </div>
            <div className={className}>
                <p>I always observe the people who pass by when I ride an escalator.
                    I'll never see most of them again,
                    so I imagine a lot of things about their lives...
                    about the day ahead of them.<br/>
                    Hideo Kojima</p>
                <div>
                    <img src={Qimg2} alt="Qimg2"/>
                </div>
            </div>
        </div>
    )
}

export default Quote
