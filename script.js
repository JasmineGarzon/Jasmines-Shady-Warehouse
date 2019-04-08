var Product=[];
var Price=[];
$("#New-Item").click(function(){
    var Item= $("#Product-Name").val();
    Product.push(Item);
    console.log(Product);
    $(".Number-of-Items").text(Product.length); 
    $("#Name-of-Product").append("<p>"+Item+"</p>");
    var price=$("#Price-of-Product").val();
    Price.push(price);
    console.log(Price);
    price=price=parseInt($("#total").val());
    $("#Price-of-Product").append("<p>"+price+"</p>");
});
$("#Buy-Item").click(function(){
    
});
