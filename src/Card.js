import React, { useState } from "react";


export default function Card({ question, flipp }) {
  const [flip, setFlip] = useState(flipp);
  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div className="front">{question.q}</div>
      <div className="back">{question.a}</div>
    </div>
  );
}
