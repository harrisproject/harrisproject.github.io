$(document).ready(function(){
    var data = [
        {
            type : "image",
            imagename : "moscow",
            originalquote : "Умот не е во џебот, туку во главата",
            translatedquote : "The brain is not in the pocket, but in the head",
            location : "Skopje, Republic of Macedonia",
        },
        {
            type : "list",
            backgroundcolor: "#d64161",
            title: "Why learn to read Cyrillic?",
            list: [
                "✓ Cyrillic is used by over 250 million people, from Montenegro to Mongolia",
                "✓ You will be able to easily read signs and names in a dozen countries",
                "✓ Knowing how to read Cyrillic can look good on a resumé",
                "✓ Reading Cyrillic is the first step in learning Russian, Ukrainian, Bulgarian, and many more languages",
                "✓ Be more adept at traveling and doing business in Cyrillic-using countries",
                "* This website shows how to read Russian, but ends with a section on letters found in other languages *",
            ],
        },
        {
            type : "image",
            imagename : "mongolia",
            originalquote : "Санаа соxор бол нүд соxор",
            translatedquote : "The eye is sightless when the mind is oblivious",
            location : "Ulanbaatar, Mongolia",
        },
        {
            type: "chart",
            backgroundcolor: "#feb236",
            title: "Vowels in the Russian Alphabet",
            columnone: "Vowels",
            columntwo: "Pronunciation",
            content: [
                ['Аа','t[a]ll'],['Ее','m[e]n or [ye]llow'],['Ёё','[yo]del'],
                ['Ии','sk[i]'],['Йй','ma[y]or'],['Оо','[o]pen'],
                ['Уу','r[u]de'],['Ыы','b[i]t'],['Ээ','m[e]n'],
                ['Юю','[u]se'],['Яя','[ya]rd'],
            ],
        },
        {
            type : "image",
            imagename : "astana",
            originalquote : "Шығын шықпай кіріс кірмейді",
            translatedquote : "No expenses, no profit",
            location : "Astana, Republic of Kazakhstan",
        },
        {
            type: "chart",
            backgroundcolor: "#6b5b95",
            title: "Consonants in the Russian Alphabet",
            columnone: "Consonants",
            columntwo: "Pronunciation",
            content: [
                ['Бб','[b]ad'],['Вв','[v]alley'],['Гг','[g]one'],
                ['Дд','[d]ance'],['Жж','plea[s]ure'],['Зз','[z]ipper'],
                ['Кк','[k]ite'],['Лл','[l]ight'],['Мм','[m]ap'],
                ['Нн','[n]ose'],['Пп','[p]air'],['Рр','[r]un'],
                ['Сс','[c]ycle'],['Тт','[t]in'],['Фф','[f]act'],
                ['Хх','Lo[ch]'],['Цц','hi[ts]'],['Чч','[ch]air'],
                ['Шш','[sh]are'],['Щщ','pu[shch]air'],
            ],
        },
        {
            type : "image",
            imagename : "skopje",
            originalquote : "Умот не е во џебот, туку во главата",
            translatedquote : "The brain is not in the pocket, but in the head",
            location : "Skopje, Republic of Macedonia",
        },
        {
            type: "chart",
            backgroundcolor: "#ff7b25",
            title: "Special Letters in the Russian Alphabet",
            columnone: "Letters",
            columntwo: "Pronunciation",
            content: [
                ['Ъъ','Prevents the previous consonant from being palatized<br>(not pronounced near the roof of the mouth)'],
                ['Ьь','Ensures that the previous consonant is palatized<br>(pronounced near the roof of the mouth)'],
            ],
        },
        {
            type : "image",
            imagename : "kharkiv",
            originalquote : "В каламутній воді легко рибу ловити",
            translatedquote : "It is good fishing in troubled waters",
            location : "Kharkiv, Ukraine",
        },
        {
            type: "chart",
            backgroundcolor: "#82b74b",
            title: "More Cyrillic Letters",
            columnone: "Letters",
            columntwo: "Pronunciation",
            content: [
                ['Іі','sk[i] or [yie]ld',],['Ўў','[w]et'],['Її','[yie]ld'],
                ['Ъъ','n[u]t (in Bulgarian)'],['Ђђ','a[dj]ust'],['Јј','[y]am'],
                ['Љљ','mi[lli]on'],['Њњ','o[ni]on'],['Ћћ','[ch]air'],
                ['Џџ','[j]et'],['Ѓѓ','a[dj]ust'],['Ќќ','[ch]air'],
                ['З́з́','plea[s]ure'],['С́с́','[sh]are'],['Ӣӣ','sk[i]'],
                ['Ққ','[c]ut, but farther back in the mouth'],['Ӯӯ','f[oo]t'],['Ҳҳ','[h]at'],
                ['Ҷҷ','[j]et'],['Ғғ','uvular French [r]'],['Ңң','o[ni]on'],
                ['Өө','m[u]d'],['Үү','[y]am'],['Ұұ','r[u]de'],
                ['Һһ','[h]at'],['Әә','c[a]t'],
            ],
        },
    ];
    for(var d = 0; d < data.length; d++){
        if(data[d].type == "image"){
            $("body").append(
                `<div class="imagediv" style="background-image : url(images/${data[d].imagename}.jpg)">
                    <div class="quote">
                        <h1>${data[d].originalquote}</h1>
                        <h1>${data[d].translatedquote}</h1>
                        <p>${data[d].location}</p>
                    </div>
                </div>`
            );
        }
        if(data[d].type == "list"){
            $("body").append(
                `<div class="info" style="background-color : ${data[d].backgroundcolor}">
                    <br class="bigbreak">
                    <h1>${data[d].title}</h1>
                    <br>
                    <ul>
                        ${data[d].list.map((i)=>
                            `<li>${i}</li>`
                        ).join('')}
                    </ul>
                    <br class="bigbreak">
                </div>`
            );
        }
        if(data[d].type == "chart"){
            $("body").append(
                `<div class="info" style="background-color : ${data[d].backgroundcolor}">
                    <br class="bigbreak">
                    <h1>${data[d].title}</h1>
                    <br>
                    <table>
                        <tr>
                            <th>${data[d].columnone}</th>
                            <th>${data[d].columntwo}</th>
                        </tr>
                        ${data[d].content.map((c)=>
                            `<tr>
                                <td>${c[0]}</td>
                                <td>${c[1].replace(/\[/g, "<span class='line'>").replace(/\]/g, "</span>")}</td>
                            </tr>`
                        ).join('')}
                    </table>
                    <br class="bigbreak">
                </div>`
            );
        }
    }
});