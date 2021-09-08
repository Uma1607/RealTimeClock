
// function used to move the hour,minute and second hands of the clock
setInterval(() => {
    // reading the current date and time 
    d = new Date();
    //reading the current hours , minutes and seconds using --> get Hours,Minutes and Seconds functions
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    // (12hours=1cycle--> total 360deg/12h --> 1h=30deg)
    //moving the hour hand 30 degrees every hour 
    // (1hour=60min--> 60min=30deg --> 30deg/60min=>1/2 as mtime/2)
    hrotation = 30*htime + mtime/2; //number of degrees to move the hour hand
    // (1hour=60min--> total 360deg/60min --> 1min-->6deg)
    mrotation = 6*mtime; //number of degrees to move the minute hand
    // (1min=60sec--> total 360deg/60sec --> 1sec-->6deg)
    srotation = 6*stime; //number of degrees to move the seconds hand

    //applying the rotation in degrees on the clock hands using tranform and rotate
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000 //calculating for every second
);