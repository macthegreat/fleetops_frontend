import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/sections/Hero'
import Button from './Components/Button/Button'



function App() {
  return (
   <div>
   <Navbar />
   <Hero />
  <Button variant="primary">
    Start Free
  </Button>
  <Button variant="secondary">
    Watch Demo
  </Button>
   </div>
  )
}

export default App
