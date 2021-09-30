import "./styles.css";
import { useState } from "react";
export default function App() {
  var emojiData = {
    "🤍": " White Heart",
    "💯": "Hundred Points",
    "💢": " Anger Symbol",
    "💬": "Speech Balloon",
    "👁️‍🗨️": "Eye in Speech Bubble",
    "🗨️": "Left Speech Bubble",
    "🗯️": "Right Anger Bubble",
    "💭": " Thought Balloon",
    "💤": "Zzz",
    "💮": " White Flower"
  };
  let arr = Object.keys(emojiData);
  let [output, setOutput] = useState("");

  function changEvent(e) {
    let input = e.target.value;
    var meaning = emojiData[input];
    if (input in emojiData) {
      setOutput(meaning);
    } else if (input === "") {
      setOutput("");
    } else {
      setOutput("Soory, I dont have this in record");
    }
  }
  function clickHandler(value) {
    setOutput(emojiData[value]);
  }
  return (
    <div className="App">
      <h1 className="heading">Symbol's Knowledge</h1>
      <input
        className="inputEl"
        type="text"
        onChange={changEvent}
        style={{
          fontSize: "20px",
          width: "400px",
          padding: "0.3rem",
          borderRadius: "1rem"
        }}
        placeholder="enter Emoji here or click on emojis below"
      ></input>
      <p className="outputEl">{output}</p>

      {arr.map((value, index) => {
        return (
          <span
            style={{ fontSize: "25px", margin: "1rem", cursor: "pointer" }}
            onClick={() => clickHandler(value)}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
