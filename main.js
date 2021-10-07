const sayac = document.getElementById('sayac');
const hedefTarih = new Date('01/01/2022'); // MM/DD/YYYY
const yenilemeHizi = 1; // saniye

var zamanlayici = setInterval(() => {

    var simdikiZaman = new Date().getTime();
    var uzaklik = hedefTarih - simdikiZaman;

    var gun = Math.floor(uzaklik / (1000 * 60 * 60 * 24));
    var saat = Math.floor((uzaklik % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var dakika = Math.floor((uzaklik % (1000 * 60 * 60)) / (1000 * 60));
    var saniye = Math.floor((uzaklik % (1000 * 60)) / 1000);

    sayac.innerText = gun + " gün " + saat + " saat\n " + dakika + " dakika " + saniye + " saniye";

}, yenilemeHizi * 1000);