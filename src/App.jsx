// import css files 
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import './styles/style.css'

// import components
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import WhyUs from "./Components/About/WhyUs";

// import js files 
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <About />
            <Services />
            <WhyUs />
        </>
    )
}

export default App
