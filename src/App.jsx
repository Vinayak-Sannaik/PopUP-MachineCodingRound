
import "./App.css"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Products from "./components/products/Products"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Footer />
    </>
  )
}

export default App
