"strict";
const scoreKeeperGame = (function () {
    const playerOneScore = document.querySelector(".player-one-score");
    const playerTwoScore = document.querySelector(".player-two-score");
    const select = document.querySelector(".select");
    const playersBtn = document.querySelectorAll(".players-btn");
    let winner = false;
    let scoreOne = 0;
    let scoreTwo = 0;

    playersBtn.forEach(function (btn) {
        if (btn.classList.contains("player-one")) {
            btn.addEventListener("click", (e) => {
                scoreOne++;
                playerOneScore.innerText = scoreOne;
                game();
                disableBtn();
            });
        }

        if (btn.classList.contains("player-two")) {
            btn.addEventListener("click", (e) => {
                scoreTwo++;
                playerTwoScore.innerText = scoreTwo;
                game();
                disableBtn();
            });
        }

        if (btn.classList.contains("reset-btn")) {
            btn.addEventListener("click", (e) => {
                scoreOne = 0;
                scoreTwo = 0;
                playerOneScore.innerText = scoreOne;
                playerTwoScore.innerText = scoreTwo;
                winner = false;
                disableBtn();
                playerOneScore.style.color = "";
                playerTwoScore.style.color = "";
            });
        }
    });

    const game = () => {
        const maxScore = parseInt(select.value);
        if (scoreOne === maxScore) {
            console.log("player One is the winner!");
            winner = true;
            playerOneScore.style.color = "green";
            playerTwoScore.style.color = "red";
        } else if (scoreTwo === maxScore) {
            console.log("player Two is the winner!");
            winner = true;
            playerOneScore.style.color = "red";
            playerTwoScore.style.color = "green";
        }
    };

    const disableBtn = () => {
        const playerOneBtn = document.querySelector(".player-one");
        const playerTwoBtn = document.querySelector(".player-two");

        if (winner) {
            playerOneBtn.disabled = true;
            playerTwoBtn.disabled = true;
            playerOneBtn.classList.add("opacity");
            playerTwoBtn.classList.add("opacity");
        } else {
            playerOneBtn.disabled = false;
            playerTwoBtn.disabled = false;
            playerOneBtn.classList.remove("opacity");
            playerTwoBtn.classList.remove("opacity");
        }
    };

    return {};
})();
