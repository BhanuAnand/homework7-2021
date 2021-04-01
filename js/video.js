var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
});

document.querySelector('#play').addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = document.querySelector('#slider').value+"%";
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow Down");
	console.log("Old speed: "+video.playbackRate);
	let speed = video.playbackRate;
	video.playbackRate = speed - speed*0.05;
	console.log("New speed: "+video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function() {
	console.log("Speed Up");
	console.log("Old speed: "+video.playbackRate);
	let speed = video.playbackRate;
	video.playbackRate = speed + speed*0.05;
	console.log("New speed: "+video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function() {
	console.log("Old location: "+video.currentTime);
	let newtime  = video.currentTime + 15;
	if(newtime>video.duration){
		video.currentTime = 0;
	}else{
		video.currentTime = newtime;
	}
	console.log("New location: "+video.currentTime);
});

document.querySelector('#vintage').addEventListener("click", function() {
	console.log("Old School");
	document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function() {
	console.log("Original");
	document.querySelector("#player1").classList.remove("oldSchool");
});

document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted) {
  		video.muted = false;
  		document.querySelector("#mute").innerHTML = "MUTE";
  		console.log("Video Unmuted");
	}else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "UNMUTE";
		console.log("Video Muted");
	}
});

document.querySelector('#slider').addEventListener("change", function() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value+"%";
	let vol = this.value/100;
	video.volume = vol;
	console.log(vol);
});
