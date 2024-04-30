const score = {
    wins: 0,
    looses: 0,
    ties: 0,
  };

  let result = "";
  let computermove = "";

  function restart(){
    score.wins=0;
    score.looses=0;
    score.ties=0;
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} ,looses:${score.looses} ,Ties:${score.ties}`;
  }

  function rps(usermove) {
    computermove = pickcomputermove();
    if (computermove === usermove) {
      result = "Tie";
      score.ties++;
    } else if (
      (computermove === "rock" && usermove === "paper") ||
      (computermove === "paper" && usermove === "scissors") ||
      (computermove === "scissors" && usermove === "rock")
    ) {
      result = "You win";
      score.wins++;
    } else {
      result = "You loose";
      score.looses++;
    }
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins} ,looses:${score.looses} ,Ties:${score.ties}`;
    document.querySelector(
      ".js-result"
    ).innerHTML = `Result:${result}`;
    document.querySelector(
      ".js-show"
    ).innerHTML = `you ${usermove} ---- ${computermove} computer `;
  }
  function pickcomputermove() {
    let randommove = Math.random();
    let computermove = "";
    if (randommove >= 0 && randommove < 1 / 3) {
      computermove = "rock";
    } else if (randommove >= 1 / 3 && randommove < 2 / 3) {
      computermove = "paper";
    } else {
      computermove = "scissors";
    }
    return computermove;
  }