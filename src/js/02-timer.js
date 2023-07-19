// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from "notiflix";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < options.defaultDate) {
//       Notiflix.Notify.failure("Please choose a date in the future");
//       startBtnRef.disabled = true;
//     } else {
//       startBtnRef.disabled = false;
//       Notiflix.Notify.success("OK");
//     }
//   },
// };

// const startBtnRef = document.querySelector("button[data-start]");
// const inputRef = document.querySelector("#datetime-picker");

const contentDays = document.querySelector('.value[data-days]');
const contentHours = document.querySelector('.value[data-hours]');
const contentMinutes = document.querySelector('.value[data-minutes]');
const contentSeconds = document.querySelector('.value[data-seconds]');

// startBtnRef.setAttribute("disabled", true);

// flatpickr(inputRef, options);

// class Timer {
//   constructor() {
//     this.isActive = false;
//     this.intervalid = null;
//   }

//   addLeadingZero(value) {
//     return String(value).padStart(2, "0");
//   }

//   convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = this.addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = this.addLeadingZero(
//       Math.floor(((ms % day) % hour) / minute)
//     );
//     // Remaining seconds
//     const seconds = this.addLeadingZero(
//       Math.floor((((ms % day) % hour) % minute) / second)
//     );

//     return { days, hours, minutes, seconds };
//   }

//   start() {
//     startBtnRef.disabled = true;

//     this.intervalID = setInterval(() => {
//       let deltaTime = Date.parse(inputRef.value) - Date.now();
//       let resolt = this.convertMs(deltaTime);
//       updateClock(resolt);
//       if (deltaTime < 0) {
//         clearInterval(this.intervalID);
//         resolt = this.convertMs(0);
//         updateClock(resolt);
//         startBtnRef.disabled = false;
//       }
//     }, 1000);
//   }
// }

// const timer = new Timer();

// startBtnRef.addEventListener("click", timer.start.bind(timer));

// function updateClock({ days, hours, minutes, seconds }) {
//   contentDays.textContent = `${days}`;
//   contentHours.textContent = `${hours}`;
//   contentMinutes.textContent = `${minutes}`;
//   contentSeconds.textContent = `${seconds}`;
// }

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePickerRef = document.querySelector('#datetime-picker');
const startBtnRef = document.querySelector('button[data-start]');

startBtnRef.addEventListener('click', onStartBtnRefClick);

let selectedDate = null;

function onStartBtnRefClick() {
  const idInterval = setInterval(() => {
    const currentData = new Date();
    let delta = selectedDate - currentData;
    if (delta > 1) {
      delta -= 1000;
      // console.log(convertMs(delta));
      updateClock(convertMs(delta));
    } else {
      clearInterval(idInterval);
    }
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate > selectedDates[0]) {
      alert(`The end date cannot be earlier than the starting date.`);
      return;
    }
    startBtnRef.disabled = false;
    selectedDate = selectedDates[0];
  },
};

function updateClock({ days, hours, minutes, seconds }) {
  contentDays.textContent = `${days}`;
  contentHours.textContent = `${hours}`;
  contentMinutes.textContent = `${minutes}`;
  contentSeconds.textContent = `${seconds}`;
}

flatpickr(datetimePickerRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  value = String(value).padStart(2, '0');
}

class Timer {
  constructor() {}

  start() {}
  stop() {}
}
