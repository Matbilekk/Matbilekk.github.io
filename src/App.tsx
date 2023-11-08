import "./App.css";
import { GoTopBtn } from "./components/goTopBtn/GoToPBtn";
import { Particle } from "./components/particle/Particle";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Works } from "./layout/sections/works/Workss";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Slogan />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
