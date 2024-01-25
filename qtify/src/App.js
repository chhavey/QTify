import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" albumType="top" />
      <Section title="New Albums" albumType="new" />
    </>
  );
}

export default App;
