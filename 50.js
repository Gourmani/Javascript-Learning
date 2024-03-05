setInterval(() => {
    let date = new Date();
    let options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit",
        second: "2-digit",
    };

    let d = date.toLocaleString("en-us", options);
    let timeElement = document.getElementById("time");
    
    if (timeElement) {
        timeElement.innerHTML = d;
    }
}, 1000);
