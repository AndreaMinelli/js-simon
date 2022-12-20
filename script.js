//Targhettizzo gli elementi in pagina
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

//Recupero la data di chiusura del countdown
const countdownDate = new Date("January 1, 2023 00:00:00").getTime();

//Creo funzione per il countdown
const getCountdown = () => {
  const now = new Date().getTime();
  const time = countdownDate - now;

  //Calcolo i giorni, ore, minuti e secondi mancanti
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  //Stampo il risultato in pagina
  daysElement.innerText = days < 10 ? `0${days}` : days;
  hoursElement.innerText = hours < 10 ? `0${hours}` : hours;
  minutesElement.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsElement.innerText = seconds < 10 ? `0${seconds}` : seconds;

  return time;
};

getCountdown();

//Creo funzione per aggiornare countdown
const countdown = setInterval(() => {
  const time = getCountdown();
  //Imposto chiusura countdown
  if (time < 0) clearInterval(countdown);
}, 1000);
