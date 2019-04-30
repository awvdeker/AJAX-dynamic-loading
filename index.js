var links = document.getElementsByTagName('a');

for (let link of links){
  link.addEventListener('click',function(){
    //scroll up to the to of the window
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //start loading icon
    var spinner = document.createElement("i");
    spinner.classList.add("fas","fa-spinner","fa-spin","ml-2");
    link.parentNode.parentNode.parentNode.appendChild(spinner);

    ajaxLoading(link.id+'.html');
  });
}

function ajaxLoading(url){
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    document.getElementById('contentHolder').innerHTML = xhr.responseText;
    //stop loading icon
    setTimeout(function(){
      var spinner = document.querySelector('.fas');
      spinner.parentNode.removeChild(spinner);
    },500);
  };

  xhr.open('GET',url,true);
  xhr.send(null);
}
