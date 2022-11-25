import { Navigate, Route, Routes } from "react-router-dom";

import { Footer, Header } from "./components";
import { Home, Posts, Vocabulary } from "./pages";
import { grammarMenu, vocabularyMenu } from "./components/Header/MenuItems";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {grammarMenu.menuItems.map((item) => {
          return (
            <Route
              path={`/posts/${item.name}`}
              element={<Posts theme={item.name} />}
              key={item.name}
            />
          );
        })}
        {vocabularyMenu.menuItems.map((item) => {
          return (
            <Route
              path={`/posts/${item.name}`}
              element={<Vocabulary theme={item.name} />}
              key={item.name}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
