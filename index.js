var links = document.getElementsByTagName('a');

for (let link of links){
  link.addEventListener('click',function(){
    //start loading icon

    ajaxLoading(link.id+'.html');
  });
}

function ajaxLoading(url){
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    document.getElementById('contentHolder').innerHTML = xhr.responseText;
    //stop loading icon

  };

  xhr.open('GET',url,true);
  xhr.send(null);
}
