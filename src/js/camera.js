export class Camera{};
let camera = new Camera;
camera = { audio: false, video: { width: 1980, height: 1024 } }; 

navigator.mediaDevices.getUserMedia(camera)
.then(function(mediaStream) {
  var video = document.querySelector('#app-video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end