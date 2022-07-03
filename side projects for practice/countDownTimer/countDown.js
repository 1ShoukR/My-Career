const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const dayISeeHer = '1 Sep 2022';

countdown = () => {
    const bestDayEver = new Date(dayISeeHer);
    const currentDate = new Date();

    const totalSeconds = (bestDayEver - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    
    
    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds


    console.log(days, hours, minutes, seconds);
};

countdown();

setInterval(countdown, 1000);
