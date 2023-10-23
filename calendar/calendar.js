function createEvent(title,month,day){
    if(day > 31 || day < 1){
        return `Error: ${day} is not a valid day`
    }
    return {
        title: title,
        month: month,
        day: day
    }
}

function createCalendar(owner, events){
    return {
        owner : owner,
        events : events
    }
}
function reportMonthlyEvents(calendar,month){
    var monthlyEvents = [];
    for(var i = 0; i < calendar.events.length; i++){
        if (calendar.events[i].month === month){
            monthlyEvents.push(calendar.events[i])
        }
    }
    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};