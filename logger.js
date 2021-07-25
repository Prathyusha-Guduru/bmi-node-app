let url = "http://lol_log/log";

function log(message) {
  console.log(message);
}

module.exports.log = log;
module.exports.url = url;

console.log(module);
