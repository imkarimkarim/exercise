document.addEventListener('DOMContentLoaded', function () {
    const initialCells = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
    const initialPlayer = 1;

    let currentCells = initialCells;
    let currentPlayer = initialPlayer;
    let finish = false;

    // createBoards
    const render = () => {
        console.log(currentCells);
        document.querySelector('.playerTurn').innerText = 'Player ' + currentPlayer;
        const gameBoard = document.querySelector('.gameBoard');
        let html = '';
        html = '';
        for (let i = 0; i < currentCells.length; i++) {
            let c = currentCells[i];
            if (c === null) {
                html += `<div id="${i}" class="cell"></div>`;
            } else if (c === 'red') {
                html += `<div id="${i}" class="cell red"></div>`;
            } else if (c === 'blue') {
                html += `<div id="${i}" class="cell blue"></div>`;
            }

            gameBoard.innerHTML = html;

            document.querySelectorAll('.gameBoard .cell').forEach((cell) => {
                cell.addEventListener('click', (e) => {
                    clickHandler(e);
                });
            });
        }
    };

    render();

    const rowCheck = (color = 'red') => {
        color = color === 'red' ? 'blue' : 'red';
        let flag = true;
        let win = true;
        let i2 = 0;
        while (i2 < 16 && flag) {
            win = true;
            for (let i = 0; i < 4; i++) {
                if (currentCells[i + i2] === color || currentCells[i + i2] === null) {
                    win = false;
                }
            }
            if (win) {
                flag = false;
            }
            i2 += 4;
        }
        return win;
    };

    const colCheck = (color = 'red') => {
        color = color === 'red' ? 'blue' : 'red';
        let flag = true;
        let win = true;
        let i2 = 0;
        let i3 = 0;
        for (let i = 0; i < 4; i++) {
            win = true;
            i2 = 0;
            i3 = 0;
            while (i3 < 4 && flag) {
                if (currentCells[i + i2] === color || currentCells[i + i2] === null) {
                    win = false;
                }
                i2 += 4;
                i3++;
            }
            if (win) {
                flag = false;
            }
        }
        return win;
    };

    const xCheck = (color = 'red') => {
        color = color === 'red' ? 'blue' : 'red';

        const firstPattern = [0, 5, 10, 15];
        const secondPattern = [3, 6, 9, 12];

        let win = true;
        firstPattern.forEach((p) => {
            if (currentCells[p] === color || currentCells[p] === null) {
                win = false;
            }
        });
        if (win) return win;

        win = true;

        secondPattern.forEach((p) => {
            if (currentCells[p] === color || currentCells[p] === null) {
                win = false;
            }
        });

        return win;
    };

    const checkForWinner = () => {
        const gameStatus = document.querySelector('.gameStatus');
        if (rowCheck('red')) {
            gameStatus.innerText = 'Player1 Win!';
            finish = true;
        }
        if (rowCheck('blue')) {
            gameStatus.innerText = 'Player2 Win!';
            finish = true;
        }
        if (colCheck('red')) {
            gameStatus.innerText = 'Player1 Win!';
            finish = true;
        }
        if (colCheck('blue')) {
            gameStatus.innerText = 'Player2 Win!';
            finish = true;
        }
        if (xCheck('red')) {
            gameStatus.innerText = 'Player1 Win!';
            finish = true;
        }
        if (xCheck('blue')) {
            gameStatus.innerText = 'Player2 Win!';
            finish = true;
        }
        // finish
    };

    document.querySelector('.restartButton > button').addEventListener('click', () => {
        currentCells = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
        currentPlayer = 1;
        finish = false;
        checkForWinner();
        render();
    });

    const clickHandler = (e) => {
        const id = e.target.id;

        // count red
        let countReds = 0;
        currentCells.forEach((c) => {
            if (c === 'red') countReds++;
        });

        // count blues
        let countBlues = 0;
        currentCells.forEach((c) => {
            if (c === 'blue') countBlues++;
        });

        if (countReds === 4 && countBlues === 4 && !finish) {
            if (currentPlayer === 1 && currentCells[id] === 'red') {
                currentCells[id] = null;
            }

            if (currentPlayer === 2 && currentCells[id] === 'blue') {
                currentCells[id] = null;
            }

            checkForWinner();
            render();
        } else {
            if (finish) return;
            if (currentCells[id] !== null) return;
            if (currentPlayer === 1) {
                currentCells[id] = 'red';
                currentPlayer = currentPlayer === 1 ? 2 : 1;
            } else if (currentPlayer === 2) {
                currentCells[id] = 'blue';
                currentPlayer = currentPlayer === 1 ? 2 : 1;
            }
            checkForWinner();
            render();
        }
    };
});
