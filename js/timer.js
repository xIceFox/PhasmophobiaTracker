let start = new Date().getTime();
let timer = setInterval(function() {

    let now = new Date().getTime();

    let distance = now - start;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

}, 1000);