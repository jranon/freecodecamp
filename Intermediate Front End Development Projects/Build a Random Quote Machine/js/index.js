$(document).ready(function(){
  
 var jsonn = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  
  var backgrounds = ["http://i.huffpost.com/gen/1030819/images/o-INSPIRATIONAL-QUOTE-facebook.jpg", "http://cdn.quotesgram.com/img/63/93/1314626774-Inspirational-Pictures-Without-Words-Sunset.png", "https://2.bp.blogspot.com/-hrbChw01ysg/U09MFNp-YEI/AAAAAAAAMAQ/29oy5iVmpFw/s1600/image26.png", "http://www.diet.st/wp-content/uploads/2013/11/bigstock-Friends-in-Restaurant-eating-f-10164950.jpg", "https://www.neefusa.org/sites/default/files/styles/feature_narrow/public/field/image/WEB15-Nature-AntBridge-Ecosystems-4754x2674.jpg?itok=sLTyN6Sa", "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg", "http://cdn.lifedaily.com/wp-content/uploads/2013/05/1.-It-is-for-us-to-pray...-1.jpg", "http://i.huffpost.com/gen/1063106/thumbs/o-INSPIRATIONAL-QUOTES-facebook.jpg", "http://teamstrength.com/wp-content/uploads/2016/04/Teamwork.jpg", "https://aos.iacpublishinglabs.com/question/aq/1400px-788px/examples-teamwork-workplace_227bc147eee8ce25.jpg?domain=cx.aos.ask.com", "https://upload.wikimedia.org/wikipedia/commons/6/65/Team_Work.jpg", "http://incedogroup.com/wp-content/uploads/2012/02/Barriers-to-Great-Teamwork_0212-e1329931535215.jpg", "https://i.ytimg.com/vi/xK8NLldQJDg/maxresdefault.jpg", "http://i.huffpost.com/gen/2514980/images/o-STOCK-PHOTOBOMB-facebook.jpg", "https://www.usnews.com/cmsmedia/38/37/286e299c407191748f7136915d3c/150731-yodawax-stock.jpg", "http://img2.tvtome.com/i/u/c0679cc3ccd346edc6545368d3457edf.jpg"];
  
  function andquote(val) {
   $.getJSON(val, function(json) {
      var quote=JSON.stringify(json[0]);
  $(".quote").contents().replaceWith(quote);
 $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=ParksandRec&text='+quote+' -Ron Swanson');
    });
  }
    
    
  
  function loadbg() {
    var i=Math.floor(Math.random()*backgrounds.length);
    $(".container").css("background-image", "url("+backgrounds[i]+")");
    
  }
  
  andquote(jsonn);
  loadbg();
 
  
  $(".new-quote").click(function() {
    andquote(jsonn);
    loadbg();
  });
  
  
});