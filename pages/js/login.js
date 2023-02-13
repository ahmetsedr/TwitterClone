const gir = document.querySelector('#girisBTN');
const kayit = document.querySelector('#KayitBTN');
const x = document.querySelector('body');

gir.addEventListener('click', girisyap = () => {
    alert("giriş yapılıyor");
    window.open("./giris.html");
});

kayit.addEventListener('click', kayityap = () => {
    alert("kayit yapılıyor");
    window.open("./kayit.html");
});