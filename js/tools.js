//LOGGING LEVEL
var LOG_LEVEL_NONE = "NONE";
var LOG_LEVEL_ERROR = "ERROR";
var LOG_LEVEL_INFO = "INFO";
var LOG_LEVEL_DEGUB = "DEBUG";
var LOGGER_LEVEL = LOG_LEVEL_NONE;

function logger(level, event) {
    if (LOGGER_LEVEL == level) {
        console.log(event);
    }
}

function pageIndentifier() {
    var path = window.location.pathname;
    var fullpath = window.location;
    var page = path.split("/").pop();
    logger(LOG_LEVEL_DEGUB, "page:" + page);
    logger(LOG_LEVEL_DEGUB, "fullpath:" + fullpath);
    return page;
}

// function mylog(){
//   console.log("ekana click");
// }
// document.getElementById("leytonButton").onclick = function() {mylog()};