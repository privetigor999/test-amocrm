const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    const interval = setInterval(function() {
      const hour = Math.floor((seconds / 3600) % 60);
      const minute = Math.floor((seconds / 60) % 60);
      const sec = seconds % 60;
      if (seconds < 0) {
        clearInterval(interval);
      } else {
        timerEl.textContent = `${hour > 9 ? hour : `0${hour}`}:${
          minute > 9 ? minute : `0${minute}`
        }:${sec > 9 ? sec : `0${sec}`}`;
      }
      seconds -= 1;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  if (!inputEl.value || !inputEl.value.match(/[0-9]/g)) {
    return (inputEl.value = "");
  }
  inputEl.value = inputEl.value.match(/[0-9]/g).join("");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
