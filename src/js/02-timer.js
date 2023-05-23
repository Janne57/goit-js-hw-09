import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    start: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}

refs.start.addEventListener ('click', () => {
    timer.start();
});

let futureDay;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    futureDay = selectedDates[0];
      
    if (futureDay.getTime() < Date.now() ) {
       Notiflix.Notify.failure("Please choose a date in the future");
       return
    } 
    else {
        refs.start.disabled = false;
    }
    },
  };
  

refs.start.disabled = true;
const futureDate = flatpickr('#datetime-picker', options);  

const timer = {
    
  
    start() {        
        intervalId  = setInterval(() => {
            const currentDay = Date.now();
            const deltaTime = futureDay.getTime() - currentDay;
            const time = convertMs(deltaTime);
            updateTime(time);
        
            if (deltaTime <= 990) {
                clearInterval(intervalId);
                Notiflix.Notify.warning("TIMER STOP!!!");
                }
        },
        1000);       
}, 
};


function updateTime({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
};


function addLeadingZero(value) {
    return String(value).padStart(2, '0'); 
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
  };

