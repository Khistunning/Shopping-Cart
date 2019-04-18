var prices=[];
var lista=[];
var image=[];
var totalnum;
$("#cart").click(function() {
    
    var Items=$(".name").val();
    
    var price=parseInt($(".price").val());
    
    prices.push(price);
    lista.push(Items);
    totalnum=0;
    prices.forEach(function(total){
        totalnum=totalnum+parseInt(total);
    });

var length = lista.length;
   
 
 $(".heading").append("<div>"+ Items , price + "</div>");
 
 $(".numb").html(length);
});
var totalnum=0;

