import { Routes, Route } from "react-router-dom"
import { Header } from "./components/index"
import { PokemonsList } from "./pages"

function App() {

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/pokemons" element={<PokemonsList />} />
          <Route path="/help" element={<h2>Help info...</h2>} />
          <Route path="/contacts" element={<h2>Contacts...</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
