import ParticlesComponent from "./components/particles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <div className="Container">
        <h2 id="name">Leonardo Kremer</h2>
        <span id="about">Desenvolvedor back-end e front-end</span>
      </div>
    </div>
  );
}

export default App;
