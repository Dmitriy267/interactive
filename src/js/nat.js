//Просмотр фотографий
// addEventListener('load', function () {
//     addEventListener('scroll', del);

//     addEventListener('mouseover', function (e) {
//         let ev = e.target;
//         if (ev.tagName === 'IMG') {
//             let b = ev.id;
//             let t = this.document.getElementById(b).style;
//             t.transition = 'opacity 1s';
//             t.opacity = 1;
//         }
//     });
//     addEventListener('mouseout', function (e) {
//         let ev = e.target;
//         if (ev.tagName === 'IMG') {
//             let b = ev.id;
//             let t = this.document.getElementById(b).style;
//             t.transition = 'opacity 2s';
//             t.opacity = 0.2;
//         }
//     });
//     let view = document.getElementById('view');
//     let bas = document.getElementById('bas');
//     let pict = document.getElementById('pict');

//     view.addEventListener('click', del);
//     document.getElementById('basis').addEventListener('click', function (e) {
//         if (e.target.tagName === 'IMG') {
//             let sc = window.pageYOffset;
//             bas.style.top = sc + 'px';
//             view.style.top = sc + 'px';
//             pict.src = e.target.src;
//             view.style.visibility = 'visible';
//             bas.style.visibility = 'visible';
//         }
//     });

//     function del() {
//         view.style.visibility = 'hidden';
//         bas.style.visibility = 'hidden';
//         pict.src = '/public/net.png';
//     }
// });
// Конец кода Просмотр фотографий
//Гасим лишнее
// document.addEventListener('mouseover', function (e) {
//     let ev = e.target;
//     if (ev.tagName === 'IMG') {
//         for (let i = 1; i < 10; i++) {
//             let b = 'x' + i;
//             if (ev.id != b) {
//                 let t = document.getElementById(b).style;
//                 t.transition = 'opacity 1s';
//                 t.opacity = 0.1;
//             }
//         }
//     } else {
//         for (let i = 1; i < 10; i++) {
//             let b = 'x' + i;
//             let t = document.getElementById(b).style;
//             t.transition = 'opacity 2s';
//             t.opacity = 1;
//         }
//     }
// });
// Конец кода гасим лишнее

//Выбор фото из списка
// addEventListener('load', () => {
//     document.getElementById('sel').addEventListener('change', () => {
//         let a = document.getElementById('sel').value;
//         document.getElementById('photo').src =
//             '/images/nature/nat' + a + '.png';
//     });
// });
// Конец Выбор фото из списка

//Увеличение и растворение
// let y = 1;
// let w = 0;
// let h = 0;
// addEventListener('click', (ev) => {
//     let e = ev.target;
//     if (e.tagName == 'IMG') {
//         let t = document.getElementById(e.id).style;
//         if (y == 1) {
//             let d = document.getElementById(e.id);
//             w = d.offsetLeft;
//             console.log(w);
//             h = d.offsetTop;
//             console.log(h);
//             y = 2;
//             for (let i = 1; i < 7; i++) {
//                 let b = 'i' + i;
//                 if (e.id != b) {
//                     let p = document.getElementById(b).style;
//                     p.transition = 'opacity 1s';
//                     p.opacity = 0;
//                 }
//             }
//             t.zIndex = 2;
//             t.transition = 'width 1s, left 1s, top 1s, transform 1s';
//             t.transform = 'rotate(360deg)';
//             t.width = 600 + 'px';
//             t.left = 200 + 'px';
//             t.top = 100 + 'px';
//         } else {
//             y = 1;
//             for (let i = 1; i < 7; i++) {
//                 let b = 'i' + i;

//                 let p = document.getElementById(b).style;
//                 p.transition = 'opacity 2s';
//                 p.opacity = 1;
//             }
//             t.transition = 'width 1s, left 1s, top 1s, transform 1s';
//             t.transform = 'rotate(0deg)';
//             t.width = 300 + 'px';
//             t.left = w + 'px';
//             t.top = h + 'px';
//             t.zIndex = 1;
//         }
//     }
// });
//Конец увеличения и растворения

//Список альбомов
// addEventListener('load', function () {
//     let arr = [
//         [1, 2, 14, 20, 30, 70],
//         [18, 22, 29, 35, 60, 74],
//         [3, 6, 13, 27, 88, 89],
//     ];
//     document.getElementById('sel').addEventListener('change', () => {
//         document.getElementById('ins').innerHTML = '';
//         let a = document.getElementById('sel').value;

//         if (a != 99) {
//             let summ = '';
//             for (let i = 0; i < arr[a].length; i++) {
//                 summ =
//                     summ +
//                     '<img src="/images/albom/' +
//                     arr[a][i] +
//                     '.jpg" class="im" alt="Фото" >';
//                 document.getElementById('ins').innerHTML = summ;
//             }
//         }
//     });
// });
// addEventListener('scroll', del);
// let bas = document.getElementById('bas').style;
// let view = document.getElementById('view');
// let pict = document.getElementById('pict');
// document.getElementById('basis').addEventListener('click', (ev) => {
//     let e = ev.target;
//     if (e.tagName === 'IMG') {
//         let sc = window.pageYOffset;

//         bas.top = sc + 'px';
//         view.style.top = sc + 'px';
//         pict.src = e.src;
//         view.style.visibility = 'visible';
//         bas.visibility = 'visible';
//     }
// });
// view.addEventListener('click', del);
// function del() {
//     view.style.visibility = 'hidden';

//     bas.visibility = 'hidden';
//     pict.src = '/images/albom/net.jpg';
// }
//Конец списка альбомов

// Слои вместо фото
// addEventListener('load', function () {
//     document.getElementById('basis').addEventListener('click', look);
//     document.getElementById('view').addEventListener('click', del);
//     addEventListener('scroll', del);

//     let bas = document.getElementById('bas').style;
//     let view = document.getElementById('view').style;
//     let pict = document.getElementById('pict');

//     function look(ev) {
//         let ni = ev.target.id;

//         if (ni.indexOf('fr') == 0) {
//             let sc = window.pageYOffset;
//             bas.top = sc + 'px';
//             view.top = sc + 'px';
//             pict.src = '/images/berries/' + ni + '.jpg';
//             view.visibility = 'visible';
//             bas.visibility = 'visible';
//         }
//     }
//     function del() {
//         view.visibility = 'hidden';
//         bas.visibility = 'hidden';
//         pict.src = '/images/berries/net.jpg';
//     }
// });
//Конец Слои вместо фото

//Галереи
//Смещаем фото вверх
addEventListener('load', function () {
    document.getElementById('bu').addEventListener('click', but);
});
let k = 10;
let s = 0;
function but() {
    s = s + 1;
    k = 10;
    if (s < 6) {
        mov();
    }
    if (s == 6) {
        mov();
        setTimeout(() => {
            ((k = 10), (s = 0));
        }, 1000);
        let h = document.getElementById('i1').style;
        h.opacity = 0;
        setTimeout(() => {
            h.top = '10px';
            h.transition = 'opacity 1s';
            h.opacity = 1;
            setTimeout(() => {
                if (h.opacity == 1) {
                    for (let a = 2; a < 7; a++) {
                        document.getElementById('i' + a).style.top = '10px';
                    }
                }
            }, 1000);
        }, 1000);
    }
}
function mov() {
    if (k >= -700) {
        document.getElementById('i' + s).style.top = k + 'px';
        k = k - 10;
        setTimeout(mov, 10);
    }
}
//Конец Смещаем фото вверх
//Фото по номерам
let a;
a = document.getElementById('bu92');
a.addEventListener('click', but92);
function but92(e) {
    e.preventDefault();
    let h = e.target.href;

    if (h) {
        document.getElementById('imfr').src = h;
        for (let i = 0; i < a.children.length; i++) {
            let b = a.children[i];
            b.className = b == e.target ? 'curs' : '';
        }
    }
}
//Перемотка от центра
let nz = document.getElementById('nz');
// let vp = document.getElementById('vp');
nz.addEventListener('click', prev);
vp.addEventListener('click', next);
let i94 = 5;
function prev() {
    vp.style.visibility = 'visible';
    if (i94 < 9) {
        document.getElementById('i94' + i94).style.transition = 'left 2s';
        document.getElementById('i94' + i94).style.left = '50px';
        let n = i94 + 1;
        document.getElementById('i94' + n).style.transition = 'left 2s';
        document.getElementById('i94' + n).style.left = '350px';
        i94 = i94 + 1;
        if (i94 == 9) {
            document.getElementById('nz').style.visibility = 'hidden';
        }
    }
}
function next() {
    nz.style.visibility = 'visible';
    if (i94 > 1) {
        document.getElementById('i94' + i94).style.transition = 'left 2s';
        document.getElementById('i94' + i94).style.left = '650px';
        let n = i94 - 1;
        document.getElementById('i94' + n).style.transition = 'left 2s';
        document.getElementById('i94' + n).style.left = '350px';
        i94 = i94 - 1;
        if (i94 == 1) {
            document.getElementById('vp').style.visibility = 'hidden';
        }
    }
}
// Конец Перемотка от центра
//Галерея-аккардион
let i96 = 1;

document.getElementById('bu96').addEventListener('click', function () {
    if (i96 < 6) {
        document.getElementById('i96' + i96).style.transition = 'width 2s';
        document.getElementById('i96' + i96).style.width = 0;
        document.getElementById('i96' + i96).style.left = 0;
    }
    let n = i96 + 1;
    document.getElementById('i96' + n).style.transition = 'width 1.95s';
    document.getElementById('i96' + n).style.width = '600px';
    i96 = i96 + 1;
    if (i96 == 6) {
        document.getElementById('bu96').value = 'Просмотр завершен';
    }
});
//Конец Галерея-аккардион
//Конец Галереи
