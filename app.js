window.onload = function () {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var categories; //this will be an array of topics
  var chosenCategory; //this is the selected category
  var getHint; //word getHint
  var word; //selected word
  var guess; //this is the guess
  var guesses = []; //these are stored guesses
  var lives; //Lives
  var counter; //count the correct guesses
  var space; //Number of spaces in the word

  //Get elements
  var showLives = document.getElementById("myLives");
  var showCategory = document.getElementById(scategory);
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");

  //create the alphabet ul
  var buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  //select category
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML =
        "The chosen category is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The chosen category is Films";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The chosen category is Cities";
    }
  };

  //Create guesses ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.activeElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "-";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  //show lives
  comments = function () {
    showLives.innerHTML = "You have" + lives + "lives";
    if (lives < 1) {
      showLives.innerHTML = "Game over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You win!";
      }
    }
  };

  //Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  };

  //Hangman
  canvas = function () {
    myStickman = document.getElementById("stickFigure");
    context = myStickman.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
};
