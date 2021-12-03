const box = document.getElementById('date')

const dayOfBeginningOfaRelationship = '26'
const monthOfBeginningOfaRelationship = '10'
const yearOfBeginningOfaRelationship = '2021'
const theBeginningOfaRelationship = new Date ('2021-10-26 00:30:00'.replace(/\s/, 'T'));

const daysWord = [' день ', ' дня ', ' дней ']
const hoursWord = [' час ', ' часа ', ' часов ']
const minutesWord = [' минута ',' минуты ', ' минут ' ]
const monthsWord = [' месяц ', ' месяца ', ' месяцев ']
const secondsWord = [' секунда ', ' секунды ', ' секунд ']

function word(num, arr){
    let tmp = num.toString().split('').reverse()[0]
    if(tmp == 1 && num != 11){
        return(arr[0])
    }else if (tmp == 2 || tmp == 3 || tmp == 4 && num.length < 2){
        return(arr[1])
    }else{
        return(arr[2])
    }   
}

function setDate(){
    let today = new Date();
    let days = parseInt(Math.floor((parseInt(today.getTime()) - parseInt(theBeginningOfaRelationship.getTime()))/(1000*60*60*24)));
    let hours = parseInt(Math.floor((parseInt(today.getTime()) - parseInt(theBeginningOfaRelationship.getTime())))/(1000*60*60));
    let minutes = parseInt(Math.floor((parseInt(today.getTime()) - parseInt(theBeginningOfaRelationship.getTime()))/(1000*60)));
    let seconds = parseInt(Math.floor((parseInt(today.getTime()) - parseInt(theBeginningOfaRelationship.getTime()))/(1000)));

    let pureHours = hours-(days*24)
    let pureMinutes = minutes-(hours*60)
    let pureSeconds = seconds-(minutes * 60)

    let pureMonths = ''

   function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

    if(today.getDate() >= theBeginningOfaRelationship.getDate()){
        pureMonths = monthDiff(theBeginningOfaRelationship, today).toString().concat('  месяц ')
        days = today.getDate() - theBeginningOfaRelationship.getDate()
    }else if(today.getDate() < theBeginningOfaRelationship.getDate()){
        pureMonths = (monthDiff(theBeginningOfaRelationship, today)-1).toString().concat('  месяц ')
        days = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate() - theBeginningOfaRelationship.getDate() + today.getDate()
    }

    box.innerHTML = pureMonths.concat(window.innerWidth < 600 ? '<br>': '', days, word(days, daysWord),window.innerWidth < 600 ? '<br>': '', pureHours, word(pureHours, hoursWord),window.innerWidth < 600 ? '<br>': '', pureMinutes, word(pureMinutes, minutesWord),window.innerWidth < 600 ? '<br>': '', pureSeconds, word(pureSeconds,secondsWord))
}

setDate()
setInterval(setDate, 1000)