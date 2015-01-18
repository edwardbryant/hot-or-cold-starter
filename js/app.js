
$(document).ready(function(){

  var target;
  startGame();

  // modal boxes
  $(".what").click(function(){
    $("#modal-what").fadeIn(1000);
  });
  $(".new").click(function(){
    $("#modal-new").fadeIn(1000);
  });
  $("a.close").click(function(){
    $("#modal-what").fadeOut(1000);
    $("#modal-new").fadeOut(1000);
  });
  $("a.start").click(function(){
    $("#modal-new").fadeOut(1000);
    $("#modal-win").fadeOut(1000);
    startGame();
  });

  $('#guessButton').click(function(e) {
    e.preventDefault();
    var guess = $('#userGuess').val();
    guess = guess.trim();
    var isnum = /^\d+$/.test(guess);
    if (guess.length < 1) {
      alert("Input box is empty - please submit a guess.");
      $('#userGuess').val('');
    } else if (parseInt(guess) > 100) {
      alert("Input is too big - please pick a number between 1 and 100.");  
      $('#userGuess').val('');
    } else if (parseInt(guess) < 1) {
      alert("Input is too small - please pick a number between 1 and 100.");  
      $('#userGuess').val('');      
    } else {
      var isnum = /^\d+$/.test(guess);
      if (!isnum) {
        alert ("Input invalid - please use numerals only.");
        $('#userGuess').val('');
      } else {
        parseGuess(guess);
        $('#userGuess').val('');
      }
    }
  }); 

});

function startGame(){
  target = Math.floor((Math.random() * 100) + 1);
  $('#guessList').find('li').remove();
  $('#feedback').text('Make your Guess!');
  $('#count').text('0');
}

function parseGuess(guess){
  var diff = Math.abs(target - guess);
  if (diff == 0) {
    $("#modal-win").fadeIn(1000);
  } else if (diff == 1) {
    $('#feedback').text('You are very hot.');
  } else if (diff > 1 && diff < 6) {
    $('#feedback').text('You are hot.');
  } else if (diff > 5 && diff < 11) {
    $('#feedback').text('You are warm.');
  } else if (diff > 10 && diff < 16) {
    $('#feedback').text('You are warm');
  } else {
    $('#feedback').text('You are ice cold.');
  }
  addGuess(guess);
}

function addGuess(guess) {
  var count = $('#count').text();
  count = parseInt(count)
  count++;
  $('#count').text(count);
  $('#guessList').append('<li>'+guess+'</li>');
}
