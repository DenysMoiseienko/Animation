var body, num, array, width, context, logo, elements, analyser, src, height;

var AudioContext = window.AudioContext || window.webkitAudioContext;

body = document.querySelector('body');
num = 32;
array = new Uint8Array(num * 2);
width = 30;

window.onclick = function() {
    if(context) return;
    
    createElements();

    context = new AudioContext;
    analyser = context.createAnalyser();
    
    navigator.mediaDevices.getUserMedia({
        audio: true
    }).then(stream => {
        src = context.createMediaStreamSource(stream);
        src.connect(analyser);
        loop()
    }).catch(error => {
        alert(error + '\r\n Something went wrong(')
        location.reload();
    });
}

function loop() {
    window.requestAnimationFrame(loop);
    analyser.getByteFrequencyData(array);
    
    setElements();
}

function createElements() {
    body.querySelector('h1').remove();
    for(var i = 0; i < num; i++) {
        logo = document.createElement('div');
        logo.className = 'logo';
        logo.style.background = "red";
        logo.style.minWidth = width + 'px';
        body.appendChild(logo);
    }
    elements = document.getElementsByClassName('logo');
}

function setElements(){
    for(var i = 0; i < num; i++) {
        height = array[i + num];
        elements[i].style.minHeight = height + 'px';
        elements[i].style.opacity = 0.008 * height;
    }
}