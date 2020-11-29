import React from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const onClickButton = () => alert();

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorMessage color="blue" message="how are you??" />
      <p style={contentLadyStyle}>OK!!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
