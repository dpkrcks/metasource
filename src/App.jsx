import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Privacy from "./pages/Privacy"
import Navbar from "./components/Navbar"

function App() {

  return (
   <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/privacy" Component={Privacy}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
