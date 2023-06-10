export function updateCountdown(): any {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("timer-days").innerHTML = days.toString();

    document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2);

    document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2);

    document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2);
  } else {
    document.getElementById("timer").innerHTML =
      '<div class="alert alert-danger alert-dismissible fade show" role="alert">The time is over. If you see this message, please reload your browser window.</div>';
  }
}

let endDate = new Date("2020-09-15T08:00:00Z").getTime();
// let endDate = new Date("2020-08-20T09:00:00Z").getTime();

let timer = setInterval(updateCountdown, 1000);

let reload = setTimeout(function () {
  window.location.reload();
}, 60000);

export { timer, reload };
