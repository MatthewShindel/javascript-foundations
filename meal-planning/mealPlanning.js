
function createMeal(type, calorieGoal) {
	return {
		type: type,
		calorieGoal: calorieGoal,
		dishes: []
	}
}

function addDish(meal, dish) {
	if (dish.calories <= meal.calorieGoal) {
		// console.log(dish.calories, meal.calorieGoal);
		meal.dishes.push(dish)
		meal.calorieGoal -= dish.calories;
	}
	return meal
}

function calculateCalories(meal) {
	let totalCalorieCount = 0
	meal.dishes.forEach(dish => {
		totalCalorieCount += dish.calories 
	});
	return `${meal.type} has a total of ${totalCalorieCount} calories.`
}


module.exports = { createMeal, addDish,calculateCalories }