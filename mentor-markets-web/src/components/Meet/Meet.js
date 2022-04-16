import React from 'react';
import PropTypes from 'prop-types';
import './Meet.css';




const Meet = () => {

  let captureStream = null;

  const videoElem = document.getElementById("video");
  const logElem = document.getElementById("log");
  const startElem = document.getElementById("start");
  const stopElem = document.getElementById("stop");

  // Options for getDisplayMedia()

  var displayMediaOptions = {
    video: {
      cursor: "always"
    },
    audio: false
  };

  // Set event listeners for the start and stop buttons
  // startElem.addEventListener("click", function (evt) {
  //   startCapture();
  // }, false);

  // stopElem.addEventListener("click", function (evt) {
  //   stopCapture();
  // }, false);

  async function startCapture(displayMediaOptions) {

    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    } catch (err) {
      console.error("Error: " + err);
    }
    return captureStream;
  }

  async function startCamera(displayMediaOptions) {

    try {
      captureStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    } catch (err) {
      console.error("Error: " + err);
    }
    return captureStream;
  }

  function dumpOptionsInfo() {
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
  }

  function stopCapture(evt) {
    let tracks = videoElem.srcObject.getTracks();

    tracks.forEach(track => track.stop());
    videoElem.srcObject = null;
  }

  async function startCapture() {
    logElem.innerHTML = "";

    try {
      videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      dumpOptionsInfo();
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  return <div className="Meet" data-testid="Meet">

    <h1>Meet</h1>

    <p>Meet with your mentor here!</p>

    {/* <button onClick={() => startCapture()}>Share Screen!</button> */}

    {/* <video width="90%" height="auto" controls>
      <source src={captureStream ?? ''} type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg"> */}
    {/* Your browser does not support the video tag. */}
    {/* </video> */}

    <p><button id="start" onClick={() => startCapture()}>Share Screen</button>&nbsp;<button id="stop">Stop Screenshare</button></p>

    <br/>
    <p><button id="start" onClick={() => startCamera()}>Turn on Camera</button>&nbsp;<button id="stop">Turn Off Camera</button></p>
    <br/>
    <video id="video" autoPlay width='70%' height='auto'></video>
    <br />

    <strong>Log:</strong>
    <br />
    <pre id="log"></pre>

    <br/>



  </div>
};

Meet.propTypes = {};

Meet.defaultProps = {};

export default Meet;
