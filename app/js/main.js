document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animation");

    function checkScroll() {
        elements.forEach(function (element) {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("open");
}

//



// JS TRAIN


// 1 hw
let a = 34, b = 20, c = 'Новий '
a = a + 2
b = b - 5
c = c + 'Рядок!'
console.log(a, b, c)

///////////////////////////////////
let n = 4525
let g = 99
//4525.99 - number
let h = (`${n}.${g}`)
console.log(parseFloat(h))
////////////////////////////////////

//2 hw

let min = Math.floor(Math.random() * 59);

console.log(min);

if (min < 15) {
    console.log('Перша чверть')
} else if (min >= 15 && min < 30) {
    console.log('Друга чверть')
} else if (min > 30 && min <= 45) {
    console.log('Третя чверть')
} else {
    console.log('Четверта чверть')
}

/////////////////////////////////

let lang = 'en'

if (lang === 'ua') {
    lang = ['Понеділок, вівторок, середа, четвер, пятниця, субота, неділя']
} else if (lang === 'en') {
    lang = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
}
console.log(lang)

//////////////////////////////////

// Реализація через рядок с відомимим значеннями

let str = '1112111'
let num = +str.slice(0,3)







///////
let noneNumber = Math.floor(Math.random() * 100);


