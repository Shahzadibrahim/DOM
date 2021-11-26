window.addEventListener("keydown", (e)=>{
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (audio) {
		audio.play()
		audio.queryTime = 0;
		key.classList.add("playing")
	}
	return
})
	let key2 = document.querySelectorAll(".key")
	key2.forEach((e)=>{
		e.addEventListener("transitionend", remove)

	})
	function remove(key3) {
		if (key3.propertyName = "transform") {
			this.classList.remove("playing")
		}
		return
	}


	  