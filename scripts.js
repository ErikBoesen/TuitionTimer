const start = document.getElementById('start'),
      stop = document.getElementById('stop'),
      tuition = document.getElementById('tuition'),
      started = document.getElementById('started'),
      stopped = document.getElementById('stopped'),
      clock = document.getElementById('clock');
console.log(start);
console.log(stop);
console.log(tuition);
console.log(started);
console.log(stopped);

function ts() {
    return parseInt(new Date().getTime() / 1000);
};
function round(num) {
    return parseInt(num * 100) / 100;
};

start.onclick = function() {
    localStorage.tuition = tuition.value;
    localStorage.startTime = ts();
    render();
};

stop.onclick = function() {
    running = false;
};

function render() {
    started.style.display = running ? 'block' : 'none';
    stopped.style.display = running ? 'none' : 'block';
    if (localStorage.startTime) {
        clock.textContent = '$' + ((ts - localStorage.startTime) * tuition / 365 / 24 / 60 / 60);
    }
}
setInterval(render, 1000);
render();

