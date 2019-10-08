export class Camera{};
let camera = new Camera;

camera = { audio: false, video: true}
let front = false;
const click = document.getElementById("rotate-camera");
console.log(front);
camera = click.addEventListener("click", e => {
      if(front === false){
        front = true,  console.log(true)
      }else{ front = false, console.log(false)}
      e =  { audio: false, video: {facingMode: ( front? "user" : "environment") }}
      console.log(e);

navigator.mediaDevices.getUserMedia(e)
.then(function(mediaStream) {
  let video = document.querySelector('#app-video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end

}
);

