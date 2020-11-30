import React, { useEffect, useState } from "react";
import { ColorMessage } from "./components/ColorMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello! IT'S TEST!!</h1>
      <ColorMessage color="blue">OK??</ColorMessage>
      <ColorMessage color="pink">OK!!</ColorMessage>
      <button onClick={onClickCountUp}>カウントアップ！！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^ ^)</p>}
    </>
  );
};
export default App;
