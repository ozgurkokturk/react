import React, { useState } from "react";
import Anasayfa from "./Anasayfa";
import Liste from "./Liste";
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

export const SayfaContext = React.createContext();

const App = () => {
  const [liste, setListe] = useState(["ROCO"]);

  const [tema, setTema] = useState({
    temaSayfa: temalar.light,
    temaButton: temalar.dark,
    temaAdi: temaAdlari.dark,
  });



  // Sanırım bu örnekte Spread (Yayma) operatörü kullanmaya gerek yok
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

  // Provider olarak geçilen tüm verilerin toplantığı obje
  const bigData = {
    tema,
    liste,
    setListe,
  };

  return (
    <div className="App">
      <button onClick={() => toggleTema()} style={tema.temaButton}>
        {tema.temaAdi}
      </button>

      <SayfaContext.Provider value={bigData}>
        <Anasayfa />
        <Liste />
      </SayfaContext.Provider>
    </div>
  );
};

export default App;
