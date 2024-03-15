
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"


function App() {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header__content">
            <h1 className="header__title">NIKE</h1>
            <p className="header__text">Cool sneakers from <span>NIKE</span> for you</p>
        </div>
    </header>
    <Main />
    
    <Footer />
    </div>
  )
}

export default App
