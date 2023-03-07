import Map from "react-map-gl";
import Dropzone from "react-dropzone";
import { useEffect } from "react";

export default function Home() {
  const key = import.meta.env.VITE_ACCESS_KEY;

  return (
    <>
      <div>
        <p>{key}</p>
      </div>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={key}
      />
    </>
  );
}
