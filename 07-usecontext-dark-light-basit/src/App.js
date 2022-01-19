import React, { useState } from "react";
import Anasayfa from "./Anasayfa";
import "./App.css";

const temalar = {
  dark: {
    background: "#444444",
    color: "whitesmoke",
  },
  light: {
    background: "whitesmoke",
    color: "#444444",
  },
};

export const TemaContext = React.createContext();

const App = () => {
  const [tema, setTema] = useState(temalar.light);

  const toggleTema = () => {
    if (tema === temalar.dark) {
      setTema(temalar.light);
    } else {
      setTema(temalar.dark);
    }
  };

  return (
    <div className="App">
      <button onClick={() => toggleTema()}>
        {tema === temalar.dark ? "Light Tema" : "Dark Tema"}
      </button>
      <TemaContext.Provider value={tema}>
        <Anasayfa />
      </TemaContext.Provider>
    </div>
  );
};

export default App;
