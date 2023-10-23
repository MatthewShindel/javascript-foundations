function createDragon(name, rider, temperment){
  return dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
    fireBreather: (temperment === "aggressive")
  };
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}
function eat(dragon){
  dragon.timesEaten++;
  if (dragon.timesEaten >= 3){
    dragon.hungry = false;
  }
  return dragon;
}
function findFireBreathers(arrayOfDragons){
  var finalArray = [];
  for(var i = 0; i < arrayOfDragons.length; i++){
    if(arrayOfDragons[i].fireBreather){
      finalArray.push(arrayOfDragons[i])
    }
  }
  return finalArray;
}


module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}