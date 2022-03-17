const box = document.getElementById('date')

const dayOfBeginningOfaRelationship = '26'
const monthOfBeginningOfaRelationship = '10'
const yearOfBeginningOfaRelationship = '2021'
const theBeginningOfaRelationship = new Date ('2021-10-26 00:30:00'.replace(/\s/, 'T'));

const daysWord = [' день ', ' дня ', ' дней ']
const hoursWord = [' час ', ' часа ', ' часов ']
const minutesWord = [' минута ',' минуты ', ' минут ' ]
const monthsWord = [' месяца ', ' месяца ', ' месяцев ']
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
        pureMonths = monthDiff(theBeginningOfaRelationship, today).toString().concat('  месяца ')
        days = today.getDate() - theBeginningOfaRelationship.getDate()
    }else if(today.getDate() < theBeginningOfaRelationship.getDate()){
        pureMonths = (monthDiff(theBeginningOfaRelationship, today)-1).toString().concat('  месяца ')
        days = new Date(today.getFullYear(), today.getMonth() - 1, 0).getDate() - theBeginningOfaRelationship.getDate() + today.getDate()
    }

    box.innerHTML = pureMonths.concat(window.innerWidth < 600 ? '<br>': '', days, word(days, daysWord),window.innerWidth < 600 ? '<br>': '', pureHours, word(pureHours, hoursWord),window.innerWidth < 600 ? '<br>': '', pureMinutes, word(pureMinutes, minutesWord),window.innerWidth < 600 ? '<br>': '', pureSeconds, word(pureSeconds,secondsWord))
}

setDate()
setInterval(setDate, 1000)

// document.getElementsByClassName('santa-2')[0].addEventListener('click', ()=>{
//     document.getElementsByClassName('santa-1')[0].style.display = 'block'
//     document.getElementsByClassName('santa-2')[0].style.display = 'none'
// })

// document.getElementsByClassName('santa-1')[0].addEventListener('click', ()=>{
//     document.getElementsByClassName('santa-2')[0].style.display = 'block'
//     document.getElementsByClassName('santa-1')[0].style.display = 'none'
// })


let dragon = document.getElementById('dragon')

let point = window.innerWidth * -1

function moveDragon(){
    if(isNaN(parseInt(dragon.style.left.split('p')[0]))){
        dragon.style.left = 500 + 'px'
    }else{
        if(parseInt(dragon.style.left.split('p')[0]) != point){
            if(point > 0){
                dragon.style.left = parseInt(dragon.style.left.split('p')[0]) + 1 + 'px'
            }else{
                dragon.style.left = parseInt(dragon.style.left.split('p')[0]) - 1 + 'px'
            }
        }else{
            if(point < 0){
                point = window.innerWidth + 400
                dragon.style.transform = 'scaleX(1)'
                dragon.style.top = Math.random() * (60 - 10) + 10 + '%';
            }else{
                point = (window.innerWidth + 400) * -1
                dragon.style.transform = 'scaleX(-1)'
                dragon.style.top = Math.random() * (60 - 10) + 10 + '%';
            }
        }
    }
}


setInterval(() => {
    moveDragon()
}, 1);

