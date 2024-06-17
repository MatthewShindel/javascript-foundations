function createMeal(name, specialRequests, tableNumber) {
	return {
		name: name,
		specialRequests: specialRequests,
		tableNumber: tableNumber,
		complete: false
	}
}

function getMade(meal) {
	meal.complete = true;
	return meal;
}

function announceMeal(meal) {
	if(meal.complete){
		return `Order up - ${meal.name} for table ${meal.tableNumber}!`
	}else{
		return `This ${meal.name} is not completed yet`
	}
}

function createOrder(order) {
	return {
		tableNumber : order.name,
		meals: order.meals,
		completedMeals: []
	}
}

function cookMeal(order, targetMeal) {
	if(order.tableNumber !== targetMeal.tableNumber){
		return order
	}
	for (let meal of order.meals) {
		if (meal.name === targetMeal.name) {
			order.completedMeals.push(targetMeal.name);
			return order
		}
	}
	return order
}

function listOrders(order) {
	let orderNames = []
	for(let meal of order.meals){
		orderNames.push(meal.name)
	}
	return orderNames
}

function listSpecialRequests(order) {
	let specialRequests = []
	for (let meal of order.meals){
		specialRequests = specialRequests.concat(meal.specialRequests)
	}
	return specialRequests;
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
