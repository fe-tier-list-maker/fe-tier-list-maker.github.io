// requires jquery, html2canvas

const singleTier = "<tr><td class='labelHolder' contenteditable='true' style='background-color:#FFFF7F'><span class='label'>NEW</span></td><td class='tierHolder'><div class='tier sort' id='rows'><div class='hiddenkid'></div></div></td><td class='settingsContainer'><div id='settings'></div><div id='moveButtons'><div id='moveUp'></div><div id='moveDown'></div></div></td></tr>";
const colors = ["#FF7F7F","#FFBF7F","#FFDF7F","#FFFF7F","#BFFF7F","#7FFF7F","#7FFFFF","#7FBFFF","#7F7FFF","#FF7FFF","#BF7FBF","#3B3B3A","#858585","#CFCFCF","#F7F7F7"];
// first is the index of its color, second is label
const tierDefaults = [
    [0, "S"],
    [1, "A"],
    [3, "B"],
    [5, "C"],
    [7, "D"],
    [8, "E"],
    [9, "F"] ];

var listStickied = false;
var showTooltip = true;
var screenshotMode = false;
var colorIndex;
var currentTier;

function initTable() {
    $("#tablePlaceholder").remove();
    for (var i = 0; i < tierDefaults.length; i++) {
        $("#tablemain").append(singleTier);
        var currLabel = $("tr:last-of-type").find(".labelHolder");
        currLabel.css("background",colors[tierDefaults[i][0]]);
        currLabel.find(".label").text(tierDefaults[i][1]);
    }
}

function toggleTooltip() {
    if (showTooltip) {
        $("#tooltip").css("display", "none");
        showTooltip = false;
    }
}

function toggleTierListDock() {
    if (listStickied) {
        $("#tablewrap").css("position","static");
        $("#dock").text("Dock tier list");
        listStickied = false;
    } else {
        $("#tablewrap").css("position","sticky");
        $("#dock").text("Undock tier list");
        listStickied = true;
    }
}

function openTierSettings(selected) {
    currentTier = $(selected).parent().parent();
    var currentColor = currentTier.find(".labelHolder").css("background-color");
    $("textarea").val(currentTier.find(".labelHolder").text());
    colorIndex = colors.indexOf(rgb2hex(currentColor).toUpperCase());
    for (var i = 0; i < $("#modal span").length; i++) {
        $("#modal span:nth-of-type("+(i+1)+")").attr("class","nope");
    }
    $("#modal span:nth-of-type("+(colorIndex+1)+")").attr("class","selected");
    openPopup("#modal");
}

function changeTierColour(selected) {
    for (var i = 0; i < $("#modal span").length; i++) {
        $("#modal span:nth-of-type("+(i+1)+")").attr("class","nope");
    }
    $(selected).attr("class","selected");
    currentTier.find(".labelHolder").css("background-color",$(selected).css("background-color"));
}

function clearTierRow() {
    for(var i = 0; i < currentTier.find("#rows div").length; i++) {
        $("#char div:last-child").after(currentTier.find("#rows div"));
    }
}

function deleteTierRow() {
    for(var i = 0; i < currentTier.find("#rows div").length; i++) {
        $("#char div:last-child").after(currentTier.find("#rows div"));
    }
    currentTier.remove();
}

function addTierRowAbove() {
    $("tr:nth-of-type("+($("tr").index(currentTier)+1)+")").before(singleTier);
}

function addTierRowBelow() {
    $("tr:nth-of-type("+($("tr").index(currentTier)+1)+")").after(singleTier);
}

function moveTierRowUp(selected) {
    currentTier = $(selected).closest("tr");
    if (currentTier.prev("tr").length != 0)
        currentTier.insertBefore(currentTier.prev("tr"));
}

function moveTierRowDown(selected) {
    currentTier = $(selected).closest("tr");
    if (currentTier.next("tr").length != 0)
        currentTier.insertAfter(currentTier.next("tr"));
}

function changeTierLabelText() {
    currentTier.find(".label").html($("#labelName").val().replace(/\n/g, "<br>"));
}

function resetTierLabel() {
    currentTier.find(".labelHolder").html('<span class="label">New Label</label>');
    $("textarea#labelName").val("New Label");
}

function openScreenshotModal() {
    openPopup("#screenshotShow");
	$("#screenshotShow").find("textarea").val(toCode());
}

function changeCharacterCheckbox(selected, extension = "png") {
    gameId = ($(selected).attr("id"));
    gameClass = ($(selected).attr("class"));
    // remove non-numeric characters - stackoverflow.com/questions/1862130/
    gameIndex = gameClass.replace(/\D/g,'');

    if($(selected).is(":checked")) {
        for (var k = 0; k <= currentGameChars[gameIndex][1]; k++) {
            $("#char div:last-child").after(singleChar);
            $("#char div:last-child").css("background-image",`url(img/${currentGame}/${gameId}/${k}.${extension})`);
            $("#char div:last-child").attr("id", `${gameId}-${k}`);
        }
    } else {
        $(".character[id^='"+currentGameChars[gameIndex][0]+"-']").each( function() {
            $(this).remove();
        });
    }
}

function toggleTierControls() {
    if (screenshotMode) {
        $("td:last-of-type").css("display","table-cell");
        $("#hidebuttons").text("Hide controls");
        screenshotMode = false;
    } else {
        $("td:last-of-type").css("display","none");
        $("#hidebuttons").text("Show controls");
        screenshotMode = true;
    }
}

function takeScreenshot() {
    $("#exportcode").val(toCode()); // generate save/load code
    closePopups();
    $("#screenshotShow").css("display","block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    if (!screenshotMode) {
        $("#hidebuttons").click();
    }
    $("#tablemain").css("margin", "3px");
    $("#tablemain").css("max-width", "100%");
    window.scrollTo(0,0);
    html2canvas(document.getElementById("tablemain")).then(function(canvas) {
        $("#screenshotShow span").after(canvas);
        $("#screenshotShow canvas").css("max-width", "100%");
        $("#screenshotShow canvas").css("height", "auto");
        $("#screenshotShow").css("top",alignPopup($("#screenshotShow")));
        $("#tablemain").removeAttr('style'); // clear css changes
    });
}

function buildCharacterLists(game) {
    currentGameChars = [];
    currentGameChars = game;
    currentGame = game[0][0];
    $(".character").each( function() {
        $(this).remove();
    });
    $(".characterCheckWrap").each( function() {
        $(this).remove();
    });
    $(".selectAllWrap").each( function() {
        $(this).remove();
    });
    
    for (var i = 1; i < game.length; i++) {
        $("#checklist div:last-child").after(singleCheckWrap);
        $("#checklist div:last-child").html(game[i][2]+": <input type='checkbox' class='characterCheck "+"game"+i+"' id='"+game[i][0]+"' >");
    }
    if ((game.length - 1) % 2 != 0) {
        $("#checklist div:last-child").after(singleCheckWrap); // empty slot to format table
    }
    $("#checklist div:last-child").after(selectAllWrap);
    $("#checklist div:last-child").html("Select All: <input type='checkbox' class='selectAll' id='all' >");
}