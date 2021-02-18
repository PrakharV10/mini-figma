import React, { useState } from 'react'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SketchPicker} from 'react-color'

function InputBar({setInp, color, setColor}) {

    const [showPalette, setShowPalette] = useState(false);

    return (
        <div className="input-bar-comp">
            <input
                onChange = {(event) => setInp(event.target.value)}
                placeholder="Type here to preview text"
                className = "input-bar"
            />
            <div className="icon">
                <FontAwesomeIcon
                     onClick={() => setShowPalette(!showPalette)}
                    size = "2x"
                    icon={faPalette} />
                {showPalette && <SketchPicker
                    onChange={updatedColor => setColor(updatedColor.hex)}
                    color={color}
                    className = "color-picker"
                />}
            </div>
        </div>
    )
}

export default InputBar
