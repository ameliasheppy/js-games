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
      categoryName.innerHTML = "The chosen category is Ohio Football Teams";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The chosen category is My Kids";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The chosen category is Outer Banks Villages";
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

  head = function () {
    myStickman = document.getElementById(stickFigure);
    context = myStickman.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };
  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];

  //onclick function
  chek = function () {
    list.onclick = function () {
      var guess = this.innerHTML;
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        }
      }
      var j = word.indexOf(guess);
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    };
  };

  //Play
  play = function () {
    (categories = [
      "bengals",
      "buckeyes",
      "bobcats",
      "browns",
      "bearcats",
      "rockets",
      "zips",
      "falcons",
    ]),
      ["a", "w", "a", "s"],
      [
        "hatteras",
        "rodanthe",
        "waves",
        "salvo",
        "avon",
        "frisco",
        "buxton",
        "ocracoke",
      ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = word.replace("-");
    console.log(word);
    buttons();

    guesses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  };

  play();

  getHint.onclick = function () {
    (hints = [
      [
        "NFL team based in Cincinnati",
        "College team based in Columbus, has a yummy snack alias",
        "Based in a party school from Athens and Zanesville",
        "A really bad NFL team from the great Cleveland",
        "A college team from Cincy named after a sweet hybrid animal",
        "This Toledo college team is named for a ship!",
        "Akron college team that could be zits",
        "Bowling Greem College team named for a bird that can damage you",
      ],
    ]),
      [
        "Oldest daughter of mine!",
        "Oldest son of mine!",
        "Peanut child",
        "Boopsti-pher",
      ],
      [
        "This village has is the farthest south on Hatteras Island",
        "This is the top village on Hatteras Island",
        "This village is named for a part of the ocean we love to ride",
        "The bottom village in the tri-village area",
        "This village is the largest metro area on Hatteras Island",
        "This village used to have a pier that got destroyed",
        "This village actually has the Cape Hatteras lighthouse in it",
        "You must ride a ferry to get to this secluded village",
      ];

    var categoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " + hints[categoryIndex][hintIndex];
  };

  //Reset
  document.getElementById("reset").onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  };
};
