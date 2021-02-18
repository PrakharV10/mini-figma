import React from 'react'

function CopyCSS({color, selectFamily, fontSize }) {
    return (
        <div className="css-comp">
            CSS Code : 
            <div className="copy-css">
                <div>color : {color}</div>
                <div>font-family : {selectFamily};</div>
                <div>font-size : {fontSize};</div>
            </div>
        </div>
    )
}

export default CopyCSS
