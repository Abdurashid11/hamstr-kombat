const coinCountElement = document.getElementById('coin-count');
const clickButton = document.getElementById('click-button');

let coinCount = 0;

function incrementCoins() {
    coinCount++;
    coinCountElement.textContent = coinCount;
}

clickButton.addEventListener('click', incrementCoins);
