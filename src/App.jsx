import "./App.css";
import GpxToGeoJSON from "./components/GpxToGeoJSON";
import KmlToGeoJSON from "./components/KmlToGeoJSON";
import image from "./assets/geo-text.svg";

function App() {
  return (
    <>
      <img src={image}></img>
      <GpxToGeoJSON />
      <KmlToGeoJSON />
    </>
  );
}

export default App;
