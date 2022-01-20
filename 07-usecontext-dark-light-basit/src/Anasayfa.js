import React, { useContext } from "react";
import { TemaContext } from "./App.js";

function Anasayfa() {
    const tema = useContext(TemaContext);
    //console.log(tema);
  return (
    <div className="App" style={tema}>
      <h2>useContext</h2>
      <hr />
      <code>const value = useContext(MyContext);</code>
      <div className="icerik">
        Accepts a context object (the value returned from React.createContext)
        and returns the current context value for that context. The current
        context value is determined by the value prop of the nearest
        MyContext.Provider above the calling component in the tree. When the
        nearest MyContext.Provider above the component updates, this Hook will
        trigger a rerender with the latest context value passed to that
        MyContext provider. Even if an ancestor uses React.memo or
        shouldComponentUpdate, a rerender will still happen starting at the
        component itself using useContext.
      </div>
      <div className="tip">
        <b>Tip</b> <br />
        If you’re familiar with the context API before Hooks,
        useContext(MyContext) is equivalent to static contextType = MyContext in
        a class, or to MyContext.Consumer. useContext(MyContext) only lets you
        read the context and subscribe to its changes. You still need a
        MyContext.Provider above in the tree to provide the value for this
        context.
      </div>
      <div className="tip">
        <ul>
          <li>1</li>
        </ul>
      </div>
    </div>
  );
}

export default Anasayfa;
