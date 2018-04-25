
init();
var author_ ="";
var quote_ = "";

function init(){
  console.log("Init");
  generateColors();
  generateQuote();
}

function generateQuote(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
  var quote = json[0];
  author_ = quote.title;
  quote_ = quote.content;
 $("#quoteNumber").html(quote.ID);
 $("#quoteAuthor").html("- "+quote.title);
 $("#quoteContent").html(quote.content);
   $.ajaxSetup({ cache: false});
});
}


function generateColors(){
  $.getJSON("http://palett.es/API/v1/palette/monochrome/between/0.5/0.8", function(json) {
  console.log(json)
  var quote = json[0];
  console.log(json[0]);
  $("body").css("background-color",json[0]);
  $("body").css("color",json[0]);
  $(".quote").css("background-color",json[1]);
  $(".vl").css("border-left", "8px solid "+json[0]);
  $(".btn").css("background-color",json[0]);
  $(".btn").css("color",json[1]);
  $(".btn").hover( function(){
    $(this).css("background-color",json[2]);
    $(this).css("color",json[3]);
  },
  function(){
    $(this).css("background-color",json[0]);
    $(this).css("color",json[1]);
  }
  )
   $.ajaxSetup({ cache: false});
});
}

$("#newQuoteBtn").click( function(){
  //alert('button clicked');
  init();
});



$('#twet').click(function() {
  //if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote_ + '" ' + author_));
    //}
    console.log("log twet");
  });

  function openURL(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }
