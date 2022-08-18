import Home from "./components/home.component";
import NavBar from "./components/navbar.component";
import SocialLinks from "./components/social-links.component";
import About from "./components/about.component.jsx"
import PortFolio from "./components/portfolio.component";
import Experience from "./components/experience.component";
import Contact from "./components/contact.component";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <PortFolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
   
  );
}

export default App;
