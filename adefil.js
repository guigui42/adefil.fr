  jQuery(document).ready(function($) {

     $.getJSON( "prices.json", function( data ) {


  var items = [];
  $.each( data, function( key, val ) {
    var link = "<a href='#"+key+"' class='list-group-item'>"+key+"</a>";
    $( link).appendTo( "#list1" );


 $.each(val, function (index, value) {

      var price = `<div class='col-lg-4 col-md-6 mb-4'>

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