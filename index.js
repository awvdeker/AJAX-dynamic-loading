
var xhr = new XMLHttpRequest();

xhr.onload = function () {
  document.getElementById('contentHolder').innerHTML = xhr.responseText;
};

xhr.open('GET','one.html',true);
xhr.send(null);
