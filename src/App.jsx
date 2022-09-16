import { Routes, Route } from "react-router-dom"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/pokemons" element={<div>main</div>} />
      </Routes>
    </div>
  )
}

export default App
