
import './App.css'
import Header from "./components/Header.tsx";
import Hero from "./components/Hero";
import Cards from "./components/Cards.tsx";
import DashBoard from "./components/DachBoard.tsx";
import Api from "./components/Api.tsx";
import Auth from "./components/Auth.tsx";
import Start from "./components/Start.tsx";
import Footer from "./components/Footer.tsx";


function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <Cards/>
        <DashBoard/>
        <Auth/>
        <Api/>
        <Start/>
        <Footer/>
    </>
  )
}

export default App
