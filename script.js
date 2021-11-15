const box = document.getElementById('date')

const theBeginningOfaRelationship = new Date ('2021, 10, 26 00:30:00');

function setDate(){
    let today = new Date ();
    let days = Number(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60*24)));
    let hours = Number(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60)));
    let minutes = Number(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60)));
    let seconds = Number(Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000)));
    box.innerHTML = (Number(days)) + ' дней ' + (Number(hours-(days*24))) + ' часов ' + (Number(minutes-(hours*60))) + ' минут ' + (Number(seconds-(minutes * 60))) + ' секунд'
}

setDate()
setInterval(setDate, 1000)