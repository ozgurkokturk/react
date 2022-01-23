import React, { useContext } from "react";
import "./App.css";
import { SayfaContext } from "./App.js";

/*
    TODO
    -> Bu sayfada bir input oluştur
    -> inputa girilen bilgiler Anasayfa.js'e liste olarak eklensin
    -> Liste State'i App.js de olsun
*/

function Liste() {
  const {liste} = useContext(SayfaContext);
  console.log(liste);
  return (
    <div>
      <h2>Coin Listesi</h2>
      <ul>
      {
        liste.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default Liste;
