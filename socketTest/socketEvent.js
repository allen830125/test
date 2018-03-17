module.exports = function (io) {
    require("./event/timer")(io); //setup socket io event
    require("./event/chat")(io); //setup socket io event
};