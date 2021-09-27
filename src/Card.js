import React, { useCallback } from "react";


export default function Card({ question, flip, onFlipChange }) {

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => {
        onFlipChange(!flip)
      }
      }
    >
      <div className="front">{question.q}</div>
      <div className="back">{question.a}</div>
    </div>
  );
}
