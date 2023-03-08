import Map, { Source, Layer } from "react-map-gl";
import Dropzone, { useDropzone } from "react-dropzone";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import gpxParser from "gpxparser";

export default function GpxParse() {
  const key = import.meta.env.VITE_ACCESS_KEY;
  const [track, setTrack] = useState({});
  const mapContainer = useRef(null);
  const [long, setLong] = useState(-94.503809);
  const [lat, setLat] = useState(46.443226);
  const [zoom, setZoom] = useState(4.5);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        let gpx = new gpxParser();
        const gpxFile = gpx.parse(binaryStr);
        const track = gpx.tracks[0];
        setTrack(track);
        // const geo = new GeoJSON();
        // console.log(geo);
        console.log(track);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop });

  // react-dropzone styling
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const activeStyle = {
    borderColor: "#2196f3",
  };
  const acceptStyle = {
    borderColor: "#00e676",
  };
  const rejectStyle = {
    borderColor: "#ff1744",
  };
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <>
      <h1>GPX Parser</h1>
      {/* <Map
        mapboxAccessToken={key}
        onViewportChange={(newViewport) => {
          this.setState({ viewport: newViewport });
        }}
      >
        <Source id="polylineLayer" type="geojson" data={dataOne}>
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round",
            }}
            paint={{
              "line-color": "rgba(3, 170, 238, 0.5)",
              "line-width": 5,
            }}
          />
        </Source>
      </Map> */}
      {/* <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={key}
      /> */}
      <br />
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drag 'n' drop GPX files here</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
}
