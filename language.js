var language = {
    cy: {
        letters: [
            ["Аа",'a'],["Бб",'b'],["Вв",'v'],
            ["Гг",'g'],["Дд",'d'],["Ее",'e'],
            ["Ёё",'yo'],["Жж",'zh'],["Зз",'z'],
            ["Ии",'i'],["Йй",'y'],["Кк",'k'],
            ["Лл",'l'],["Мм",'m'],["Нн",'n'],
            ["Оо",'o'],["Пп",'p'],["Рр",'r'],
            ["Сс",'s'],["Тт",'t'],["Уу",'u'],
            ["Фф",'f'],["Хх",'x'],["Цц",'ts'],
            ["Чч",'ch'],["Шш",'sh'],["Щщ",'sch'],
            ["Ъъ",'npl'],["Ыы",'ih'],["Ьь",'pl'],
            ["Ээ",'e'],["Юю",'yu'],["Яя",'ya']
        ],
        direction: 'ltr',
        name: 'Cyrillic Script',
        namealt: 'Кириллица',
        id: 'cy',
        type: 'alphabet',
        web: 'https://en.wikipedia.org/wiki/Cyrillic_script',
        webalt: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D1%86%D0%B0',
        cases: ["Uppercase","Lowercase"]
    },
    gr: {
        letters: [
          ["Αα",'a'],["Ββ",'v'],["Γγ",'gy'],
          ["Δδ",'dh'],["Εε",'e'],["Ζζ",'z'],
          ["Ηη",'i'],["Θθ",'th'],["Ιι",'i'],
          ["Κκ",'k'],["Λλ",'l'],["Μμ",'m'],
          ["Νν",'n'],["Ξξ",'ks'],["Οο",'o'],
          ["Ππ",'p'],["Ρρ",'r'],["Σσς",'s'],
          ["Ττ",'t'],["Υυ",'y'],["Φφ",'f'],
          ["Χχ",'x'],["Ψψ",'ps'],["Ωω",'o']
        ],
        direction: 'ltr',
        name: 'Greek Alphabet',
        namealt: 'Ελληνικό Αλφάβητο',
        id: 'gr',
        type: 'alphabet',
        web: 'https://en.wikipedia.org/wiki/Greek_alphabet',
        webalt: 'https://el.wikipedia.org/wiki/%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%B1%CE%BB%CF%86%CE%AC%CE%B2%CE%B7%CF%84%CE%BF',
        cases: ["Uppercase","Lowercase","Final"]
      },
      he: {
        letters: [
          ['א‬','silent'],['בּ‬','b'],['ב‬','v'],
          ['ג‬','g'],['ד‬','d'],['ה‬','h'],
          ['ו‬','v'],['וֹ','o'],['וּ','u'],
          ['ז‬','z'],['ח‬','x'],
          ['ט‬','t'],['י‬','y'],['כּ‬','k'],
          ['כך','x'],['ל','l'],['מם','m'],
          ['נן','n'],['ס','s'],['ע','silent'],
          ['פּ','p'],['פף','f'],['צץ','ts'],
          ['ק','k'],['ר','r'],['שׁ','sh'],
          ['שׂ','s'],['ת','t']
        ],
        vowels: [
          [' ַ','a'],
          [' ָ','a'],[' ֵ','e'],[' ֶ','e'],
          [' ֹ','o'],[' ֻ','u'],[' ִ','i'],
          [' ְ','silent']
        ],
        direction: 'rtl',
        name: 'Hebrew Alphabet',
        namealt: 'אלפבית עברי',
        id: 'he',
        type: 'abjad',
        web: 'https://en.wikipedia.org/wiki/Hebrew_alphabet',
        webalt: 'https://he.wikipedia.org/wiki/%D7%90%D7%9C%D7%A4%D7%91%D7%99%D7%AA_%D7%A2%D7%91%D7%A8%D7%99',
        cases: ["","Final"]
      },
      am: {
        letters: [
          ['Աա','a'],['Բբ','b'],['Գգ','g'],
          ['Դդ','d'],['Եե','e'],['Զզ','z'],
          ['Էէ','e'],['Ըը','uh'],['Թթ','t'],
          ['Ժժ','zh'],['Իի','i'],['Լլ','l'],
          ['Խխ','x'],['Ծծ','ts'],['Կկ','k'],
          ['Հհ','h'],['Ձձ','dz'],['Ղղ','r'],
          ['Ճճ','ch'],['Մմ','m'],['Յյ','y'],
          ['Նն','n'],['Շշ','sh'],['Ոո','aa'],
          ['Չչ','ch'],['Պպ','p'],['Ջջ','j'],
          ['Ռռ','r'],['Սս','s'],['Վվ','v'],
          ['Տտ','t'],['Րր','r'],['Ցց','ts'],
          ['Ււ','v'],['Փփ','p'],['Քք','k'],
          ['և','ev'],['Օօ','o'],['Ֆֆ','f']
        ],
        direction: 'ltr',
        name: 'Armenian Alphabet',
        namealt: 'Հայերենի այբուբեն',
        id: 'am',
        type: 'alphabet',
        web: 'https://en.wikipedia.org/wiki/Armenian_alphabet',
        webalt: 'https://hy.wikipedia.org/wiki/%D5%80%D5%A1%D5%B5%D5%A5%D6%80%D5%A5%D5%B6%D5%AB_%D5%A1%D5%B5%D5%A2%D5%B8%D6%82%D5%A2%D5%A5%D5%B6',
        cases: ["Uppercase","Lowercase"]
      },
      ge: {
        letters: [
          ['ა','a'],['ბ','b'],['გ','g'],
          ['დ','d'],['ე','e'],['ვ','v'],
          ['ზ','z'],['თ','t'],['ი','i'],
          ['კ','k'],['ლ','l'],['მ','m'],
          ['ნ','n'],['ო','aa'],['პ','p'],
          ['ჟ','zh'],['რ','r'],['ს','s'],
          ['ტ','t'],['უ','u'],['ფ','p'],
          ['ქ','k'],['ღ','gy'],['ყ','q'],
          ['შ','sh'],['ჩ','ch'],['ც','ts'],
          ['ძ','dz'],['წ','ts'],['ჭ','ch'],
          ['ხ','x'],['ჯ','j'],['ჰ','h']
        ],
        direction: 'ltr',
        name: 'Georgian Alphabet',
        namealt: 'ქართული დამწერლობა',
        id: 'ge',
        type: 'alphabet',
        web: 'https://en.wikipedia.org/wiki/Georgian_scripts',
        webalt: 'https://ka.wikipedia.org/wiki/%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%A3%E1%83%9A%E1%83%98_%E1%83%93%E1%83%90%E1%83%9B%E1%83%AC%E1%83%94%E1%83%A0%E1%83%9A%E1%83%9D%E1%83%91%E1%83%90',
        cases: [""]
      },
      ar: {
        letters: [
          ['ـا ا','a'],['ـب	ـبـ	بـ	ب','b'],['ـت	ـتـ	تـ	ت','t'],
          ['ـث ـثـ ثـ ث','th'],['ـج	ـجـ	جـ	ج','j'],['ـح	ـحـ	حـ	ح','hh'],
          ['خ	ـخـ	خـ	خ','x'],['ـد	د','d'],['ـذ	ذ','dh'],
          ['ـر	ر','r'],['ـز	ز','z'],['ـس	ـسـ	سـ	س','s'],
          ['ش	ـشـ	شـ	ش','sh'],['ـص	ـصـ	صـ	ص','s_'],['ـض	ـضـ	ضـ	ض','d_'],
          ['ـط	ـطـ	طـ	ط','t_'],['ـظ	ـظـ	ظـ	ظ','dh_'],['ـع	ـعـ	عـ	ع','silent'],
          ['ـغ	ـغـ	غـ	غ','gy'],['ـف ـفـ فـ ف','f'],['ـق	ـقـ	قـ	ق','q'],
          ['ـك	ـكـ	كـ	ك','k'],['ـل	ـلـ	لـ	ل','l'],['ـم	ـمـ	مـ	م','m'],
          ['ـن	ـنـ	نـ	ن','n'],['ـه	ـهـ	هـ	ه','h'],['ـو	و','w'],
          ['ـي	ـيـ	يـ	ي','y']
        ],
        vowels: [
          [' َ','uh'],[' ِ','ih'],[' ُ','uu'],
          [' ٰ','a'],[' ٓ','a'],[' ْ','silent']
        ],
        direction: 'rtl',
        name: 'Arabic Alphabet',
        namealt: 'أبجدية عربية',
        id: 'ar',
        type: 'abjad',
        web: 'https://en.wikipedia.org/wiki/Arabic_alphabet',
        webalt: 'https://ar.wikipedia.org/wiki/%D8%A3%D8%A8%D8%AC%D8%AF%D9%8A%D8%A9_%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9',
        cases: ["Uppercase","Lowercase","Final"]
      },
      /*
      dv: {
        vowels: [
          ['अ प','uh'],['आ पा','a'],['इ पि','ih'],
          ['ई पी','i'],['उ पु','uu'],['ऊ पू','u'],
          ['ऋ पृ','r'],['ए पे','e'],['ओ पो','o'],
          ['औ पौ','aa'],['अं पं','ng'],['अः पः','h']
        ],
        letters: [
          ['','a'],['ბ','b'],['გ','g'],
          ['დ','d'],['ე','e'],['ვ','v'],
          ['ზ','z'],['თ','t'],['ი','i'],
          ['კ','k'],['ლ','l'],['მ','m'],
          ['ნ','n'],['ო','aa'],['პ','p'],
          ['ჟ','zh'],['რ','r'],['ს','s'],
          ['ტ','t'],['უ','u'],['ფ','p'],
          ['ქ','k'],['ღ','gy'],['ყ','q'],
          ['შ','sh'],['ჩ','ch'],['ც','ts'],
          ['ძ','dz'],['წ','ts'],['ჭ','ch'],
          ['ხ','x'],['ჯ','j'],['ჰ','h']
        ]
        direction: 'ltr',
        name: 'Devangari',
        namealt: 'देवनागरी',
        id: 'dv',
        type: 'abugida',
        web: 'https://en.wikipedia.org/wiki/Devanagari',
        webalt: 'https://hi.wikipedia.org/wiki/%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%B0%E0%A5%80',
        cases: ["","With प"]
      }
      */
};

//code is bad coz too lazy to fix data, fix later

for(var u = 0; u < language["ar"]["letters"].length; u++){
  language["ar"]["letters"][u][0] = language["ar"]["letters"][u][0].replace(/\t/g, ' ');
  language["ar"]["letters"][u][0] = language["ar"]["letters"][u][0].split(" ");
  language["ar"]["letters"][u][0] = language["ar"]["letters"][u][0].reverse();
  language["ar"]["letters"][u][0] = language["ar"]["letters"][u][0].join(" ");
}
