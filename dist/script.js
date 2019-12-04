$(document).ready(function () {
  $('li.tbl-block').hover(function () {
    $(this).addClass('highlight');
  }, function () {
    $(this).removeClass('highlight');
  });

  window.scroll(0, document.querySelector(this.href).offsetTop - 40);
  return false;
});



// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

// BE SURE TO SELECT THE CORRECT TEST SUITE FROM THE DROPDOWN MENU!!! :-) 

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.