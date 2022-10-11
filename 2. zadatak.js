var s = "Ovo je string";

var middle = Math.floor(s.length / 2);
var before = s.lastIndexOf(' ', middle);
var after = s.indexOf(' ', middle + 1);

var prvi = s.substr(0, middle);
var drugi = s.substr(middle + 1);

console.log(drugi)