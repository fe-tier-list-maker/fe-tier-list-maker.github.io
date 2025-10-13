var colors = ["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#7F7FFF","#FF7FFF","#BF7FBF","#1A1A1A","#858585","#CFCFCF","#FFFFFF"];
var currentColor;
var colorIndex;
var $draggable;

$(document).on("click", "#colorselect span", function() { // change row label
    for (var i = 0; i < $("#modal span").length; i++) {
        $("#modal span:nth-of-type("+(i+1)+")").attr("class","nope");
    }
    $(this).attr("class","selected");
    $("#tablewrap").css("background-color", $(this).css("background-color"));
});

$(document).on("click", "#screenshot", function() { // open save/load modal
    openPopup("#screenshotShow");
});
		
$(document).on("change", ".characterCheck", function() { // add/remove characters
    gameId = ($(this).attr("id"));
    gameClass = ($(this).attr("class"));
    // remove non-numeric characters - stackoverflow.com/questions/1862130/
    gameIndex = gameClass.replace(/\D/g,'');
    // alternative 
    // gameInfo = currentGameChars.find(function(curr) { return curr[0] == gameId;});
    
    if($(this).is(":checked")) {
        for (var k = 0; k <= currentGameChars[gameIndex][1]; k++) {
            $("#char div:last-child").after(singleChar);
            $("#char div:last-child").css("background-image","url(../img/"+currentGame+"/"+gameId+"/"+k+".png)");
            $("#char div:last-child").attr("id", gameId + "-" + k);
            // $("#char div:last-child").attr("title", allCharacters[gameIndex][k]);
        }
    } else {
        $(".character[id^='"+currentGameChars[gameIndex][0]+"-']").each( function() {
            $(this).remove();
        });
    }
    $draggable = $('.character').draggabilly();
});

function changeGame(game) {
    currentGameChars = [];
    currentGameChars = game;
    currentGame = game[0][0];
    $(".character").each( function() {
        $(this).remove();
    });
    $(".characterCheckWrap").each( function() {
        $(this).remove();
    });
    // just in case there's more than one...
    $(".selectAllWrap").each( function() {
        $(this).remove();
    });
    
    for (var i = 1; i < game.length; i++) {
        /*
        for (var k = 0; k <= game[i][1]; k++) {
            $("#char div:last-child").after(singleChar);
            $("#char div:last-child").css("background-image","url(../img/"+currentGame+"/"+game[i][0]+"/"+k+".png)");
            $("#char div:last-child").attr("id",i);
        }
        */
        
        $("#checklist div:last-child").after(singleCheckWrap);
        $("#checklist div:last-child").html(game[i][2]+": <input type='checkbox' class='characterCheck "+"game"+i+"' id='"+game[i][0]+"' >");
    }
    if ((game.length - 1) % 2 != 0) {
        $("#checklist div:last-child").after(singleCheckWrap);
    }
    $("#checklist div:last-child").after(selectAllWrap);
    $("#checklist div:last-child").html("Select All: <input type='checkbox' class='selectAll' id='all' >");
    
    // 31 means Three Houses
	$( ".characterCheck.game31" ).prop('checked', true).change();

    $("h1 span").text(currentGame);
}
