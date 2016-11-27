/* Register eventhandler for screen input */
function RegisterEventhandler() {
    document.getElementById("option-do-enter-landscape-fullscreen").addEventListener("click", function () {
        launchFullscreen();
    }, false);
    document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled) {
        // User are in fullscreen
        screen.orientation.lock("landscape-primary");
    }
});
    
    /* Left controls */
    
    document.getElementById("option-toggle-lightbeam").addEventListener("click", function (checkbox) {
        fetch(PostAction("lightbeam", checkbox.target.checked)).then(ValidateResponse).then(function (response) {
            // Do something if sucess
        }).catch(Packagelost);
    });
    document.getElementById("option-sound-siren").addEventListener("click", function (button) {
        fetch(PostAction("siren", true)).then(ValidateResponse).then(function (response) {
            // Do something if sucess
        }).catch(Packagelost);
    });
    document.getElementById("option-reset-gyro").addEventListener("click", function (button) {
            // Nolla gyro
    });
    document.getElementById("option-toggle-autosink").addEventListener("click", function (checkbox) {
        fetch(PostAction("autosink", checkbox.target.checked)).then(ValidateResponse).then(function (response) {
            // Do something if sucess
        }).catch(Packagelost);
    });
    document.getElementById("option-emergency-landing").addEventListener("click", function (button) {
        fetch(PostAction("emergencyland", true)).then(ValidateResponse).then(function (response) {
            // Inform that landing taking place
        }).catch(Packagelost);
    });
    document.getElementById("option-toggle-higher-altitude").addEventListener("click", function (checkbox) {
        fetch(PostAction("altitudeoffset", "0.3" /* offset in meters */)).then(ValidateResponse).then(function (response) {
            // Do something if sucess
        }).catch(Packagelost);
    });
    
    /* Right controls */
    
    document.getElementById("option-change-slidermode").addEventListener("click", function () {
        
    });

    
    
    /*
    document.getElementById("checkbox-id").addEventListener("click", function (checkbox) {
        fetch(PostAction("action-name", checkbox.target.checked)).then(ValidateResponse).then(function (response) {
            // Do something if sucess
        }).catch(Packagelost);
    });
    document.getElementById("button-id").addEventListener("click", function (button) {
        fetch(PostAction("action-is", true)).then(ValidateResponse).then(function (response) {
            
        }).catch(Packagelost);
    });
    */
}
