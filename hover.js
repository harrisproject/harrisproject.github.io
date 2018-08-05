$(document).on("click mouseenter", ".letblock", function() {
    var num = $(this).attr('id');
    var div = $(this).parent().closest('div').attr('id');
    if(div==undefined){
        return;
    }
    var type = $(this).attr('class').split(" ")[1];
    var text = language[div][type][num][0];
    var phonetic = language[div][type][num][1];
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
        if(!x.includes(" ")){
            return ipa[x]["pronunciation"];
        }
        else{
            x = x.split(" ");
            return ipa[x[0]]["pronunciation"] + " " + ipa[x[1]]["pronunciation"];
        }
    }
    function ipaize(x){
        if(!x.includes(" ")){
            return ipa[x]["ipa"];
        }
        else{
            x = x.split(" ");
            return ipa[x[0]]["ipa"] + ipa[x[1]]["ipa"];
        }
    }
});
