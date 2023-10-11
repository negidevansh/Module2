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
  gameEvents: new Map([
    [17, "GOAL"],
    [36, "Substitution"],
    [47, "GOAL"],
    [61, "Substitution"],
    [64, "Yellow card"],
    [69, "Red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "GOAL"],
    [80, "GOAL"],
    [92, "Yellow card"],
  ]),
};

// 1
const events = [...new Set(game.gameEvents.values())];
console.log(events);

//2
game.gameEvents.delete(64);

//3
const eventsArray = [...game.gameEvents.keys()];
const averageTime = 90 / eventsArray.length;
console.log(
  `An event happened, on average, every ${averageTime.toFixed(2)} minutes.`
);

//4
for (const [minute, event] of game.gameEvents) {
  const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${minute}: ${event}`);
}
