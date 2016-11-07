var gyrox = document.getElementById("meter-gyro-x");
var gyroy = document.getElementById("meter-gyro-y");
var gyroz = document.getElementById("meter-gyro-z");
/* Main OnLoad function */
window.onload = function () {
    console.log("Javascript: DOM loaded");
    setupGyro();
    setupEvents();
    //setupServiceWorker();
};

function setupEvents() {
    console.log("Javascript: setting up document events");
    // Setting up resize of webgl object at window resize
    window.addEventListener('resize', function () {
        setRenderBoxSize();
    }, true);
    console.log("Window: event register on window resize");
    // Setting up gyro
    if (window.DeviceOrientationEvent) {
        console.log("DeviceOrientation API: is supported");
        window.addEventListener('deviceorientation', function (orientation) {
            gyro.x = Number(orientation.beta);
            gyro.y = Number(-orientation.gamma);
            gyrox.textContent = ~~orientation.beta;
            gyroy.textContent = ~~orientation.gamma;
            gyroz.textContent = ~~orientation.alpha;
        }, false);
        console.log("DeviceOrientation API: event register to gyro object");
    }
    RegisterEventhandler();
}