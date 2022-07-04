let singer = {
  name: "João",
  lastName: "Pereira",
  nickName: "JP",
  age: 33,
  bestSeries: ["House", "The Blacklist", "Supernatural"]
};

console.log("Eu, " + singer["name"] + ", estou asistindo a série " + singer.bestSeries[0]);

console.table(singer);