import { Routes, Route } from "react-router-dom";
import Characater from "./pages/Characater";
import CharactersList from "./pages/CharactersList";
import Search from "./pages/Search";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Characater />} />

      </Routes>
    </div>
  );
}

export default App;
