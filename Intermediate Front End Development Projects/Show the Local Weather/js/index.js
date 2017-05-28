$(document).ready(function() {
  
  if (navigator.geolocation) {
    
  navigator.geolocation.getCurrentPosition(function(position) {
  var apikey="3b3f36c6553e98e75027bd0187b3557f";
  
  var apicall="https://crossorigin.me/https://api.darksky.net/forecast/"+apikey+"/"+position.coords.latitude+","+position.coords.longitude;
    
  var backgrounds = ["http://www.hdwallpapers.in/walls/planet_earth-wide.jpg", "https://1.bp.blogspot.com/-B08_qI1yDKo/TkiTbE55eCI/AAAAAAAAEsU/6zvuN74bwiU/s1600/clear+sky+japan.JPG", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Full_moon_on_clear_night.JPG", "https://p931z2nb6eo1jytzj2ufrzyoiz-wpengine.netdna-ssl.com/news/wp-content/uploads/sites/10/2014/02/467299859-e1416516281893.jpg", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/10/16/uk-snow-getty.jpg", "https://3.bp.blogspot.com/-xHGLCdtjtCM/UpGY3by124I/AAAAAAAABdo/xngcthn5cGw/s1600/Ice_Storm_Kansas.jpg", "http://mynewsla.com/wp-content/uploads/2014/12/Palm-trees-windy-weather.jpg", "http://addins.kwwl.com/blogs/weather/wp-content/uploads/2012/11/Nov-7-2.jpg", "https://i.ytimg.com/vi/-eyJHqgrfqY/maxresdefault.jpg", "https://d2f0ora2gkri0g.cloudfront.net/bkpam2185058_partlycloudy_1.jpg", "http://cdn.weatheravenue.com/img/background/background-night.jpg"];
      
      $.getJSON(apicall, function(json){
        console.log(json);
        var summary=json.currently.summary;
        var temp=Math.floor(json.currently.temperature);
        var ctemp=Math.floor((temp-32)*(5/9));
        var wicon=json.currently.icon;
        var i=0;
        var degrees=String.fromCharCode(176);
        
         switch(wicon) {
             case "clear-day": i=1;
             break;
             case "clear-night": i=2;
             break;
             case "rain": i=3;
             break;
             case "snow": i=4;
             break;
             case "sleet": i=5;
             break;
             case "wind": i=6;
             break;
             case "fog": i=7;
             break;
             case "cloudy": i=8;
             break;
             case "partly-cloudy-day": i=9;
             break;
             case "partly-cloudy-night": i=10;
             break;
           default: i=0;
                     }
        
        $(".tempnum").text(temp+degrees);
        
        $(".summary").html(summary);
        
        $("body").css("background-image", "url("+backgrounds[i]+")");

        $("button").on("click", function() {
          if ($(this).hasClass("fahrenheit")) {
            $(this).removeClass("fahrenheit");
            $(this).addClass("celcius");
            $("span.tempnum").text(ctemp+degrees);
            $("span.measurement").text("C");
          } else {
            $(this).removeClass("celcius");
            $(this).addClass("fahrenheit");
            $("span.tempnum").text(temp+degrees);
            $("span.measurement").text("F");
          }
          
        });

 });
      });
    
  } else {
    
    $(".temperature").html("Please enable geolocation!");
    
  }
      
  });