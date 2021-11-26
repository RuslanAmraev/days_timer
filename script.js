const box = document.getElementById('date')


const dayOfBeginningOfaRelationship = '26'
const monthOfBeginningOfaRelationship = '10'
const yearOfBeginningOfaRelationship = '2021'
const theBeginningOfaRelationship = new Date ('2021, 10, 26 00:30:00');

function setDate(){
    let today = new Date ();
    let days = parseInt(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60*24)));
    let hours = parseInt(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60)));
    let minutes = parseInt(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60)));
    let seconds = parseInt(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000)));

    let pureHours = hours-(days*24)
    let pureMinutes = minutes-(hours*60)
    let pureSeconds = seconds-(minutes * 60)

    let pureMonths = ''

    // if(
    //     today.getDate() >= dayOfBeginningOfaRelationship-0
    // ){
    //     pureMonths = today.getMonth() - (monthOfBeginningOfaRelationship-0) + 'месяц '
    // }

    box.innerHTML = pureMonths.concat(days, ' дней ', pureHours, ' часов ', pureMinutes, ' минут ', pureSeconds, ' секунд')
}

setDate()
setInterval(setDate, 1000)