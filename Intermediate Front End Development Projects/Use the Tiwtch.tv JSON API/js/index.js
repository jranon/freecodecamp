$(document).ready(function() {
  
  var twitchers = ["ESL_SC2", "TwitchPresents", "OgamingSC2", "freecodecamp", "CalebDMTG", "haumph", "GabySpartz", "brunofin", "comster404", "boxbox", "SsQRush", "AnnieBot", "NumottheNummy", "Semulin", "lsv"]; 
  
  
  $.each(twitchers, function(i, twitcher){
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+twitcher+"?callback=?", function(data){
		if (data.hasOwnProperty("error")) {
		  $('<div/>').attr({id: twitcher}).addClass('streamer dne').html(twitcher+' does not exist<br /><span class=\"frownyface\">:\(</span>').appendTo('.streamerstats');
		} else {
		  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+twitcher+"?callback=?", function(data){
			if (data.stream !== null) {
			  var game = data.stream.game;
        
			  var gamelink = 'https://www.twitch.tv/directory/game/'+encodeURIComponent(game);
			  var url = data.stream.channel.url;
			  var status = data.stream.channel.status;
        if (status.length>40) {
          status = status.substring(0,39)+'...';
        }
			  var pic = '<img class=\"ppic\" src=\"'+data.stream.channel.logo+'\" />';
			  var bg = data.stream.preview.large;
			  var link = '<a href=\"'+url+'\" target=\"_blank\">'+twitcher.toUpperCase()+'</a>'
			  $('<div/>').attr({id: twitcher}).addClass(twitcher+' streamer online').html('<div class=\"pic\">'+pic+'</div><div class=\"status\"> '+link+' is playing <a href=\"'+gamelink+'\" target=\"_blank\">'+game+'</a><br /><span class=\"streamtitle\">'+status+'</span></div>').appendTo(".streamerstats");
			  $('.'+twitcher).css({'background': 'transparent url('+bg+') fixed', 'background-size': '100% auto', 'opacity':'0.9'});
        console.log(data);
			} else {
			  $('<div/>').attr({id: twitcher}).addClass('streamer offline').html(twitcher+' is offline<br /><span class=\"frownyface\">:\(</span>').appendTo('.streamerstats');  
			}
		  });
		}
		
    });
  });
  
});