import Map, { Source, Layer } from "react-map-gl";
import Dropzone, { useDropzone } from "react-dropzone";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import gpxParser from "gpxparser";
import { gpx, gpxGen, kml } from "@tmcw/togeojson";

export default function GpxToGeoJSON() {
  const key = import.meta.env.VITE_ACCESS_KEY;
  const [track, setTrack] = useState({});
  const mapContainer = useRef(null);
  const [long, setLong] = useState(-94.503809);
  const [lat, setLat] = useState(46.443226);
  const [zoom, setZoom] = useState(4.5);
  const [filename, setFilename] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log(file);
      setFilename(file.path);
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        const gpxFile = gpx(new DOMParser().parseFromString(binaryStr, "text/xml"));
        const track = gpxFile;
        setTrack(track);
        console.log(track);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { type: [".gpx", ".gpx.txt"] },
  });

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
      <h1>GPX to GeoJSON Converter</h1>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop GPX file here.</p> : <p>Drag 'n' drop GPX files here, or click to select files</p>}
        {filename != "" ? <p>{filename}</p> : null}
      </div>
      <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(track))}`}
        download={`${filename.slice(0, -8)}.geojson`}
      >
        {`Download as GeoJSON`}
      </a>
    </>
  );
}
