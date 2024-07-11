import React from 'react'
import ME from '../images/ME.jpg'

export default function Headshot() {
    return(
        <div className = 'headshot--div'>
            <img className = 'headshot--photo' src={ME} alt = 'Me!'/>
        </div>
    )
}
