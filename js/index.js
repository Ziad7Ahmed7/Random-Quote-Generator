function randomQuote() {
  var quote = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“If you tell the truth, you don't have to remember anything.”",
  ];

  var quoterName = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Albert Einstein",
    "― Marcus Tullius Cicero",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Robert Frost",
    "― Mark Twain",
  ];

  var x;
  var y;

  y = x;

  do {
    x = Math.floor(Math.random() * quote.length);
  } while (x === y);

  document.getElementById("quote").innerHTML =
    "<p>" + quote[x] + "</p><p>" + quoterName[x] + "</p>";
}
