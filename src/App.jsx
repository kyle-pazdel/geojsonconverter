import "./App.css";
import GpxToGeoJSON from "./components/GpxToGeoJSON";
import KmlToGeoJSON from "./components/KmlToGeoJSON";
import image from "./assets/geo-text.svg";

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={image}></img>
      </div>
      <div className="container mx-auto">
        <GpxToGeoJSON />
        <KmlToGeoJSON />
      </div>
    </div>
  );
}

export default App;
