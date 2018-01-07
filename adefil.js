 $("#headermain").load("header.html"); 
 $("#footermain").load("footer.html"); 
 
  jQuery(document).ready(function($) {





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction2() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}



  $('[data-toggle="collapse"]').click(function() {
    $('#wrapper').toggleClass('toggled');
  });

  // Toggle the class
  $('body').on('click', '.dropdown', function() {
    $(this).toggleClass('show');
  });

});