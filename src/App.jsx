import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Landing from "./pages/Landing.jsx"
import Mission from "./pages/Mission.jsx"
import Login from "./pages/Login.jsx"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    <Landing />
    <Mission />
      
    </>
  )
}

export default App
