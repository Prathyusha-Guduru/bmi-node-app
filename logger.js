const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("logging", { data: "message" });
  }
}

module.exports = Logger;
