const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players.slice(0, 11);
const players2 = game.players.slice(11);

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

console.log("Players for Team 1:", players1);
console.log("Players for Team 2:", players2);
console.log("Goalkeeper for Team 1:", gk);
console.log("Field Players for Team 1:", fieldPlayers);
console.log("All Players:", allPlayers);

const substitutes = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...players1, ...substitutes];
console.log("Players for Team 1 with Substitutes:", players1Final);

console.log("Odds - Team 1:", game.odds.team1);
console.log("Odds - Draw:", game.odds.x);
console.log("Odds - Team 2:", game.odds.team2);

function printGoals(...playerNames) {
  console.log(`Goals scored by players:`);
  playerNames.forEach((playerName, index) => {
    console.log(`${index + 1}. ${playerName}`);
  });
  console.log(`Total goals: ${playerNames.length}`);
}

// Example usage of 'printGoals'
printGoals("Lewandowski", "Gnabry", "Muller");

game.odds.team1 < game.odds.team2 &&
  console.log(`Team 1 (${game.team1}) is more likely to win.`);
game.odds.team2 < game.odds.team1 &&
  console.log(`Team 2 (${game.team2}) is more likely to win.`);
