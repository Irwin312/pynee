var button = document.getElementById('playBut')
button.onclick = function() {
	var audio = new Audio("./resource/sound.mp3")
	audio.loop = true
	audio.play()
	document.getElementById("button").remove()
	document.body.innerHTML = `
    <style>
    body {
        overflow: hidden;
        padding: 0;
        margin: 0;
        background: rgb(0, 0, 0);
    }
    
    canvas {
        position: absolute;
        
        width: 100%;
        height: 100%;
    }
    
    canvas {
        z-index: 1;
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);
        animation: heart 1.5s ease infinite
    }
    
    @keyframes heart {
        0% {
            transform: scale(1);
        }
        30% {
            transform: scale(.8);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
<div class="sp-container">
    <div class="sp-content">
        <div class="sp-globe"></div>
        <h2 class="frame-1">Pyenn</h2>
    </div>
</div>
<canvas id="pinkboard">
    <canvas id="pinkboard">
    </canvas>
</canvas>
                `
	var s = document.createElement('script');
	s.setAttribute('src', "./script/heart.js")
	document.body.appendChild(s)
}