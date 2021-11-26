const box = document.getElementById('date')

const theBeginningOfaRelationship = new Date ('2021, 10, 26 00:30:00');

function setDate(){
    let today = new Date ();
    let days = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60*24));
    let hours = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60*60));
    let minutes = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000*60));
    let seconds = Math.floor((today.getTime() - theBeginningOfaRelationship.getTime())/(1000));

    let pureHours = hours-(days*24)
    let pureMinutes = minutes-(hours*60)
    let pureSeconds = seconds-(minutes * 60)
    box.innerHTML = days + ' дней ' + pureHours + ' часов ' + pureMinutes + ' минут ' + pureSeconds + ' секунд'
}

setDate()
setInterval(setDate, 1000)