import { HashRouter, Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login"
import { Main } from "./pages/Main"

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
