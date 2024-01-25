import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" />
    </>
  );
}

export default App;
