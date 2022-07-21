import React from "react";
import "./App.css";
import pptxgen from "pptxgenjs";
let pptx = new pptxgen();

function App() {
  const [doc, setDoc] = React.useState(null);
  let slide = pptx.addSlide();
  slide.addText("React Demo!", {
    x: 1,
    y: 1,
    w: 10,
    fontSize: 36,
    fill: { color: "F1F1F1" },
    align: "center",
  });
  // as of currently installed latest version of pptxgenjs, this background option causing file corupted errors on the export file.
  slide.background = { path: "https://source.unsplash.com/random/800x600" };

  const handleClick = () => {
    pptx.writeFile({ fileName: "react-demo.pptx" });
  };
  return (
    <div className="App">
      <h1>React PPTx testing</h1>
      <button onClick={handleClick}>download the pptx file</button>
    </div>
  );
}

export default App;
