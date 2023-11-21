function App() {
  const isim = "Yağmur";
  function karsilasma(selamlasma, baslik) {
    return selamlasma + " " + baslik;
  }
  const karsilama = {
    selamlasma: "Selam",
    icerik: { baslik: "İçerik Başlığı" },
    baslik: "Yağmur",
  };
  const yaziListesi = [
    {
      baslik: "React öğreniyorum",
      yazar: "Yağmur",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "React Native öğreniyorum",
      yazar: "Yağmur",
      yorum_sayisi: 10,
      puan: 5,
      id: 1,
    },
  ];
  return (
    <div>
      <h1>
        {karsilama.selamlasma} {karsilama.baslik}!
      </h1>
      <h2>{karsilasma("merhaba", "yagmur")}</h2>
      <label htmlFor="arama">Ara:</label>{" "}
      {/*  bu label idsi arama olan için. labelfor ile aynı */}
      <input id="arama" type="text"></input>
      <hr />
      <ul>
        {yaziListesi.map(
          yazi in yaziListesi gibi düşünülebilir
          function (yazi) {
            return <li key={yazi.id}>{yazi.baslik}</li>; //unique id için key verilmelidir, mantıksal olarak hatalidir
          }
        )}
      </ul>
    </div>
  );
}

export default App;
import react from "@vitejs/plugin-react-swc";
import "./App.css";
import React, { useState } from "react";

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Arama({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
    </div>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <div className="container">
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch} aramaMetni={aramaMetni} />
      <hr />
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <Liste yazilar={arananYazilar} />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Arama({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
    </div>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch} aramaMetni={aramaMetni} />
      <hr />
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <Liste yazilar={arananYazilar} />
    </div>
  );
}

export default App;
