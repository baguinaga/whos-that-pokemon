var pokeImg = ["Pikachu", "Charmander", "Bulabasaur", "Squirtle", "Snorlax", "Gyarydos", "Scyther", "Mewtwo", "Gengar", "Kabutops", "Dragonair", "Ninetails", "Slowpoke", "Meowth", "Lapras"];

var pokeAnswer = [];
var timerCount = 0;
var timerActive = false;
var counter = 0;

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
console.log(pokeAnswer);


function showOptions(array, key) {

    for (let i = 0; i < array.length; i++) {
      $("#pokemonImg").attr("src", "assets/images/" + String(i) + ".png");
      var radioDiv = $("<div>")
      radioDiv.addClass("form-check form-check-inline");
      $("#form").empty();

      for (let j = 0; j < 4; j++) {

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

        //testing to see if the text and images are actually being iterated
        console.log(array[key[i][j]]);
      }
    }
}

showOptions(pokeImg, pokeAnswer);
