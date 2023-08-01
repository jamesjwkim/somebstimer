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

function confirmTime() {
    const t = new Date();

    const fullTime = new Date().toLocaleTimeString();
    console.log("fullTime " + fullTime)
    const firstFullTime = fullTime.charAt(0);
    console.log("firstFullTime " + firstFullTime);

    const hour = t.getHours() > 12 ? t.getHours() - 12 : t.getHours();

    console.log(hour)

    // const hourToString = hour.toString();
    // console.log("hourToString " + hourToString);
    const num = 6;
    const hourToString = num.toString();

    if(hourToString == firstFullTime) {
        console.log("it matches!")
        document.getElementById("clockTest").innerHTML = "Yes!";
    } else {
        console.log("it does not match!");
        document.getElementById("clockTest").innerHTML = "No!";
    }
}
confirmTime();