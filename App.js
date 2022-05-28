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
    check();
    draw();
  }, [count]);

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
    }
  }

  function check() {
    alert_msg(0, 1, 2);
    alert_msg(0, 3, 6);
    alert_msg(0, 4, 8);
    alert_msg(1, 4, 7);
    alert_msg(2, 5, 8);
    alert_msg(3, 4, 5);
    alert_msg(6, 7, 8);
    alert_msg(2, 4, 6);
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

  return (
    <div className="App">
      <header> TIC-TAC-TOE</header>
      <h1 id="heading">First player plays with X and Second with O.</h1>
      <div className="container">
        <button
          disabled={disable[0]}
          className="btn"
          onClick={() => changeText(0)}
        >
          <div>{buttonText[0]}</div>
        </button>
        <button
          disabled={disable[1]}
          className="btn"
          onClick={() => changeText(1)}
        >
          <div>{buttonText[1]}</div>
        </button>
        <button
          disabled={disable[2]}
          className="btn"
          onClick={() => changeText(2)}
        >
          <div>{buttonText[2]}</div>
        </button>
        <button
          disabled={disable[3]}
          className="btn"
          onClick={() => changeText(3)}
        >
          <div>{buttonText[3]}</div>
        </button>
        <button
          disabled={disable[4]}
          className="btn"
          onClick={() => changeText(4)}
        >
          <div>{buttonText[4]}</div>
        </button>
        <button
          disabled={disable[5]}
          className="btn"
          onClick={() => changeText(5)}
        >
          <div>{buttonText[5]}</div>
        </button>
        <button
          disabled={disable[6]}
          className="btn"
          onClick={() => changeText(6)}
        >
          <div>{buttonText[6]}</div>
        </button>
        <button
          disabled={disable[7]}
          className="btn"
          onClick={() => changeText(7)}
        >
          <div>{buttonText[7]}</div>
        </button>
        <button
          disabled={disable[8]}
          className="btn"
          onClick={() => changeText(8)}
        >
          <div>{buttonText[8]}</div>
        </button>
      </div>
      <footer> &copy; </footer>
    </div>
  );
}
