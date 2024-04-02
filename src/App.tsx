import Header from "./components/header";
import Menu from "./components/menu";

function App() {
  return (
    <div className="root-container">
      <Header />

      <div className="content">
        <Menu />
        <div></div>
      </div>
    </div>
  );
}

export default App;
