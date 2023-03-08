import "./App.css";
import GpxParse from "./components/GpxParse";
import KmlToGeoJSON from "./components/KmlToGeoJSON";

function App() {
  return (
    <>
      <KmlToGeoJSON />
      <GpxParse />
    </>
  );
}

export default App;
