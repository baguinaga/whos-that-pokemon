// $(document).ready(function () {

// global variables

var pokeArray = ["Pikachu", "Charmander", "Bulabasaur", "Squirtle", "Snorlax", "Gyarydos", "Scyther", "Mewtwo", "Gengar", "Kabutops", "Dragonair", "Ninetails", "Slowpoke", "Meowth", "Lapras"];

var pokeAnswer = [];

var pokeObject = {};

var timerCount = 0;

var timerActive = false;

//functions

function randomOptions(array, key) {
  for (let i = 0; i < array.length; i++) {

    //making key an empty array that includes the ith number in the first position

    key[i] = [];
    key[i][0] = i

    //function for creating 4 ( 3 + correct option) non-repeating numbers and then calling on it

    function randomNumber(array, key) {
      while (key[i].length < 4) {
        const randomNum = Math.floor(Math.random() * array.length);
        (key[i].includes(randomNum)) ? randomNumber(array, key): key[i].push(randomNum);
      }
    }

    randomNumber(array, key);

    //shuffling the 4 options

    for (let n = key[i].length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [key[i][n], key[i][j]] = [key[i][j], key[i][n]];
    }

    //returning the array as their corresponding text option

    for (let m = 0; m < key[i].length; m++) {
      key[i][m] = array[key[i][m]]; 
    }
  }
  return key; 
}

// old show options function (not being called; here for reference purposes)
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

randomOptions(pokeArray, pokeAnswer);

// console.log(pokeAnswer);

// });