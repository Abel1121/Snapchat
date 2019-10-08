// init camera
import {Camera} from "./camera.js";

new Camera().facingMode;

  navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    devices.forEach(function(device) {
        if (device.kind === "videoinput"){
      console.log(device.kind + ": " + device.label +
                  " id = " + device.deviceId);
        }
    });
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });