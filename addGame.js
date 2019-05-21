
var targ=document.querySelector('#addButton');
targ.addEventListener('click', clickHandler, false);

function clickHandler(e)
{
  var pan=document.querySelector('#gamePanel')
  pan.style.zIndex=3;
}

function clickGame(e)
{
  var genreValue=document.getElementById("genre").value;
  var genre="stratGames";
  switch (genreValue) {
    case "0": genre="stratGames";break;
    case "1": genre="rpgGames";break;
    case "2": genre="simGames";break;
    case "3": genre="shootGames";break;
  }
  var name="";
  name=document.getElementById("name").value;
  if (name!="")
  {
    addNewGame(genre, "default.png",name)
    var pan=document.querySelector('#gamePanel')
    pan.style.zIndex=-1;
  }
  return false;
}

function addNewGame(genre, image, name)
{
  var list=document.querySelector('#'+genre+' ul')
  var itemList=document.createElement('li');
  var fig='<figure><a href="#">Añadir</a><img src="img/'+image+'" alt=""></figure>';
  var tit='<p>'+name+'</p>';
  itemList.innerHTML = fig+tit;
  list.appendChild(itemList);
}
