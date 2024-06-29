//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <NavBar />
      </div>
      <div className="App-section">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
