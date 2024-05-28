function createMaterial(name,unit,costPerUnit){
	return{
		name: name,
		unit: unit,
		costPerUnit: costPerUnit
	};
}

function calculateMaterialCost(material,total){
	return `${total} ${material.unit}s of ${material.name} costs $${material.costPerUnit * total}.`
}

function createSupplyCloset(array){
	var myCloset = {
		supplies: []
	};
	var supplies = [];
	if(array === undefined){
		return myCloset;
	}
	for(var i = 0; i< array.length; i++){
		supplies.push(array[i].name)
	}
	myCloset.supplies = supplies;
	return myCloset;
}

function addSupply(closet,newItem){
	for (var i = 0; i < closet.supplies.length; i++){
		// console.log("in for loop")
		// console.log(closet.supplies[i] , newItem.name);
		if(closet.supplies[i] === newItem.name){
			return `You already have ${newItem.name} in your closet!`
		}
	}
	closet.supplies.push(newItem.name);
	return closet.supplies;
}




module.exports = {
	 createMaterial,
   calculateMaterialCost,
   createSupplyCloset,
   addSupply,
  //createNewProject,
  // compareMaterials
}