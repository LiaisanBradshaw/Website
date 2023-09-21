const N = 256;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const resize = () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
};
window.addEventListener('resize', resize);
resize();

const noise = (t) => Math.sin(t * 3.7 + 18) * Math.sin(-t * 5 + 1) * Math.sin(t * 7.3 + 3) * Math.random();

let t = 0;
const line = () => {
// Draw random line
const w = canvas.width;
const h = canvas.height;
ctx.strokeStyle= 'black';
ctx.strokeWidth = 4;


ctx.moveTo(0, h * 4 / 5);
ctx.beginPath();
for (let i = 0; i <= N; i++) {
const x = (noise(t + i / N) * 0.1) * h;
ctx.lineTo(w / N * i, x + h * 4 / 5);
}
ctx.moveTo(w, h * 4/ 5);
ctx.closePath();


ctx.stroke();

t++;
};

window.addEventListener('click', line);
setInterval(line, 100);

const shift = -3;
const loop = () => {
ctx.fillStyle = 'rgba(255, 255, 255, 0.005)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.drawImage(ctx.canvas, 0, 0, canvas.width, canvas.height-shift, 0, shift, canvas.width, canvas.height-shift);

requestAnimationFrame(loop);
}
loop();

var music=new Audio("sound/LostControl.mp3")
function playAudio(){
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
    
}