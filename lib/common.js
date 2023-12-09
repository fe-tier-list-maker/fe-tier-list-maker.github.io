// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";

// number is last numbered filename in the list for ease of organization
var gameFe = [
    ["fe", 0, ""],
    ["sd", 58, "Shadow Dragon"],
    ["sde", 5, "Shadow Dragon Extra"],
    ["mote2", 44, "Mystery of the Emblem Book 2"],
    ["mote1", 30, "Mystery Book 1 and Extra"],
    ["nm", 77, "New Mystery of the Emblem"],
    ["nme", 7, "New Mystery Extra"],
    ["sov", 33, "Shadows of Valentia"],
    ["sove", 14, "Shadows of Valentia Extra"],
    ["ghw1", 23, "Genealogy Part 1"],
    ["ghw1e", 28, "Genealogy Part 1 Extra"],
    ["ghw2", 39, "Genealogy Part 2"],
    ["ghw2e", 23, "Genealogy Part 2 Extra"],
    ["th776", 51, "Thracia 776"],
    ["th776e", 27, "Thracia 776 Extra"],
    ["bib", 53, "Binding Blade"],
    ["bibe", 21, "Binding Blade Extra"],
    ["bla", 43, "Blazing Blade"],
    ["blae", 33, "Blazing Blade Extra"],
    ["sto", 33, "Sacred Stones"],
    ["stoe", 12, "Sacred Stones Extra"],
    ["por", 45, "Path of Radiance"],
    ["pore", 14, "Path of Radiance Extra"],
    ["rd", 72, "Radiant Dawn"],
    ["rde", 22, "Radiant Dawn Extra"],
    ["awa", 44, "Awakening"],
    ["awae", 10, "Awakening Extra"],
    ["frev", 16, "Fates Neutral"],
    ["fbr", 26, "Fates Birthright"],
    ["fcq", 25, "Fates Conquest"],
    ["fex", 33, "Fates Extra"],
    ["thrh", 53, "Three Houses"],
    ["thrhsp", 71, "Three Houses Extra"],
    ["tms", 18, "Tokyo Mirage Sessions"],
    ["hoc", 51, "Heroes"],
    ["woc", 4, "Warriors"],
    ["thw", 58, "Three Hopes"],
    ["eng", 63, "Engage"],
    ["enge", 7, "Engage Spoilers"],
    ["bsfe", 22, "BSFE Archanea Saga"],
    ["tlp", 55, "The Last Promise"],
    ["trs", 61, "TearRing Saga"],
    ["fe1", 58, "Shadow Dragon (1990)"],
    ["fe2", 34, "Gaiden"],
    ["pember", 59, "Project Ember"],
    ["mdm", 4, "FE Madoka Magica"],
];

var gameTrails = [
    ["trails", 0, ""],
    ["sky1", 56, "Trails in the Sky FC"],
    ["sky2", 18, "Trails in the Sky SC"],
    ["sky3", 17, "Trails in the Sky 3rd"],
    ["zero", 40, "Trails from Zero"],
    ["azure", 23, "Trails to Azure"],
];

var currentGame;
var currentGameChars = gameFe;
var characters;
var characterId;

$(document).on("click", "#characters", function () { // open game changer modal
    openPopup("#charChange");
});

$(document).on("click", "#help", function () { // open help modal
    openPopup("#helpMenu");
});

$(document).on("click", "#filter", function () { // open filter modal
    openPopup("#filterMenu");
});

$(document).on("change", ".selectAll", function () { // add/remove all characters
    if ($(this).is(":checked")) {
        $(".characterCheck").each(function () {
            if (!$(this).is(":checked")) {
                $(this).prop('checked', true).change();
            }
        });
    } else {
        $(".characterCheck").each(function () {
            $(this).prop('checked', false).change();
        });
    }
});

function openPopup(popup) {
    $(popup).css("display", "block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    $(popup).css("top", alignPopup($(popup)));
}

function closePopups() {
    $("#modal").css("display", "none");
    $("#charChange").css("display", "none");
    $("#helpMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height()) / 2) + "px";
}

// https://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function filter(inputTags, tagList) {
    $(".character").each(function () {
        // ignore characters already in the tiers
        if ($(this).parent().attr("id") != "char") {
            return;
        }
        tags = $(this).attr("id").split("-");
        // default for no filters
        if (inputTags.length == 0) {
            $(this).show();
        }
        // with any text, hide untagged characters
        else if (!tagList[tags[0]] || !tagList[tags[0]][tags[1]]) {
            $(this).hide();
        }
        // with any text, show tagged, matching characters
        else if (inputTags.some(text => tagList[tags[0]][tags[1]].includes(text))) {
            $(this).show();
        }
        // with any text, hide tagged, unmatching characters
        else {
            $(this).hide();
        }
    });
}

function loadFilterList(allTags) {
    var filterCheckWrap = "<div class='filterCheckWrap'></div>";
    allTags.forEach(function (tag, i) {
        $("#filterChecklist div:last-child").after(filterCheckWrap);
        $("#filterChecklist div:last-child").html(tag + ": <input type='checkbox' class='filterCheck' id='" + tag + "' >");
    });
}

function updateFilters(tagList) {
    currTags = []
    $(".filterCheck").each(function () {
        if ($(this).is(":checked")) {
            currTags.push($(this).attr("id"));
        }
    });
    filter(currTags, tagList);
}

function tierlistSize() {
    if ($("table").width > $("#tablewrap").width)
        $("#tablewrap").css("display", "table-cell");
    else
        $("#tablewrap").css("display", "block");
}

function toCode() { // format game==label|color|char1|char2|...==label|color|char1|char2|...==...
    var codeColors = [], labels = [], currentChars = [], shareCode = "";
    characters = [];
    $("tr").each(function () {
        currentChars = [];
        labels.push($(this).find(".label").html());
        codeColors.push(colors.indexOf(rgb2hex($(this).find(".labelHolder").css("background-color")).toUpperCase()));
        $(this).find(".character").each(function () {
            currentChars.push($(this).attr("id"));
        });
        characters.push(currentChars);
    });
    shareCode += currentGame + "==";
    for (var i = 0; i < labels.length; i++) {
        shareCode += labels[i] + "|" + codeColors[i];
        if (characters[i].length != 0)
            shareCode += "|";
        for (var c = 0; c < characters[i].length; c++) {
            shareCode += characters[i][c];
            if (c != characters[i].length - 1)
                shareCode += "|";
        }
        if (i != labels.length - 1)
            shareCode += "==";
    }
    console.log(shareCode);
    return shareCode;
}

function loadCode(code, defaultList) {
    var codeSplit = [], tempTier = [], processedCode = [];
    codeSplit = code.split("==");
    for (var i = 0; i < codeSplit.length; i++) {
        tempTier = codeSplit[i].split("|");
        tempTier[1] = Number(tempTier[1]);
        for (var j = 2; j < tempTier.length; j++) {
            tempTier[j] = tempTier[j].split("-");
        }
        processedCode[i] = tempTier;
    }
    $("tr").each(function () {
        $(this).remove();
    });
    console.log(processedCode);

    changeGame(defaultList);
    // select only the games that appear
    $(".selectAll").prop('checked', false).change();
    selectionList = [];
    for (var i = 1; i < processedCode.length; i++) {
        for (var j = 2; j < processedCode[i].length; j++) {
            title = processedCode[i][j][0];
            checkBox = $("#" + title + ".characterCheck");
            gameClass = (checkBox.attr("class"));
            // remove non-numeric characters - stackoverflow.com/questions/1862130/
            gameIndex = gameClass.replace(/\D/g, '');

            // add if unique
            if (selectionList.indexOf(parseInt(gameIndex)) === -1) {
                selectionList.push(parseInt(gameIndex));
            }
        }
    }
    // sort by ascending
    selectionList.sort(function (a, b) { return a - b; });
    for (var x = 0; x < selectionList.length; x++) {
        checkBox = $(".characterCheck.game" + selectionList[x]);
        if (!checkBox.is(":checked")) {
            checkBox.prop('checked', true).change();
        }
    }
    for (var i = 1; i < processedCode.length; i++) {
        $("tbody").append(singleTier);
        $("tr:last-of-type").find(".labelHolder").css("background-color", colors[processedCode[i][1]]);
        $("tr:last-of-type").find(".label").html(processedCode[i][0]);
        for (var k = 2; k < processedCode[i].length; k++) {
            title = processedCode[i][k][0];
            index = processedCode[i][k][1];
            $("#" + title + "-" + index + ".character").detach().appendTo($("tr:last-of-type").find(".tier"));
            /*
            $("tr:last-of-type").find(".tier div:last-child").after(singleChar);
            $("tr:last-of-type").find(".tier div:last-child").css("background-image","url(img/"+processedCode[0][0]+"/"+title+"/"+index+".png)");
            $("tr:last-of-type").find(".tier div:last-child").attr("id", title + "-" + index);
            $("#char > #"+title+"-"+index).remove();
            */
        }
    }
}

// For hamburger menu, taken from https://codepen.io/mranenko/pen/wevamj
function loadHamburger() {
    var hamburger = {
        nav: document.querySelector('#nav'),
        navToggle: document.querySelector('.nav-toggle'),

        initialize() {
            this.navToggle.addEventListener('click',
                () => { this.toggle(); });
        },

        toggle() {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },
    };
    hamburger.initialize();
}

loadHamburger();
