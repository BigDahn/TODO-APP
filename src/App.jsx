import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="grid grid-rows-[30vh_100vh] md:grid-rows-[40vh_60vh] overflow-y-hidden">
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
