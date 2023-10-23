function createVampire(name,pet){
  return {
    name: name,
    pet : pet || "bat",
    thirsty : true,
    ouncesDrank : 0
  }
}

function encounterDeliciousVictim(vampire){
  if(vampire.thirsty){
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return "No thanks, I am too full."
  }
}

function drink(vampire){
  if (vampire.thirsty === false){
    return vampire;
  }
  vampire.ouncesDrank += 10;
  if(vampire.ouncesDrank >= 50){
    vampire.thirsty = false;
  }
  return vampire;
}

function inquirePlace(locationsArray, location){
  for(var i = 0; i < locationsArray.length; i++){
    if (locationsArray[i] === location){
      return `Yes, I have spent some time in ${location}.`
    }
  }
  return `No, I have never been to ${location}.`
}

function findBatLovers(vampiresArray){
  var finalArray = [];
  for(var i = 0; i< vampiresArray.length; i++){
    if (vampiresArray[i].pet === 'bat'){
      finalArray.push(vampiresArray[i].name);
    }
  }
  return finalArray;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}