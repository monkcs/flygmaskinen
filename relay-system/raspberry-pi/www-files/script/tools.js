/* Animate.css function */
function animateObject(objectToAnimate, animationName) {
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $(objectToAnimate).addClass("animated " + animationName).one(animationEnd, function () {
        $(objectToAnimate).removeClass("animated " + animationName);
    });
}

function ajaxCall(dataToSend, urlToPostTo) {
    $.ajax({
        url: urlToPostTo
        , type: 'POST'
        , data: dataToSend
        , dataType: 'json'
    }).done(function () {
        alert("Ajax: returned with no errors");
    }).fail(function (e) {
        // Check if we have internet connection and infor the user
        console.log("Ajax: returned with errors, " + e.message);
        console.log($(this));
    })
}


/* Enter fullscreen mode */
function launchFullscreen(element) {
    if (typeof element === "undefined") {
        // Set element to the whole page
        element = document.documentElement;
        console.log("Fullscreen API: launching whole page into fullscreen");
    }
    else {
    }
    if (element.requestFullscreen) {
        element.requestFullscreen();
        console.log("Fullscreen API: page launched in fullscreen");
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        console.log("Fullscreen API: page launched in fullscreen via mozilla request");
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        console.log("Fullscreen API: page launched in fullscreen via webkit request");
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        console.log("Fullscreen API: page launched in fullscreen via ms request");
    }
}
 function launchLandscape (event) {
        if (document.fullscreenEnabled) {
            // User are in fullscreen
            screen.orientation.lock("landscape-primary");
        }
        if (document.mozFullscreenEnabled) {
            // User are in fullscreen
            screen.orientation.lock("landscape-primary");
        }
        if (document.webkitFullscreenEnabled) {
            // User are in fullscreen
            screen.orientation.lock("landscape-primary");
        }
    }

//var lostConnectionDomElement = document.getElementById("");

// Alert the user that the connection is lost
function LostConnection(isLost) {
    if(isLost == true)
        {
            return;
        }
    else {
        
    }
}
