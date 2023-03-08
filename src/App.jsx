import "./App.css";
import GpxToGeoJSON from "./components/GpxToGeoJSON";
import KmlToGeoJSON from "./components/KmlToGeoJSON";

function App() {
  return (
    <>
      <GpxToGeoJSON />
      <KmlToGeoJSON />
    </>
  );
}

export default App;
