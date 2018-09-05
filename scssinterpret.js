interpret(scss);
function interpret(x){
    var obj = {}, extend = {}, mixin = {}, selector = [], msr = "", rep = false;
    var measure = ["%","cm","em","ex","in","mm","pc","pt","px","vh","vw","vmin"];
    var num = /\d/;
    x = x.replace(/(\r\n|\n|\r)/g, "").replace(/\{/g, "~{~").replace(/\}/g, "~}~").replace(/\;/g, "~").split("~");
    for(var y = 0; y < x.length; y++){
        if(x[y].includes("@extend")){
            x.splice(y+1, 0, ...extend[x[y].trim().split(" ")[1]]);
        }
        else if(x[y].includes("@include")){
            var mix = x[y].trim().split(" ")[1];
            mix = mix.substr(0,mix.length-1).split("(");
            mix[1] = mix[1].split(",");
            for(var d = 0; d < mix[1].length; d++){
                obj[mixin[mix[0]]["vars"][d]] = mix[1][d];
            }
            x.splice(y+1, 0, ...mixin[mix[0]]["expr"]);
            selector.pop();
        }
        else if(x[y+1]=="{"){
            if(x[y].includes("%")){
                extend[x[y]] = x.slice(x.indexOf("{",y)+1,x.indexOf("}",y));
                y = x.indexOf("}",y);
            }
            else if(x[y].includes("@mixin")){
                var mix = x[y].substr(x[y].indexOf(' ')+1,x[y].substr(x[y].indexOf(' ')).length-2).split("(");
                mixin[mix[0]] = {};
                mixin[mix[0]]["vars"] = mix[1].split(",");
                mixin[mix[0]]["expr"] = x.slice(x.indexOf("{",y)+1,x.indexOf("}",y));
                for(var g = 0; g < mixin[mix[0]]["vars"].length;g++){
                    obj[mixin[mix[0]]["vars"][g]] = "";
                }
                y = x.indexOf("}",y);
            }
            else{
                selector.push(x[y].trim());
            }
        }
        else if(x[y]=="}"){
            selector.pop();
        }
        else if(x[y]!=="{"){
            disp(x[y]);
        }
    }
    function disp(z){
        if(z.trim()==""){
            return;
        }
        z = z.split(":");
        if(z[0].charAt(0)=="$"){
            obj[z[0].trim()] = z[1].trim();
        }
        else{
            if(z[1].includes("$")){
                for (var vr in obj) {
                    var re = RegExp("\\" + vr, 'g');
                    z[1] = z[1].replace(re, obj[vr]);
                }
            }
            if((num.test(z[1]))&&(z[1].includes("+")||z[1].includes("-")||z[1].includes("*")||z[1].includes("/"))){
                for(var m = 0; m < measure.length; m++){
                    var loc = z[1].indexOf(measure[m]);
                    if((loc>0)&&(!isNaN(z[1].charAt(loc-1)))){
                        var re = RegExp(measure[m], 'g');
                        z[1] = z[1].replace(re, "~" + measure[m] + "~");
                        rep = true;
                    }
                }
                if(rep){
                    z[1] = z[1].split("~");
                    for(var n = 0; n < z[1].length; n++){
                        if(measure.includes(z[1][n])){
                            msr = z[1][n];
                            z[1].splice(n,1);
                        }
                    }
                    z[1] = eval(z[1].join("")) + msr;
                }
            }
            document.getElementsByTagName('head')[0].innerHTML += `<style>${selector.join(" ").replace(" &","")}{${z[0].trim()}:${z[1].trim()}}</style>`;
            console.log(selector.join(" ").trim() + " { " + z[0].trim() + " : " + z[1].trim() + ";}");
        }
    }
}