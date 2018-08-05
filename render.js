$(document).ready(function () {
    var scripttypes = [];
    Object.keys(language).forEach(script => renderfunction(language[script]));
    function renderfunction(x){
        if(!scripttypes.includes(x.type)){
            scripttypes.push(x.type);
            $("#content").append("<div class='scripttype' id='" + x.type + "'></div>");
        }
        $("#" + x.type).append("<div class='scrblock' id='" + x.id + "'><a class='titl' target='_blank' href='" + x.web + "'>" + x.name + "</a><br><a class='titl' target='_blank' href='" + x.webalt + "'>" + x.namealt + "</a><div class='info></div></div>");
        $("#" + x.id).append("<div class='info'></div>");
        function letterrender(){
            for(var y = 0; y < x.letters.length; y++){
                var txt = x.letters[y][0];
                if(x.id == "ar"){
                    txt = txt.split(" ")[0];
                }
                $("#" + x.id).append("<div class='letblock letters notextra " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'></div>");
                $("#" + x.id + " #" + y).append("<span style='margin-top:0px'>" + txt + "</span>");
                if(x.letters[y].length>2){
                    $("#" + x.id + " #" + y).append("<br><span style='font-size:9px;margin-top:10px'>" + x.letters[y][2] + " / " + x.letters[y][3] + "</span>");
                }
            }
        }
        function vowelrender(){
            for(var y = 0; y < x.vowels.length; y++){
                $("#" + x.id).append("<div class='letblock vowels notextra " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'>" + x.vowels[y][0] + "</div>");
            }
        }
        function extrarender(){
            if(x.extraletters!==undefined){
                for(var y = 0; y < x.extraletters.length; y++){
                    $("#" + x.id).append("<div class='letblock extraletters letters " + x.direction + " " + ipa[x.letters[y][1].split(" ")[0]]["type"] + "' id='" + y + "'>" + x.extraletters[y][0] + "</div>");
                }
            }
        }
        if(x.type=="alphabet"){
            letterrender();
            extrarender();
        }
        if(x.type=="abjad"){
            letterrender();
            vowelrender();
            extrarender();
        }
        if(x.type=="abugida"){
            letterrender();
            vowelrender();
            extrarender();
        }
    }
    for(var g = 0; g < scripttypes.length; g++){
        $("#" + scripttypes[g]).prepend(scripttype[scripttypes[g]]);
    }
    //fix later
    $(".extraletters").hide();
});
