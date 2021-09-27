import React, { useState } from "react";
import Card from "./Card";
import questions from "./Questions";

const App = () => {
  const [question, setQuestion] = useState({
    q: "Готова?",
    a: "Ти повинна бути!",
    tag: 0
  });
  const [category, setCategory] = useState("firstTen");
  const [flip, setFlip] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [prevQ, setPrevQ] = useState({})
  const [checked, setChecked] = useState(false)

  const clr = () => {
    let newSamp = questions[category];
    newSamp.map((val) => (val.tag = 0));
    setQuestion({ q: "Готова?", a: "Ти повинна бути!", tag: 0 });
    setFlip(false);
  };

  const categ = (e) => {
    setCategory(e.target.value)
    clr();
  }

  const next = () => {
    setChecked(false);
    let newSamp = questions[category];
    newSamp = newSamp.filter((val) => val.tag === 0);
    if (newSamp.length === 0) {
       setQuestion({ q: "Кінець", a: "Так-так, це кінець!", tag: 0 });
     } else {
      if (repeat===true){
        prevQ.tag = 0;
      }
       setFlip(false);
      let n = Math.floor(Math.random() * newSamp.length);
      setQuestion(newSamp[n]);
      newSamp[n].tag = 1;
      setPrevQ(newSamp[n]);
    }
    setRepeat(false);
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
      <div className="repeat">
      <label htmlFor="repeat">R</label>
      <input type="checkbox" name="repeat" checked={checked} onClick={() => setChecked(!checked)} onChange={(e) => setRepeat(e.target.checked)}></input>
      </div>
      </form>
      <div className="main">
        <div className="card_wrapper">
        <Card
        flip={flip}
        onFlipChange={setFlip}
        question={question}
        
        />
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
