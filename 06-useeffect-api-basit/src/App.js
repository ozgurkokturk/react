import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("news");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("istek atılan kelime: " + query);
      const fetchData = async () => {
        let url = "https://hn.algolia.com/api/v1/search?query=";
        url += query;
        const response = await fetch(url);
        const result = await response.json();
        console.log("Api isteği sonucu geldi!");
        setHits(result.hits);
      };
      fetchData();
    }, 500);
    return () => {
      console.log("component Unmount oldu!")
      clearTimeout(delayDebounceFn);
    }

 
  }, [query]);

  return (
    <div className="App">
      <h2>Api ile Arama Örneği</h2>
      <div className="aranacak">
        <label htmlFor="ara">500ms Delay var api yormamak adına daha fazla bilgi console'da</label>
        <input
          type="text"
          name="ara"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Kelime..."
        />
        <ul>
          {hits.map((h, index) => (
            <li key={h.objectID}>
              <b>{index + 1}</b>
              {h.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
