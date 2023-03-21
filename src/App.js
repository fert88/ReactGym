import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
import Program from "./components/program/Program";

function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <Content/>
      <Program/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
