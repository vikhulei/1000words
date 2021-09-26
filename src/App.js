import React, { useState } from "react";
import Card from "./Card";
import questions from "./Questions";

const App = () => {
  const [question, setQuestion] = useState({
    q: "Готова?",
    a: "Ти повинна бути!",
    tag: 0
  });
  const [category, setCategory] = useState("firstTen")

  const clr = () => {
    let newSamp = questions[category];
    newSamp.map((val) => (val.tag = 0));
    setQuestion({ q: "Готова?", a: "Ти повинна бути!", tag: 0 });
  };

  const categ = (e) => {
    setCategory(e.target.value)
    clr();
  }

  const next = () => {
    let newSamp = questions[category];
    newSamp = newSamp.filter((val) => val.tag === 0);
    if (newSamp.length === 0) {
       setQuestion({ q: "Кінец", a: "Так-так, це кінець", tag: 0 });
     } else {
      let n = Math.floor(Math.random() * newSamp.length);
      setQuestion(newSamp[n]);
      newSamp[n].tag = 1;
    }
  };

  return (
    <div>
      <form className="category">
      <select name="category" id="category" onChange={categ}>
        <option value="firstTen">Перший десяток</option>
        <option value="secondTen">Другий десяток</option>
        <option value="thirdTen">Третій десяток</option>
        <option value="fourthTen">Четвертий десяток</option>
        <option value="fifthTen">П'ятий десяток</option>
        
      </select>
      </form>
      <div className="main">
        <div className="card_wrapper">
        <Card question={question} />
        </div>
        <button className="next" onClick={next}><p>Next</p></button>
      </div>
      <div className="clear_wrapper">
        <button className="clr" onClick={clr}>Clear</button>
        </div>
    </div>
  );
};

export default App;
