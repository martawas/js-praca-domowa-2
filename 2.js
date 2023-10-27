// 2.	Create a function that returns number of days till Friday

function daysTillFriday(){
    let date = new Date()
    let dayNumber = date.getDay()
    let daysTillFriday = 5 - dayNumber
    if(daysTillFriday < 0) {
        daysTillFriday = 5 - daysTillFriday
    }
    return daysTillFriday;

}
console.log(daysTillFriday());
