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
//Галерея с ограничителями

let i97 = 1;
document.getElementById('vp97').addEventListener('click', next97);
function next97() {
    if (i97 < 12) {
        i97 = i97 + 1;
        document.getElementById('nz97').style.visibility = 'visible';
        document.getElementById('im97').src =
            '/images/galleries/charter9.4/im' + i97 + '.jpg';
    }
    if (i97 == 12) {
        document.getElementById('vp97').style.visibility = 'hidden';
    }
}
document.getElementById('nz97').addEventListener('click', prev97);
function prev97() {
    if (i97 > 1) {
        i97 = i97 - 1;
        document.getElementById('vp97').style.visibility = 'visible';
        document.getElementById('im97').src =
            '/images/galleries/charter9.4/im' + i97 + '.jpg';
    }
    if (i97 == 1) {
        document.getElementById('nz97').style.visibility = 'hidden';
    }
}
//Конец Галерея с ограничителями
//Замкнутая галерея
let i98 = 1;
document.getElementById('nz98').addEventListener('click', prev98);
document.getElementById('vp98').addEventListener('click', next98);
function prev98() {
    if (i98 > 1) {
        i98 = i98 - 1;
        document.getElementById('im98').src =
            '/images/galleries/charter9.4/im' + i98 + '.jpg';
    } else {
        i98 = 12;
        document.getElementById('im98').src =
            '/images/galleries/charter9.4/im' + i98 + '.jpg';
    }
}
function next98() {
    if (i98 < 12) {
        i98 = i98 + 1;
        document.getElementById('im98').src =
            '/images/galleries/charter9.4/im' + i98 + '.jpg';
    } else {
        i98 = 1;
        document.getElementById('im98').src =
            '/images/galleries/charter9.4/im' + i98 + '.jpg';
    }
}

//Конец Замкнутая галерея
//Оптимальная галерея
addEventListener('scroll', del99);
document.getElementById('pict99').addEventListener('click', del99);
document.getElementById('nz99').addEventListener('click', prev99);
document.getElementById('vp99').addEventListener('click', next99);
let pict99 = document.getElementById('pict99');
let bas99 = document.getElementById('bas99').style;
let view99 = document.getElementById('view99').style;
let n = document.querySelectorAll('.im99').length;

let i99 = 1;
document.getElementById('basis99').addEventListener('click', function (ev) {
    if (ev.target.tagName == 'IMG') {
        let sc = window.pageYOffset;
        bas99.top = sc + 'px';
        view99.top = sc + 'px';
        pict99.src = ev.target.src;
        view99.visibility = 'visible';
        bas99.visibility = 'visible';

        let rig = ev.target.src.split('it');

        let lef = rig[1].split('.j');

        i99 = lef[0];

        document.getElementById('vp99').style.visibility = 'visible';
        if (i99 == 1)
            document.getElementById('nz99').style.visibility = 'hidden';
        if (i99 == n)
            document.getElementById('vp99').style.visibility = 'hidden';
    }
});
function del99() {
    view99.visibility = 'hidden';
    bas99.visibility = 'hidden';
    pict99.src = '/images/galleries/charter9.9/it1.jpg';
    document.getElementById('nz99').style.visibility = 'hidden';
    document.getElementById('vp99').style.visibility = 'hidden';
}
function prev99() {
    document.getElementById('vp99').style.visibility = 'visible';
    let posi = document.getElementById('pict99').src;
    let rig = posi.split('it');

    let lef = rig[1].split('.j');
    i99 = lef[0];

    if (i99 > 1) {
        i99--;
        document.getElementById('vp99').style.visibility = 'visible';
        document.getElementById('pict99').src =
            '/images/galleries/charter9.9/it' + i99 + '.jpg';
        if (i99 == 1)
            document.getElementById('nz99').style.visibility = 'hidden';
    }
}
function next99() {
    document.getElementById('nz99').style.visibility = 'visible';
    let posi99 = document.getElementById('pict99').src;
    let rig = posi99.split('it');
    let lef = rig[1].split('.j');
    i99 = lef[0];
    if (i99 < n) {
        i99++;

        document.getElementById('nz99').style.visibility = 'visible';
        document.getElementById('pict99').src =
            '/images/galleries/charter9.9/it' + i99 + '.jpg';

        if (i99 == n)
            document.getElementById('vp99').style.visibility = 'hidden';
    }
}
//Конец Оптимальная галерея

//Конец Галереи

// Автоматические слайдеры
/*Левый слайдер*/

let i101 = 1;
let k101 = 200;
let s101 = 1;
let t101 = '';
drive();
function drive() {
    let ph = 'p' + s101;
    if (i101 == 1) {
        i101 = 0;
        window.setTimeout(drive, 2000);
    } else {
        if (s101 < 7) {
            if (k101 >= -3000) {
                document.getElementById(ph).style.left = k101 + 'px';
                k101 = k101 - 10;
                t101 = window.setTimeout(drive, 10);
            } else {
                k101 = 200;
                s101 = s101 + 1;
                t101 = window.setTimeout(drive, 10);
            }
        }
        if (s101 == 6) {
            document.getElementById('p1').style.zIndex = 10;
            document.getElementById('p1').style.left = '200px';
        }
        if (s101 == 7) {
            document.getElementById('p1').style.zIndex = 16;
            for (let n = 2; n < 7; n++)
                document.getElementById('p' + n).style.left = '200px';
            s101 = 1;
            window.clearTimeout(t101);

            drive();
        }
    }
}
/*Конец Левый слайдер*/
/*Слайдер с растворением*/

let s102 = 1;

function diss() {
    if (s102 < 6) {
        let a = 'i102' + s102;
        let t = document.getElementById(a).style;
        t.transition = 'opacity 2s';
        t.opacity = 0;
        s102++;
        a = 'i102' + s102;
        t = document.getElementById(a).style;
        t.transition = 'opacity 2s';
        t.opacity = 1;
        window.setTimeout(diss, 3000);
    } else {
        s102 = 1;
        let t = document.getElementById('i1026').style;
        t.transition = 'opacity 2s';
        t.opacity = 0;
        t = document.getElementById('i1021').style;
        t.transition = 'opacity 2s';
        t.opacity = 1;
        window.setTimeout(diss, 3000);
    }
}

diss();
/*Конец Слайдер с растворением*/
/*Добавляем снимки*/
let i111 = 7;
document.getElementById('addit').addEventListener('click', () => {
    if (i111 < 13) {
        let a =
            '<br/><img src="/images/galleries/charter9.4/im' +
            i111 +
            '.jpg" alt="Фото" class="addit__img">';
        i111++;
        let b =
            '<img src="/images/galleries/charter9.4/im' +
            i111 +
            '.jpg" alt="Фото" class="addit__img">';
        i111++;
        let c =
            '<img src="/images/galleries/charter9.4/im' +
            i111 +
            '.jpg" alt="Фото" class="addit__img">';
        i111++;
        document
            .getElementById('basis111')
            .insertAdjacentHTML('beforeend', a + b + c);
        if (i111 > 12) {
            document.getElementById('addit').innerHTML = 'Просмотр завершен';
        }
    }
});

/*Конец Добавляем снимки*/

//Конец Автоматические слайдеры//

/*Направляем ракету*/

document.getElementById('roc').addEventListener('click', coor);
let h = 0;
let v = 0;
let i = 1;
let c = 0;
let d = 0;
let t = 1;

function coor() {
    if (i == 1) {
        h = event.pageX;
        v = event.pageY;
        i = 2;
        c = h;
        d = v;
        document.getElementById('basis121').addEventListener('click', rocket);
    }
}
function rocket() {
    let nh = event.pageX;
    let nv = event.pageY;
    let ih = nh - h;
    let iv = nv - v;

    if ((t = 2)) {
        if (c < nh) {
            document.getElementById('roc').style.transform = 'rotate(45deg)';

            if (d < nv) {
                document.getElementById('roc').style.transform =
                    'rotate(135deg)';
            }
        } else {
            document.getElementById('roc').style.transform = 'rotate(-45deg)';
            if (d < nv) {
                document.getElementById('roc').style.transform =
                    'rotate(-135deg)';
            }
        }
    }
    document.getElementById('roc').style.left = ih + 'px';
    document.getElementById('roc').style.top = iv + 'px';
    c = nh;
    d = nv;
    t = 2;
}
/*Конец Направляем ракету*/

/*Перемещаем солнце*/

document.getElementById('sun').addEventListener('mousedown', coor2);
document.getElementById('sun').addEventListener('mouseup', function () {
    removeEventListener('mousemove', neco);
});
let dv = 0;
let dh = 0;

function coor2() {
    let v = event.pageY;
    let h = event.pageX;
    let sv = document.getElementById('sun').offsetTop;
    let sh = document.getElementById('sun').offsetLeft;
    dv = v - sv;
    dh = h - sh;
    addEventListener('mousemove', neco);
}

function neco() {
    let nv = event.pageY;
    let nh = event.pageX;
    let fv = nv - dv;
    let fh = nh - dh;
    document.getElementById('sun').style.top = fv + 'px';
    document.getElementById('sun').style.left = fh + 'px';
}

/* Конец Перемещаем солнце*/

/* Освещаем пейзаж*/

document.getElementById('td2').addEventListener('dragover', mid);
document.getElementById('td3').addEventListener('dragover', mid);
document.getElementById('td3').addEventListener('drop', fin);

function mid() {
    event.preventDefault();
}
function fin() {
    document.getElementById('td3').appendChild(document.getElementById('sun2'));
    document.getElementById('td3').style.background =
        'url(/images/sun/finish.jpg)';
}

/*Тормозим шарики*/
let time = 10;
let zBall = 0;
balo();

document.getElementById('ran').addEventListener('change', function () {
    time = this.value;
});

function balo() {
    zBall = zBall + 10;
    if (zBall < 780) {
        document.getElementById('ball').style.left = zBall + 'px';
        window.setTimeout(balo, time);
    } else {
        window.setTimeout(revBall, time);
    }
}

function revBall() {
    zBall = zBall - 10;
    if (zBall > 20) {
        document.getElementById('ball').style.left = zBall + 'px';
        window.setTimeout(revBall, time);
    } else {
        window.setTimeout(balo, time);
    }
}
/*Конец Тормозим шарики*/

/*Пасьянс из картинок*/

let aSolit = 1;

document.getElementById('bfor').addEventListener('click', forw);
function forw() {
    let d = document.getElementById('s' + aSolit).style;
    d.transition = 'opacity 2s';
    d.opacity = 1;
    aSolit = aSolit + 1;
    if (aSolit < 7) {
        window.setTimeout(forw, 1000);
    } else {
        aSolit = 6;
    }
}
document.getElementById('bbac').addEventListener('click', back);

function back() {
    document.getElementById('s' + aSolit).style.opacity = 0;

    aSolit = aSolit - 1;
    if (aSolit > 0) {
        window.setTimeout(back, 1000);
    } else {
        aSolit = 1;
    }
}
/*Конец Пасьянс из картинок*/

/* Раскрашиваем рисунки*/

const imagesAll = document.querySelectorAll('#basis132 img');
const images = [...imagesAll];

images.forEach((img) =>
    img.addEventListener('mouseover', function (ev) {
        let e = ev.target;
        if (e.tagName === 'IMG') {
            document.getElementById(e.id).style.filter = 'grayscale(0)';
        }
    }),
);
images.forEach((item) =>
    item.addEventListener('mouseout', function (ev) {
        let e = ev.target;
        if (e.tagName === 'IMG') {
            document.getElementById(e.id).style.filter = 'grayscale(100%)';
        }
    }),
);

/*Конец Раскрашиваем рисунки*/

/* Настраиваем фото*/

document.getElementById('ran1').addEventListener('mousemove', function () {
    document.getElementById('man').style.opacity = this.value;
});
document.getElementById('ran2').addEventListener('mousemove', function () {
    document.getElementById('man').style.filter =
        'grayscale(' + this.value + '%)';
});

/* Настраиваем фото*/
/*Конец Перемещение изображений*/
