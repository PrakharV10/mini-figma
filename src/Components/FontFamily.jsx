import React from 'react'

function FontFamily({
    setSelectFamily,
    selectFamily,
    setFontSize,
    fontSize
})
{

    const familyData = ['Montserrat', 'Newsreader', 'Poppins', 'Roboto', 'Truculenta'];

    function sizeHandler(arg) {
        if (arg === 1 && fontSize<60)
            setFontSize(fontSize + 10)
        else if(arg === 0 && fontSize > 30)
            setFontSize(fontSize - 10)
        else
            return
    }  

    console.log(fontSize)

    return (
        <div className="font-styling">
            <button
                onClick = {() => sizeHandler(1) }
                className="size-up">＋</button>
            <div className="font-family">
                {
                    familyData.map((font,index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectFamily(font)}
                                className={selectFamily === font ? "individual-font active" : "individual-font"}>
                                {font}
                            </div>
                        )
                    })
                }
            </div>
            <button
                onClick = {() => sizeHandler(0)}
                className="size-down">－</button>
        </div>
    )
}

export default FontFamily
