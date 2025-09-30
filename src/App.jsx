import './App.css'
import Navbar from './Navbar'
import Home from './Pages/Home'
import Sponsores from './Pages/Sponsores'
import ScrollUpButton from './ScrollUpButton'
import About from './Pages/About'
import StatsSection from './Pages/StatsSection'
import Feature from './Pages/Features'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Sponsores/>
      <About/>
      <StatsSection/>
      <Feature/>
      <ScrollUpButton/>
    </>
  )
}

export default App
