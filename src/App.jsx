import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components/index"
import { SideBar } from "./components/SideBar/SideBar"
import { Pokemon, PokemonsList } from "./pages"

function App() {
  const isSideBarOpen = useSelector(state => state.showSideBar.isSideBarOpen)

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        {isSideBarOpen && <SideBar />}
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/pokemons" element={<PokemonsList />} />
          <Route path="/pokemons/:id" element={<Pokemon />} />
          <Route path="/help" element={<div className="main-container"><h2>Help info...</h2></div>} />
          <Route path="/contacts" element={<div className="main-container"><h2>Contacts...</h2></div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
