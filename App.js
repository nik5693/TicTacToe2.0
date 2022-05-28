import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(0);
  const [buttonText, setButtonText] = useState([
    "Click",
    "Click",
    "Click",
    "Click",
    "Click",
    "Click",
    "Click",
    "Click",
    "Click"
  ]);

  const [disable, setDisable] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  useEffect(() => {
    let x = check();
    if (x === false) {
      draw();
    }
  }, [count]);

  useEffect(() => {
    draw();
  }, [flag]);

  function dis() {
    setFlag(1);
    setDisable([true, true, true, true, true, true, true, true, true]);
  }

  function draw() {
    let c = 0;
    for (let i = 0; i < 9; i++) {
      if (disable[i] === true) {
        c = c + 1;
      }
    }
    if (c === 9 && flag === 0) {
      alert("DRAW!");
    }
  }

  function alert_msg(i, j, k) {
    if (
      buttonText[i] !== "Click" &&
      buttonText[i] === buttonText[j] &&
      buttonText[j] === buttonText[k]
    ) {
      if (buttonText[i] === "O") {
        alert("O Wins!");
      } else {
        alert("X Wins!");
      }
      dis();
      return true;
    }
    return false;
  }

  function check() {
    let y = false;
    y = y || alert_msg(0, 1, 2);
    y = y || alert_msg(0, 3, 6);
    y = y || alert_msg(0, 4, 8);
    y = y || alert_msg(1, 4, 7);
    y = y || alert_msg(2, 5, 8);
    y = y || alert_msg(3, 4, 5);
    y = y || alert_msg(6, 7, 8);
    y = y || alert_msg(2, 4, 6);
    return y;
  }

  const changeText = (i) => {
    if (count % 2 === 0) {
      setButtonText(
        buttonText.slice(0, i).concat(["X"].concat(buttonText.slice(i + 1)))
      );
    } else {
      setButtonText(
        buttonText.slice(0, i).concat(["O"].concat(buttonText.slice(i + 1)))
      );
    }
    setCount(count + 1);
    setDisable(disable.slice(0, i).concat([true].concat(disable.slice(i + 1))));
  };

  const btn = [];
  for (let ind = 0; ind < 9; ind++) {
    btn[ind] = (
      <button
        disabled={disable[ind]}
        className="btn"
        onClick={() => changeText(ind)}
      >
        <div>{buttonText[ind]}</div>
      </button>
    );
  }

  return (
    <div className="App">
      <header> TIC-TAC-TOE</header>
      <h1 id="heading">First player plays with X and Second with O.</h1>
      <div className="container">
        {btn[0]}
        {btn[1]}
        {btn[2]}
        {btn[3]}
        {btn[4]}
        {btn[5]}
        {btn[6]}
        {btn[7]}
        {btn[8]}
      </div>
      <footer> &copy; </footer>
    </div>
  );
}
