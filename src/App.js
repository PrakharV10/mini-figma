import React, { useState } from 'react';
import CopyCSS from './Components/CopyCSS';
import FontFamily from './Components/FontFamily';
import InputBar from './Components/InputBar';
import TextArea from './Components/TextArea';

function App() {

  const [inp, setInp] = useState("Hello World 👋");
  const [selectFamily, setSelectFamily] = useState("Truculenta");
  const [fontSize, setFontSize] = useState(32);
  const [color, setColor] = useState("#fff");

  return (
    <div className="App">
      <nav>
        <h1>FONT EXPERIMENTS</h1>
      </nav>
      <InputBar
          setInp={setInp}
          color={color}
          setColor={setColor} />
      
      <main>
          <h2>Font Family & Font Size</h2>
          <FontFamily
          selectFamily = {selectFamily}
          setSelectFamily={setSelectFamily}
          fontSize={fontSize}
          setFontSize={setFontSize} />
      </main>

      <section>
          <TextArea
          inp = {inp}
          selectFamily={selectFamily}
          fontSize={fontSize}
          color = {color}
          />
          <CopyCSS
          color = {color}
          selectFamily={selectFamily}
          fontSize = {fontSize}
          />
      </section>
    </div>
  );
}

export default App;
