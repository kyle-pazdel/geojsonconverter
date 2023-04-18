<h1 align="center">
  <a href="https://github.com/kyle-pazdel">
    <img src="" alt="">
  </a>
</h1>

# GeoJSON Converter
<h4>View the Live Web App <a href="https://geojsonconverter.vercel.app/">geojsonconverter.vercel.app</a></h4>

<p align="center" dir="center">
  <img src="https://github.com/kyle-pazdel/geojsonconverter/blob/main/public/screenshot.png" alt="Landing page screenshot" width="100%" >
</p>
<p align="center">
<a href="#introduction">Introduction</a> &nbsp;&bull;&nbsp;
<a href="#dependencies">Dependencies</a> &nbsp;&bull;&nbsp;
<a href="#installation">Installation</a> &nbsp;&bull;&nbsp;
<a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
<a href="#roadmap">Roadmap</a>
</p>
<h2>Introduction</h2>

<p>This app is a single-page frontend constructed as a project to help understand the data transformation required to store geospatial data in a document database.</p>
<p>I built this GeoJSON converter as a preliminary step towards a larger hiking-tracker app that is in development.</p>
<p>This frontend is capable of converting either KML or GPX files into GeoJSON objects. The objects are then written to files and can be downloaded and saved.</p>

## Getting Started

### Dependencies
GeoJSON Converter was built with React 18.2.0, uses the  [@tmcw/togeojson](https://github.com/mapbox/togeojson/) to parse files to geojson objects, and is styled with Tailwind.
<br/>
<br/>
This app utilizes Node Package Manager for dependency installation. If you don't already have npm or Node.js configured on your local machine, you can follow the instructions [here for a quick set-up](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


### Installation

This repository can be cloned and run locally.

Navigate to your desired directory and use the following command to clone down...

```
git clone https://github.com/kyle-pazdel/geojsonconverter

```
change directories to the new clone...

```
cd geojsonconverter

```
then install all dependencies with the following command.

```
npm install

```

### Usage

To begin running locally, run the following command.

```
npm run dev

```


### Roadmap

As previously mentioned, this project was an educational experience to work towards understanding how to best store geospatial data in a document database. Some of the code here will likely be used in a future hike-tracking app.

## Author

<p>

<a href="https://github.com/kyle-pazdel">Kyle Pazdel</a>

</p>

Enjoy! 
<br/>
<br/>
***“The clearest way into the Universe is through a forest wilderness.”***
**-John Muir**
