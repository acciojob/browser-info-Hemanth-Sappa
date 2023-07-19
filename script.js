//your JS code here. If required.
let div = document.createElement("div");
div.id = "browser-info";
div.innertext = "You are using " + browserName + " version " + version;
document.body.appendChild(div);