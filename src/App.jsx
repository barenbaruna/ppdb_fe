import Beranda from "./pages/user/Beranda/Beranda"
import Login from "./pages/user/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pendaftaran from "./pages/user/Pendaftaran/Pendaftaran"
import Dashboard from "./pages/user/Dashboard/Dashboard"
import Status from "./pages/user/Status/Status"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/status/:siswa_id" element={<Status />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
