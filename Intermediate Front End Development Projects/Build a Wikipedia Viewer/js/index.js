$(document).ready(function(){
  var clicks = 0;
  $("#submitquery").click(function() {
    var execute = function() {
    var lookup = $(".form-control#queryinput").val();
    $("span.querytext").html(lookup);
      $("div.results").removeClass("hidden");
    var submission = encodeURIComponent(lookup);
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch="+submission+"&gsrlimit=15&prop=extracts|info&exsentences=3&exintro=&explaintext&exlimit=max&inprop=url&origin=*",
    function(data){

      var r = data.query.pages;
      $.each(r, function(i, page){
        var linkage = "";
        var titleage = "";
        var extractage = "";
        $.each(page, function(key, val){
          if (key == "fullurl") {
            linkage = val;
          } else if (key == "title") {
            titleage = val;       
          } else if (key == "extract") {
            extractage = val;
          }
        });
        $(".results").append("<div class=\"result\"><a href=\""+linkage+"\" target=\"_blank\">"+titleage+"</a><br /><span class=\"extraction\">"+extractage+" <a href=\""+linkage+"\" target=\"_blank\" class=\"readmoar\">read more!</a></span><hr></div>");
        });

     });
	 event.preventDefault();}
    
    clicks = clicks+1;
    if (clicks<2) {
      execute();
       }
    else {
      $(".results").html("Results for \"<span class=\"querytext\"></span>\"");
      execute();
    }
});
  
});