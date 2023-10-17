import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
