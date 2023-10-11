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

game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

// Task 2: Calculate and log the average odd
const oddsValues = Object.values(game.odds);
const averageOdd =
  oddsValues.reduce((sum, odd) => sum + odd, 0) / oddsValues.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// Task 3: Print the odds in a formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamName = team === "draw" ? "draw" : game[team];
  console.log(`Odd of victory ${teamName}: ${odd}`);
}

// Task 4 (Bonus): Create an object 'scorers' with player names and goal counts
const scorers = {};
game.scored.forEach((player) => {
  scorers[player] = (scorers[player] || 0) + 1;
});
console.log("Scorers:", scorers);
