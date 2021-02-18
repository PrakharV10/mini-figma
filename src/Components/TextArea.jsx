import React from 'react'

function TextArea({inp, selectFamily, fontSize,color}) {
    return (
        <div
            style = {{color : `${color}` ,fontSize : `${fontSize}px`, fontFamily : `${selectFamily}, sans-serif`}}
            className="text-area">
            {inp}
        </div>
    )
}

export default TextArea
