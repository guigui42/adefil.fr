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
    var link = "<a href='#topoftable'   onClick=\"toggler('"+key.cleanup()+"', '"+key+"');\" class='list-group-item menu' id='menu"+key.cleanup()+"'>"+key+"</a>";
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


});