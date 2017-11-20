 function toggler(item, item2) {

$(".prices").addClass('hidden');
$(".menu").removeClass('active');
//alert("dfd");
 $("."+item).removeClass('hidden');
  $("#menu"+item).addClass('active');


}

  jQuery(document).ready(function($) {


String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
}


     $.getJSON( "prices.json", function( data ) {





  var items = [];
  $.each( data, function( key, val ) {
    var link = "<a href='#topoftable' onClick=\"toggler('"+key.cleanup()+"', '"+key+"');\" class='list-group-item menu' id='menu"+key.cleanup()+"'>"+key+"</a>";
    $( link).appendTo( "#list1" );


 $.each(val, function (index, value) {



  var price = "<tr class='prices hidden "+key.cleanup()+"' id='"+key.cleanup()+"'>"+
    //  +"<td>"+this.vetement+"</td>"+
      +"<td>"+this.catgorie+"</td>"+
      +"<td>"+this.action+"</td>"+
      +"<td><b>"+this.prix+"</b>€</td>"+
      +"</tr>";




    //$(price).appendTo("#priceslisttable");
var dollar = "€";

if (isNaN(this.prix))
  dollar="";

if(!this.catgorie)
  this.catgorie = "";

if(this.action && this.prix)
     $("<tr class='prices hidden "+key.cleanup()+" '  id='"+key.cleanup()+"'><td>"+this.catgorie+"</td><td>"+this.action+"</td><td><b>"+this.prix+"</b>"+dollar+"</td></tr>").appendTo("#priceslisttable");


    });

  });
 

});



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