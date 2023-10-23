function createBirthday(name, month, day){
    return {
        name: name,
        month: month,
        day: day
    }
}

function celebrateBirthday(birthday){
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`;
}

function countBirthdays(birthdayArray , month){
    var birthdayTotal = 0;
    for(var i = 0; i < birthdayArray.length; i++){
        if(birthdayArray[i].month === month){
            birthdayTotal ++;
        }
    }
    return birthdayTotal;
}



module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays

};