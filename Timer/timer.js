let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function startStop() {
      if (!timer) {
        timer = setInterval(updateTime, 1000);
      } else {
        clearInterval(timer);
        timer = null;
      }
    }

    function updateTime() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }

      displayTime();
    }

    function displayTime() {
      const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
      document.getElementById('stopwatch').textContent = formattedTime;
    }

    function reset() {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      minutes = 0;
      hours = 0;
      displayTime();
    }

    function padNumber(number) {
      return number < 10 ? `0${number}` : number;
    }