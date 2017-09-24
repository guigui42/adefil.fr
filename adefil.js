 function toggler(item, item2) {

$(".prices").addClass('hidden');
$(".menu").removeClass('active');
//alert("dfd");
 $("."+item).removeClass('hidden');
  $("#menu"+item).addClass('active');
 //$(item).toggle();
 $("#title").text(  item2);
}

  jQuery(document).ready(function($) {


String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
}


     $.getJSON( "prices.json", function( data ) {





  var items = [];
  $.each( data, function( key, val ) {
    var link = "<a href='#"+key.cleanup()+"' onClick=\"toggler('"+key.cleanup()+"', '"+key+"');\" class='list-group-item menu' id='menu"+key.cleanup()+"'>"+key+"</a>";
    $( link).appendTo( "#list1" );


 $.each(val, function (index, value) {

      var price = `<div class='col-lg-4 col-md-6 mb-4 hidden prices `+key.cleanup()+`'  id="`+key.cleanup()+`"  >

              <div class='card h-100'>
                <a href='#'><img class='card-img-top' src='https://placehold.it/700x400' alt=''></a>
                <div class='card-footer'>
                  <small class='text-muted'>`+this.vetement+`</small>
                </div>
                <div class='card-footer'>
                  <small class='text-muted'>`+this.catgorie+`</small>
                </div>
                <div class='card-body'>
                  <h4 class='card-title'>
                    <a href='#'>`+this.action+`</a>
                  </h4>
                  <h5>`+this.prix+` €</h5>
                  <p class='card-text'></p>
                </div>
                
              </div>
            </div>`;
    $(price).appendTo("#priceslist");
    });

  });
 

});


});