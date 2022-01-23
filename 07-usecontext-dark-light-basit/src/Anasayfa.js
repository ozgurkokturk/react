import React, { useContext } from "react";
import { SayfaContext } from "./App.js";

function Anasayfa() {


  function handleSave(event){
    event.preventDefault();
    // submit olayını genelde onchange üzerinden yapıyorlar fakat 
    // direkt yapmak istersek biraz daha zahmetli input sayısı arttırkça [0] değerini attırmak gerekebilir
    const {value } = event.target[0];

    // eski değerleri çekip set ediyoruz
    // ... ifadesini silip 2-3 tane değer gir aradaki farkı gör
    setListe((pre) => (
      [...pre,value]
    ));
  }

  // {tema} kullanımı gelen objenin içerisindeki tema değerine direkt ulaşmamızı sağlıyor
  // aksi halde gelen değeri bir değere eşitleyip  deger.tema şeklinde kullanmamız gerekecekti.
    const {tema,setListe} = useContext(SayfaContext);
  return (
    <div className="App" style={tema.temaSayfa}>
      <form onSubmit={handleSave}>
        <label>Coinleri Gir: </label>
        <input type="text" name="coin"  />
        <input type="submit" value="ekle" />
      </form>
      <hr/>
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
    </div>
  );
}

export default Anasayfa;
