var scss = `
* {
    margin: 0;
    padding: 0;
    font-family: 'Merriweather', serif;
}
.imagediv{
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 140%;
}
#moscow{
    background-image: url('images/moscow.jpg');
}
#mongolia{
    background-image: url('images/mongolia.jpg');
}
#kazakhstan{
    background-image: url('images/astana.jpg');
}
#skopje{
    background-image: url('images/skopje.jpg');
}
#kharkiv{
    background-image: url('images/kharkiv.jpg');
}
.quote{
    position: absolute;
    left: 0;
    top: 40%;
    width: 100%;
    text-align: center;
    color: white;
    h1{
        font-size: 60px;
    }
}
#scripts{
    height: 50px;
    background-color: #034f84;
    div{
        width: 33.33%;
        height: 50px;
        background-color: #034f84;
        float: left;
        text-align: center;
        color: white;
        font-size: 36px;
    }
    div:hover{
        background-color: white;
        color: #034f84;
    }
}
.info{
    height: auto;
    color: white;
    li{
        font-size: 22px;
    }
    h1{
        font-size: 40px;
        width: 45%;
        text-align: center;
    }
}
.bigbreak {
    line-height: 300%;
}
.line{
    text-decoration: underline;
    color: black;
}
table{
    color: white;
    font-size: 18px;
    width: 50%;
    text-align: center;
}
tr td {
    border-bottom:1px solid white;
  }
`;