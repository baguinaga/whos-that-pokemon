$(document).ready(function () {

  // global variables

  var pokeArray = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Snorlax", "Gyarydos", "Scyther", "Mewtwo", "Gengar", "Kabutops", "Dragonair", "Ninetails", "Slowpoke", "Meowth", "Lapras"];

  var pokeOptions = [];

  var questionBank = [];

  var count = 0;

  var timer = 0;

  //functions

  //function that creates arrays of random non-repeating answer options
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

  function displayToPage() {
    $("#imgDiv").attr("src", questionBank[count].src);

    displayRadio();

    revealImage = setTimeout(function () {
      $("#imgDiv").removeClass("pokeImg");
    }, 1000 * 6);
  }

  function displayRadio() {

    //clearing the previous div for the next iteration of count

    $("#form").empty();
    let i = count;

    //creating the radio div

    var radioDiv = $("<div>");
    radioDiv.addClass("form-check form-check-inline");

    //creating 4 radio buttons from the object options

    for (let j = 0; j < 4; j++) {
      var radioInput = $("<input>");
      radioInput.attr({
        class: "form-check-input",
        type: "radio",
        value: questionBank[i].options[j]
      })
      var radioLabel = $("<label>");
      radioLabel
        .addClass("form-check-label")
        .text(questionBank[i].options[j]);

      radioDiv.append(radioInput, radioLabel);
    }
    $("#form").append(radioDiv);
  }

  function nextPokemon() {
    count++;
    displayToPage();
    $("#imgDiv").addClass("pokeImg");
    if (count === 14) {
      count = 0;
    }
  }

  function guessInterval() {
    showNextImage = setInterval(nextPokemon, 1000 * 8);
  }

  // end of functions

  randomOptions(pokeArray, pokeOptions);

  //creating an array of objects, for each pokemon
  for (let i = 0; i < pokeArray.length; i++) {
    obj = {};
    obj["answer"] = pokeArray[i];
    obj["options"] = pokeOptions[i];
    obj["src"] = "assets/images/" + i + ".png";
    questionBank.push(obj);
  }

  console.log(questionBank);

  //shows the first image and then call on guessInterval to give the user time to respond
  displayToPage();
  guessInterval();

});