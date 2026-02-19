import './App.css'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

function App(){

  return(
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <div className="grow bg-[#25671E]"></div>
      <Footer/>
    </div>
  )
}

export default App