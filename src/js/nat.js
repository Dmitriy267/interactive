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
let y = 1;
let w = 0;
let h = 0;
addEventListener('click', (ev) => {
    let e = ev.target;
    if (e.tagName == 'IMG') {
        let t = document.getElementById(e.id).style;
        if (y == 1) {
            let d = document.getElementById(e.id);
            w = d.offsetLeft;
            console.log(w);
            h = d.offsetTop;
            console.log(h);
            y = 2;
            for (let i = 1; i < 7; i++) {
                let b = 'i' + i;
                if (e.id != b) {
                    let p = document.getElementById(b).style;
                    p.transition = 'opacity 1s';
                    p.opacity = 0;
                }
            }
            t.zIndex = 2;
            t.transition = 'width 1s, left 1s, top 1s, transform 1s';
            t.transform = 'rotate(360deg)';
            t.width = 600 + 'px';
            t.left = 200 + 'px';
            t.top = 100 + 'px';
        } else {
            y = 1;
            for (let i = 1; i < 7; i++) {
                let b = 'i' + i;

                let p = document.getElementById(b).style;
                p.transition = 'opacity 2s';
                p.opacity = 1;
            }
            t.transition = 'width 1s, left 1s, top 1s, transform 1s';
            t.transform = 'rotate(0deg)';
            t.width = 300 + 'px';
            t.left = w + 'px';
            t.top = h + 'px';
            t.zIndex = 1;
        }
    }
});
//Конец увеличения и растворения
