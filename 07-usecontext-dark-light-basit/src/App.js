import React, { useState } from "react";
import Anasayfa from "./Anasayfa";
import Deneme from "./Deneme";
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

const temaAdlari = {
  dark: "Dark Tema",
  light: "Light Tema",
};

export const TemaContext = React.createContext();

const App = () => {
  const [tema, setTema] = useState({
    temaSayfa: temalar.light,
    temaButton: temalar.dark,
    temaAdi: temaAdlari.dark,
  });

  const [coin, setCoin] = useState({});

/*   const toggleTema = () => {
    console.log(tema);
    if (tema.temaSayfa === temalar.dark) {
      setTema((pre) => ({
        ...pre,
        temaSayfa: temalar.light,
        temaButton: temalar.dark,
        temaAdi: temaAdlari.dark,
      }));
    } else {
      setTema((pre) => ({
        ...pre,
        temaSayfa: temalar.dark,
        temaButton: temalar.light,
        temaAdi: temaAdlari.light,
      }));
    }
  }; */

    const toggleTema = () => {
    console.log(tema);
    if (tema.temaSayfa === temalar.dark) {
      setTema({
        temaSayfa: temalar.light,
        temaButton: temalar.dark,
        temaAdi: temaAdlari.dark,
      });
    } else {
      setTema({
        temaSayfa: temalar.dark,
        temaButton: temalar.light,
        temaAdi: temaAdlari.light,
      });
    }
  };

  return (
    <div className="App">
      <button onClick={() => toggleTema()} style={tema.temaButton}>
        {tema.temaAdi}
      </button>
      <Deneme initialCount={0}/>
      <TemaContext.Provider value={tema.temaSayfa}>
        <Anasayfa />
      </TemaContext.Provider>


    </div>
  );
};

export default App;
