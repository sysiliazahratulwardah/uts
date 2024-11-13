import "./App.css";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import CardList from "./components/Card";
import Footer from "./components/Footer";
import Ulasan from "./components/Ulasan";


function App() {
  return (
      <div className="App">
        <Header />
        <NavBar />
        <Hero/>
        <CardList />
        <Ulasan/>
        <Footer/>

      </div>
  );
}

export default App;