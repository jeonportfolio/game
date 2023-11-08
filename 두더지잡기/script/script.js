const mole = document.querySelector('.mole');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randomPosition() {
    const container = document.querySelector('.game-container');
    const maxX = container.clientWidth - mole.clientWidth;
    const maxY = container.clientHeight - mole.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    mole.style.left = randomX + 'px';
    mole.style.top = randomY + 'px';
}

mole.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    mole.style.display = 'none';
    randomPosition();
});

setInterval(() => {
    mole.style.display = 'block';
    setTimeout(() => {
        mole.style.display = 'none';
        randomPosition();
    }, 1000);
}, 2000);

randomPosition();