import { Routes, Route } from "react-router-dom";
import Characater from "./pages/Characater";
import CharactersList from "./pages/CharactersList";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Characater />} />
      </Routes>
    </div>
  );
}

export default App;
