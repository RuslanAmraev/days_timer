const box = document.getElementById('date')

const theBeginningOfaRelationship = new Date ('2021, 10, 26 00:30:00');

function setDate(){
    let today = new Date ();
    let days = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60*24));
    let hours = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60));
    let minutes = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60));
    let seconds = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000));
    box.innerHTML = days + ' дней ' + (hours-(days*24)) + ' часов ' + (minutes-(hours*60)) + ' минут ' + (seconds-(minutes * 60)) + ' секунд'
}

setDate()
setInterval(setDate, 1000)