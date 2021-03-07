import React from "react"
import "./Skills.css"

const ProgressBar= (props) =>
(
    <div className="containerStyles">
        
        <div className="fillerStyles" style={{width: `${props.percent}%`}}>
        <span className="labelStyles">{props.Name}</span>
        </div>
    </div>
)

export default ProgressBar;