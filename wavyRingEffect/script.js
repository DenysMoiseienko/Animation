(() => {
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');

    function init() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    }
    init();

    let numberofRings = 3;
    let ringRadiusOffset = 7;
    let colors = ['#771122', '#bb1122', '#ff1122'];
    let waveOffset = 15;
    let ringRadius = 200;
    let startAngle = 0;

    function updateRings() {
        for(let i = 0; i < numberofRings; i++) {
            let radius = ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }
        startAngle >= 360 ? startAngle = 0 : startAngle++;
    }

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let maxWaveAmplitude = 17;
    let numbersOfWaves = 7;

    function drawRing(radius, color, offsetAngle) {
        context.strokeStyle = color;
        context.lineWidth = 10;

        context.beginPath();

        for(let j = -180; j < 180; j++) {
            let currentAngle = (j + startAngle) * Math.PI / 180;
            let displacement = 0;
            let now = Math.abs(j);

            if(now > 70) {
                displacement = (now - 70) / 70;
            }
            if(displacement >= 1) {
                displacement = 1;
            }

            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numbersOfWaves) * maxWaveAmplitude;

            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            j > -180 ? context.lineTo(x, y) : context.moveTo(x, y);
            context.lineTo(x, y);
        }
        context.closePath();
        context.stroke();
    }

    function loop() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();

    window.addEventListener('resize', init);

})();