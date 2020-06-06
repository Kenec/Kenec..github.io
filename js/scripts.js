$('.terminal').terminal(function(command) {
  if (command !== '') {
    switch(command) {
      case "ls": 
        this.echo("kene/\nimages\n");
      break;
      default:
        this.error(new String('zsh: command not found: ' + command));
    }
  } else {
     this.echo('');
  }
}, {
  greetings: 'Type "help" for the list of commands',
  name: 'kenec',
  height: '800',
  prompt: 'kene@kenec:~$ '
});

// Change the image
let images = ["images/kene1.png", "images/kene2.jpg", "images/kene3.jpg"];
let count = 0;
$(function() {
  $('.image').click(function(e) {
    $('.image').attr('src', images[count]);
    count > 1 ? count = 0 : count++;
    return false;
  });
});

// Handle the about click
$("#about_link").click(function() {
  $("#portfolio, #contact").hide();
  $("#about").show();
});

// Handle the portfolio click
$("#portfolio_link").click(function() {
  $("#about, #contact").hide();
  $("#portfolio").show();
});

// Handle the contact click
$("#contact_link").click(function() {
  $("#portfolio, #about").hide();
  $("#contact").show();
});

