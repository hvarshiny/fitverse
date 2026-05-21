import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Programs from "./pages/Programs"
import QuickSessions from "./pages/QuickSessions"
import BMICalculator from "./pages/BMICalculator"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import WorkoutSession from "./pages/WorkoutSession"
import ProgramDetails from "./pages/ProgramDetails"
import Signup from "./pages/Signup"
import PremiumDashboard from "./pages/PremiumDashboard"
import PremiumProgram from "./pages/PremiumProgram"


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Sidebar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/program/:id" element={<ProgramDetails />}/>

        <Route path="/sessions" element={<QuickSessions />} />

        <Route path="/workout/:id" element={<WorkoutSession />}/>

        <Route path="/bmi" element={<BMICalculator />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/premium" element={<PremiumDashboard />} />

        <Route path="/premium:id" element={<PremiumProgram />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App