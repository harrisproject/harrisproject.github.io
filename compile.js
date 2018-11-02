function compile(input){
    var parse = [];
    var variables = {};
    var css = {};
    var selector = [];
    var wrap = [];
    input = input.split(/\n/);
    for(var x = 0; x < input.length; x++){
        if(input[x] == ""){
            input.splice(x,1);
            x--;
        }
    }
    for(var x = 0; x < input.length; x++){
        parse.push(input[x].split("    ").length - 1);
        input[x] = input[x].trim();
    }
    //
    for(var x = 0; x < input.length; x++){
        if(parse[x] > selector.length){
            selector.push("");
        }
        if(parse[x] < selector.length){
            selector = selector.slice(0, parse[x]);
        }
        var selec = selector.join(" ");
        if(css[selec] == undefined){
            css[selec] = [];
        }
        if(input[x].charAt(0) == "$"){
            variables[input[x].split(" ")[0]] = input[x].split(" ")[1];
        }
        else if(input[x].split(" ")[0] == "%extend"){
            css[selec] = css[selec].concat(css[input[x].substr(input[x].indexOf(" ")+1)]);
        }
        else if(input[x].includes(" ")){
            var c = input[x];
            input[x] = [];
            input[x][0] = c.split(" ")[0];
            input[x][1] = c.substr(c.indexOf(" ")+1);
            if(input[x][1].includes(" ")){
                input[x][1] = input[x][1].split(" ");
                for(var t = 0; t < input[x][1].length; t++){
                    if(variables[input[x][1][t]] !== undefined){
                        input[x][1][t] = variables[input[x][1][t]];
                    }
                }
                input[x][1] = input[x][1].join(" ");
            }
            if(variables[input[x][1]] !== undefined){
                input[x][1] = variables[input[x][1]];
            }
            css[selec].push([input[x][0], input[x][1]]);
        }
        else{
            selector.push(input[x]);
        }
    }
    //console.log(input);
    //console.log(parse);
    //console.log(variables);
    //console.log(selector);
    //console.log(css);
    var finalstring = "";
    for(var info in css){
        if(css[info].length > 0){
            finalstring = finalstring + info + "{\n";
            for(var u = 0; u < css[info].length; u++){
                finalstring = finalstring + css[info][u][0] + ": " + css[info][u][1] + ";\n";
            }
            finalstring += "}\n";
        }
    }
    console.log(finalstring);
    return finalstring;
}