window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./js/github.js"}
        // {url: "./js/Api.js"}

    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
        var token = "8f4a01d2d64f5d7898b1f9485d42095fe1c68c5b";

        new GithubClient(token);
    })

}