// import "./App.css";

// function App() {
//   // const isim = "Yağmur";
//   function karsilasma(selamlasma, baslik) {
//     return selamlasma + " " + baslik;
//   }
//   const karsilama = {
//     selamlasma: "Selam",
//     icerik: { baslik: "İçerik Başlığı" },
//     baslik: "Yağmur",
//   };
//   const yaziListesi = [
//     {
//       baslik: "React öğreniyorum",
//       yazar: "Yağmur",
//       yorum_sayisi: 3,
//       puan: 4,
//       id: 0,
//     },
//     {
//       baslik: "React Native öğreniyorum",
//       yazar: "Yağmur",
//       yorum_sayisi: 10,
//       puan: 5,
//       id: 1,
//     },
//   ];
//   return (
//     <div>
//       <h1>
//         {karsilama.selamlasma} {karsilama.baslik}!
//       </h1>
//       <h2>{karsilasma("merhaba", "yagmur")}</h2>
//       <label htmlFor="arama">Ara:</label>{" "}
//       {/*  bu label idsi arama olan için. labelfor ile aynı */}
//       <input id="arama" type="text"></input>
//       <hr />
//       <ul>
//         {yaziListesi.map(
//           // yazi in yaziListesi gibi düşünülebilir
//           function (yazi) {
//             return <li key={yazi.id}>{yazi.baslik}</li>; //unique id için key verilmelidir, mantıksal olarak hatalidir
//           }
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React, { useState } from "react";

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} yazi={yazi} />;
      })}
    </ul>
  );
}

function Yazi(props) {
  return (
    <li key={props.yazi.id}>
      <span>
        <a href={props.yazi.url}>{props.yazi.baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {props.yazi.yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {props.yazi.yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {props.yazi.puan}
      </span>
    </li>
  );
}

function Arama() {
  const [aramaMetni, setAramaMetni] = useState(""); // Use capital "R" in "React.useState"

  function handleChange(event) {
    // console.log(event); //eventin detaylarını yazdırıyor
    setAramaMetni(event.target.value);
  }
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={handleChange} />
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
    </div>
  );
}

function App() {
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

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama></Arama>
      <hr />
      <Liste yazilar={yaziListesi} />
    </div>
  );
}

export default App;
