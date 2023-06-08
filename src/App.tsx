import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/404"
import Cadastro from "./pages/Cadastro"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App