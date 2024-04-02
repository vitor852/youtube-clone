import Header from "./components/header";
import Menu from "./components/menu";
import VideoList from "./components/video-list";

function App() {
  return (
    <div className="root-container">
      <Header />

      <div className="content">
        <Menu />
        <VideoList />
      </div>
    </div>
  );
}

export default App;
