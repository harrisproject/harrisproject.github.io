$(document).on("click mouseenter", ".letblockarea .letblock", function() {
    var num = $(this).attr('id');
    var type = $(this).attr('class').split(" ")[1];
    if(type=="numerals"){
        return;
    }
    if(type=="syllables"){
        if($(this).text() == " "){
            return;
        }
        num = num.split(",");
    }
    var div = $(this).parent().closest('div').parent().closest('div').attr('id');
    if(type=="syllables"){
        div = $(this).parent().closest('div').parent().closest('div').parent().closest('div').attr('id');
    }
    if(div==undefined){
        return;
    }
    if(type=="syllables"){
        text = language[div][type][num[0]][1];
        text = text[num[1]];
    }
    else{
        var text = language[div][type][num][0];
    }
    if(type=="syllables"){
        var phonetic = language[div][type][num[0]][0] + "+" + language[div]["vowels"][num[1]];
    }
    else{
        var phonetic = language[div][type][num][1];
    }
    var cases = language[div]["cases"];
    if(text.includes(" ")){
        text = text.split(" ");
    }
    else if(text.includes("﻿")){
        text = text.split("﻿");
    }
    else{
        text = text.split("");
    }
    $("#" + div + " .info").empty();
    $("#" + div + " .info").append("<p>Letter: <span class='letter'></span></p>");
    if((div == "ar")&&(text.length==4)){
        text.shift();
    }
    for(var t = 0; t < text.length; t++){
        if((div == "he")||(div == "ar")){
            $("#" + div + " .info" + " .letter").prepend("<span title='" + cases[t] + "'>" + text[t] + "</span><span>&nbsp;</span>");
        }
        else{
            $("#" + div + " .info" + " .letter").append("<span title='" + cases[t] + "'>" + text[t] + "</span>");
        }
    }
    $("#" + div + " .info").append("<p>Pronunciation: " + pronounce(phonetic) + "</p>");
    $("#" + div + " .info").append("<p><a target='_blank' class='ipalink' href='https://en.wikipedia.org/wiki/International_Phonetic_Alphabet'>IPA</a>: /" + ipaize(phonetic) + "/</p>");
    function pronounce(x){
        if(x.includes("+")){
            x = x.split("+");
            return pronounce(x[0]) + " <span style='color:purple'><b>+</b></span> " + pronounce(x[1]);
        }
        else if(x.includes(" ")){
            x = x.split(" ");
            if(x.length==2){
                return ipa[x[0]]["pronunciation"] + " but " + ipa[x[1]]["pronunciation"];
            }
            if(x.length==3){
                return ipa[x[0]]["pronunciation"] + " but " + ipa[x[1]]["pronunciation"] + " and " + ipa[x[2]]["pronunciation"];
            }
        }
        else{
            return ipa[x]["pronunciation"];
        }
    }
    function ipaize(x){
        if(x.includes("+")){
            x = x.split("+");
            return ipaize(x[0]) + ipaize(x[1]);
        }
        if(x.includes(" ")){
            x = x.split(" ");
            if(x.length==2){
                return ipaize(x[0]) + ipaize(x[1]);
            }
            if(x.length==3){
                return ipaize(x[0]) + ipaize(x[1]) + ipaize(x[2]);
            }
        }
        else{
            return ipa[x]["ipa"];
        }
    }
});
