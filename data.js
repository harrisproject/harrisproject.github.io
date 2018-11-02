var data = `
$color blue
$size 12px
.text
    color red
    font-size $size
div
    border $size black
    background-color $color
    p
        %extend .text
`;
compile(data);