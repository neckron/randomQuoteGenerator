
init()

function init(){
  console.log("Init");
  generateColors();
  generateQuote();
}

function generateQuote(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
  var quote = json[0];
 $("#quoteNumber").html(quote.ID);
 $("#quoteAuthor").html("- "+quote.title);
 $("#quoteContent").html(quote.content);
   $.ajaxSetup({ cache: false});
});
}


function generateColors(){
  $.getJSON("http://palett.es/API/v1/palette/monochrome/between/0.01/0.55", function(json) {
  console.log(json)
  var quote = json[0];
  console.log(json[0]);
  $("body").css("background-color",json[2]);
  $("body").css("color",json[2]);
  $(".quote").css("background-color",json[4]);
  $(".vl").css("border-left", "8px solid "+json[2]);
  $(".btn").css("background-color",json[0]);
  $(".btn").css("color",json[2]);
  $(".btn:hover").css("color",json[0]);
  $(".btn:hover").css("background-color",json[2]);
   $.ajaxSetup({ cache: false});
});
}

$("#newQuoteBtn").click( function(){
  //alert('button clicked');
  init();
});
