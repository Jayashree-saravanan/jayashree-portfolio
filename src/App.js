import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/contact";
import SocialLinks from "./components/SocialLinks";

function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}
export default App;