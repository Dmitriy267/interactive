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
addEventListener('load', () => {
    document.getElementById('sel').addEventListener('change', () => {
        let a = document.getElementById('sel').value;
        document.getElementById('photo').src =
            '/images/nature/nat' + a + '.png';
    });
});
// Конец Выбор фото из списка
