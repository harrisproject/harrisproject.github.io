$(document).ready(function () {
    Object.keys(language).forEach(script => renderfunction(language[script]));
    function renderfunction(x){
        $("#content").append("<div class='scrblock' id='" + x.id + "'><a class='titl' target='_blank' href='" + x.web + "'>" + x.name + "</a><br><a class='titl' target='_blank' href='" + x.webalt + "'>" + x.namealt + "</a><div class='info></div></div>");
        $("#" + x.id).append("<div class='info'></div>");
        for(var y = 0; y < x.letters.length; y++){
            var txt = x.letters[y][0];
            if(x.id == "ar"){
                txt = txt.split(" ")[0];
            }
            $("#" + x.id).append("<div class='letblock letters " + x.direction + " " + ipa[x.letters[y][1]]["type"] + "' id='" + y + "'>" + txt + "</div>");
        }
        if(x.type == "abjad"){
            for(var y = 0; y < x.vowels.length; y++){
                $("#" + x.id).append("<div class='letblock vowels " + x.direction + " " + ipa[x.vowels[y][1]]["type"] + "' id='" + y + "'>" + x.vowels[y][0] + "</div>");
            }
        }
    }
});