function scrollFunction() {
  /**
   *Check what position on the page the scrollbar is, so that no-shadow class is only applied while
   * the navbar is above the header container, but navbar has a bottom shadow after that
   */
  if ($(document).scrollTop() < 548) {
    $('.navbar-fixed nav').addClass('no-shadow');
  } else {
    $('.navbar-fixed nav').removeClass('no-shadow');
  }
}

// Everything inside this function will fire once the DOM is ready for JS
$(function() {

  // Activate Materialize's sidenav animation with jQuery
  $('.sidenav').sidenav();

  $(".dropdown-trigger").dropdown();

  // As the user scrolls, call scrollFunction
  window.onscroll = function() {
    scrollFunction();
  };

  // ====== Start custom JS below here! ======

  //---------------------------------------------------------//
  //Pop-up contents as modal boxes for speaker bio & proj reqs
  //---------------------------------------------------------//
  var mentors=[];
  
  document.querySelectorAll("div[id^='mentor_']").forEach(function(mentor){
    var modalbox = mentor.querySelector('div.modal');
    var mentorimg = mentor.querySelector('img');

    if (typeof(modalbox) != 'undefined' && modalbox != null) {
      var modalclose = mentor.querySelector('div.modal span.close');
      if (typeof(modalclose) != 'undefined' && modalclose != null) {
        mentors.push([mentor, modalbox, modalclose, mentorimg]);
      }
    }
  });

  window.onclick = function(event) {
    mentors.forEach(function(mentor){
      if (event.target==mentor[1] || event.target==mentor[2]) {
        mentor[1].style.display = "none";
      } else if (event.target==mentor[3]) {
        mentor[1].style.display = "block";
      }
    });
  };



});
