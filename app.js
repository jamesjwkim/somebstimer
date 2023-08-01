function getTimeAndDate() {
    const dateTime = new Date();
    return dateTime.toLocaleTimeString();
}

const dateDisplay = document.getElementById("timeHolder");
dateDisplay.innerHTML = getTimeAndDate();

function getTimeAndDate2() {
    setTimeout(() => {
        const t = new Date().toLocaleTimeString();
        document.getElementById("timeHolder").innerHTML = t;
        getTimeAndDate2();
    }, 1000)  
}
getTimeAndDate2();
