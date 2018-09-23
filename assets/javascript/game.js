var pokeImg = ["Pikachu", "Charmander", "Bulabasaur", "Squirtle", "Snorlax", "Gyarydos", "Scyther", "Mewtwo", "Gengar", "Kabutops", "Dragonair", "Ninetails", "Slowpoke", "Meowth", "Lapras"];
var pokeAnswer = [];
var intervalId;
var timerCount = 0;
var timerActive = false;

function randomNumExclude(array, arr) {
  numberArray = [arr];
  while (numberArray.length < 4) {
    const randomNum = Math.floor(Math.random() * array.length);
    (numberArray.includes(randomNum)) ? randomNumExclude(array, arr): numberArray.push(randomNum);
  }
  for (let i = numberArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
  }
  return numberArray;
}

for (var i = 0; i < pokeImg.length; i++) {
  pokeAnswer.push(randomNumExclude(pokeImg, i));
}

console.log(pokeImg[pokeAnswer[0][0]])
console.log(pokeImg[pokeAnswer[0][1]])
console.log(pokeImg[pokeAnswer[0][2]])
console.log(pokeImg[pokeAnswer[0][3]])

function showOptions(array, key) {

  for (var i = 0; i < array.length; i++) {
    console.log("this is being iterated")
    $("#pokemonImg").attr("src", "assets/images/" + String(i) + ".png");
    console.log("assets/images/" + String(i) + ".png");
    var radioDiv = $("<div>");
    radioDiv.addClass("form-check form-check-inline");
    $("#form").empty();
    for (var j = 0; j < 4; j++) {
      var radioInput = $("<input>");
      radioInput.attr({
        class: "form-check-input",
        type: "radio",
        name: array[i],
        value: array[key[i][j]]
      })
      var radioLabel = $("<label>");
      radioLabel
        .addClass("form-check-label")
        .text(array[key[i][j]]);
      radioDiv.append(radioInput, radioLabel);
      $("#form").append(radioDiv);
    }
  }
}

function checkInput() {
  timerActive = true;
  $(document).on("change", ".form-check-input", function () {
    // get value and question index from input
    var questionAnsweredIndex = $(this).attr("name");
    var answerPicked = $(this).val();

    console.log(questionAnsweredIndex);
    console.log(answerPicked);

  })
};

showOptions(pokeImg, pokeAnswer);