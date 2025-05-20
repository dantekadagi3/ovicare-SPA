import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/pages/Home"
import About from "../src/pages/About"
 import Contact from "../src/pages/Contact"
 import NotFound from "../src/pages/NotFound"


const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
