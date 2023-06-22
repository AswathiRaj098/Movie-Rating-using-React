import "./styles.css";
import { BsSuitHeart } from "react-icons/bs";
import { useState } from "react";

export default function App() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);

  const handles1 = () => {
    if (s1) {
      setS1(false);
      setS2(false);
      setS3(false);
      setS4(false);
      setS5(false);
    } else {
      setS1(true);
    }
  };

  const handles2 = () => {
    if (s2) {
      setS2(false);
      setS3(false);
      setS4(false);
      setS5(false);
    } else {
      setS1(true);
      setS2(true);
    }
  };

  const handles3 = () => {
    if (s3) {
      setS3(false);
      setS4(false);
      setS5(false);
    } else {
      setS1(true);
      setS2(true);
      setS3(true);
    }
  };

  const handles4 = () => {
    if (s4) {
      setS4(false);
      setS5(false);
    } else {
      setS1(true);
      setS2(true);
      setS3(true);
      setS4(true);
    }
  };

  const handles5 = () => {
    if (s5) {
      setS5(false);
    } else {
      setS1(true);
      setS2(true);
      setS3(true);
      setS4(true);
      setS5(true);
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Rating Design </h1>
      <BsSuitHeart className={s1 && "bg"} onClick={handles1} />
      <BsSuitHeart className={s2 && "bg"} onClick={handles2} />
      <BsSuitHeart className={s3 && "bg"} onClick={handles3} />
      <BsSuitHeart className={s4 && "bg"} onClick={handles4} />
      <BsSuitHeart className={s5 && "bg"} onClick={handles5} />
      <br />
      {s5 ? "5" : s4 ? "4" : s3 ? "3" : s2 ? "2" : s1 ? "1" : ""}/5
    </div>
  );
}
