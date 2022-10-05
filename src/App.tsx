import { Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { Home, PdfPage, Posts } from "./pages";


const grammarThemes = [
  "tenses",
  "prepositions",
  "adjectives",
  "nouns",
  "numerals",
];

const vocabularyThemes = [
  "most-useful",
  "airport",
  "proffessions",
  "animals",
  "clothes",
  "appearance",
  "cookware",
  "containers",
  "furniture-and-house",
  "birds-and-insects",
  "food",
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {grammarThemes.map((el, index) => {
          return (
            <Route path={`/theme-posts/${el}`} element={<Posts theme={el}/>} key={el} />
          );
        })}
        {vocabularyThemes.map((el, index) => {
          return (
            <Route path={`/theme-posts/${el}`} element={<Posts theme={el}/>} key={el} />
          );
        })}
        <Route path="/pdf" element={<PdfPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;