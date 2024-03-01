import Menu from "./Menu";
import Header from "./Header";
import Choose from "./Choose";
// import Explore from "./components/Explore";
import Trainer from "./Trainer";
import Testimonial from "./Testimonial";
import Discount from "./Discount";
import Footer from "./Footer";
import "./App.css";


function main(){
    return(
    <div className="App">
      <Menu />
      <Header />
      <Choose />
      {/* <Explore /> */}
      <Trainer />
      <Testimonial />
      <Discount />
      <Footer />
    </div
    );
}
expoort default main;