import React, { useState } from "react";


export default function Card({ question }) {
  const [flip, setFlip] = useState(false);
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
