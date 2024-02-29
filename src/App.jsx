import Menu from "./components/Menu";
import Header from "./components/Header";
import Choose from "./components/Choose";
// import Explore from "./components/Explore";
import Trainer from "./components/Trainer";
import Testimonial from "./components/Testimonial";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Choose />
      {/* <Explore /> */}
      <Trainer />
      <Testimonial />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
