import React, { useState } from "react";
import "./App.css";

/*
    TODO
    -> Bu sayfada bir input oluştur
    -> inputa girilen bilgiler Anasayfa.js'e liste olarak eklensin
    -> Liste State'i App.js de olsun
*/

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
<br/>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
