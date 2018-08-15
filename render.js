$(document).ready(function () {
    var scripttypes = [];
    Object.keys(language).forEach(script => renderfunction(language[script]));
    function renderfunction(x){
        if(!scripttypes.includes(x.type)){
            scripttypes.push(x.type);
            $("#content").append("<div class='scripttype' id='" + x.type + "'></div>");
        }
        $("#" + x.type).append("<div class='scrblock' id='" + x.id + "'></div>");
        $("#" + x.id).append("<a class='titl' target='_blank' href='" + x.web + "'>" + x.name + "</a><br><a class='titl' target='_blank' href='" + x.webalt + "'>" + x.namealt + "</a><br>");
        $("#" + x.id).append("<div class='loc' id='loc'><span class='titl'>Locations:&nbsp;</span></div>");
        for(var l = 0; l < x.locations.length; l++){
            $("#" + x.id + " #loc").append("<a class='titl' target='_blank' href='https://en.wikipedia.org/wiki/" + x.locations[l].replace(" ","_") + "'>" + x.locations[l] + "&nbsp; </a>");
        }
        $("#" + x.id).append("<div class='loc' id='lang'><span class='titl'>Languages:&nbsp;</span></div>");
        for(var l = 0; l < x.languages.length; l++){
            $("#" + x.id + " #lang").append("<a class='titl' target='_blank' href='https://en.wikipedia.org/wiki/" + x.languages[l] + "_language'>" + x.languages[l] + "&nbsp; </a>");
        }
        $("#" + x.id).append("<div class='info'></div>");
        function letterrender(){
            $("#" + x.id).append("<div class='letblockarea'></div>");
            for(var y = 0; y < x.letters.length; y++){
                var txt = x.letters[y][0];
                if(x.id == "ar"){
                    txt = txt.split(" ")[0];
                }
                $("#" + x.id + " .letblockarea").append("<div class='letblock letters notextra " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'></div>");
                $("#" + x.id + " .letblockarea #" + y).append("<span style='margin-top:0px'>" + txt + "</span>");
                if(x.letters[y].length>2){
                    $("#" + x.id + " #" + y).append("<br><span style='font-size:9px;margin-top:10px'>" + x.letters[y][2] + " / " + x.letters[y][3] + "</span>");
                }
            }
        }
        function syllablerender(){
            $("#" + x.id).append("<div class='letblockarea'></div>");
            for(var y = 0; y < x.syllables.length; y++){
                $("#" + x.id + " .letblockarea").append("<div class='chsyll' id='" + x.id + y + "'></div>");
                x.syllables[y][1] = x.syllables[y][1].split(",");
                for(var z = 0; z < x.syllables[y][1].length; z++){
                    $("#" + x.id + y).append("<div class='letblock syllables notextra v " + x.direction + "' id='" + y + "," + z + "'>" + x.syllables[y][1][z] + "</div>");
                }
            }
            for(var y = 0; y < x.othersyllables.length; y++){
                $("#" + x.id + " .letblockarea").append("<div class='letblock othersyllables notextra c " + x.direction + "' id='" + y + "'>" + x.othersyllables[y][0] + "</div>");
            }
            for(var y = 0; y < x.letters.length; y++){
                $("#" + x.id + " .letblockarea").append("<div class='letblock letters notextra o " + x.direction + "' id='" + y + "'>" + x.letters[y][0] + "</div>")
            }
        }
        function vowelrender(){
            for(var y = 0; y < x.vowels.length; y++){
                $("#" + x.id + " .letblockarea").append("<div class='letblock vowels notextra " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'>" + x.vowels[y][0] + "</div>");
            }
        }
        function extrarender(){
            if(x.extraletters!==undefined){
                for(var y = 0; y < x.extraletters.length; y++){
                    $("#" + x.id + " .letblockarea").append("<div class='letblock extraletters letters " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'>" + x.extraletters[y][0] + "</div>");
                }
            }
        }
        function numberrender(){
            if(x.numerals!==undefined){
                for(var y = 0; y < x.numerals.length; y++){
                    $("#" + x.id + " .letblockarea").append("<div class='letblock numerals " + x.direction + "'>" + x.numerals[y][0] + " = " + x.numerals[y][1] + "</div>")
                }
            }
        }
        if(x.type=="alphabet"){
            letterrender();
            extrarender();
            numberrender();
        }
        if(x.type=="abjad"){
            letterrender();
            vowelrender();
            extrarender();
            numberrender();
        }
        if(x.type=="abugida"){
            letterrender();
            vowelrender();
            extrarender();
        }
        if(x.type=="syllabary"){
            syllablerender();
            extrarender();
        }
    }
    for(var g = 0; g < scripttypes.length; g++){
        $("#" + scripttypes[g]).prepend(scripttype[scripttypes[g]]);
    }
    //fix later
    $(".extraletters").hide();
});
