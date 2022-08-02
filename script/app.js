'use strict';

//selector section
const aktifitas = document.querySelectorAll('#aktifitas');
const kegiatan = document.querySelector('#keg');

// selector button
const dailyButton = document.querySelector('.dailyButton');
const monthlyButton = document.querySelector('.monthlyButton');

// selector pilihan bulan
const bulan1 = document.querySelector('.b1');
const bulan2 = document.querySelector('.b2');
const bulan3 = document.querySelector('.b3');
const bulan4 = document.querySelector('.b4');
const bulan5 = document.querySelector('.b5');
const bulan6 = document.querySelector('.b6');
const bulan7 = document.querySelector('.b7');
const bulan8 = document.querySelector('.b8');
const bulan9 = document.querySelector('.b9');
const bulan10 = document.querySelector('.b10');
const bulan11 = document.querySelector('.b11');
const bulan12 = document.querySelector('.b12');

const seluruhBulan = [bulan1, bulan2, bulan3, bulan4, bulan5, bulan6, bulan7, bulan8, bulan9, bulan10, bulan11, bulan12];

// selector hari
const mingguPertama = document.querySelector('.pertama');
const mingguKedua = document.querySelector('.kedua');
const mingguKetiga = document.querySelector('.ketiga');
const mingguKeempat = document.querySelector('.keempat');
const mingguKelima = document.querySelector('.kelima');

// selector kegiatan
const tombolTambah = document.querySelector('.tambah');
const tombolKurang = document.querySelector('.minus');
const tombolEdit = document.querySelector('.edit');

// style
const rainbowColor = 'linear-gradient(180deg, rgba(37, 52, 160, 1) 15%, rgba(37, 118, 160, 1) 40%, rgba(37, 153, 160, 1) 65%, rgba(20, 255, 243, 1) 90%)';
const warnaPutih = 'rgb(250,250,250)';
const warnaHitam = 'rgb(0,0,0)';

function displayMovement() {
  // Daily dan monthly diclick
  dailyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '1';
    monthlyButton.style.background = warnaPutih;
    monthlyButton.style.color = warnaHitam;
    dailyButton.style.color = warnaPutih;

    dailyButton.style.background = rainbowColor;
  });
  monthlyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '0';
    monthlyButton.style.background = rainbowColor;
    dailyButton.style.background = warnaPutih;
    monthlyButton.style.color = warnaPutih;
    dailyButton.style.color = warnaHitam;
  });
  //

  // bulan 1 hingga 12 diclick
  for (const bulan of seluruhBulan) {
    function bulanTransparant() {
      bulan.style.background = 'transparent';
      bulan.style.color = warnaHitam;
      bulan.style.border = 'none';
    }
    bulan1.addEventListener('click', function () {
      bulanTransparant();
      bulan1.style.background = rainbowColor;
      bulan1.style.borderRadius = '10px';
      bulan1.style.color = warnaPutih;
    });
    bulan2.addEventListener('click', function () {
      bulanTransparant();
      bulan2.style.background = rainbowColor;
      bulan2.style.borderRadius = '10px';
      bulan2.style.color = warnaPutih;
    });
    bulan3.addEventListener('click', function () {
      bulanTransparant();
      bulan3.style.background = rainbowColor;
      bulan3.style.borderRadius = '10px';
      bulan3.style.color = warnaPutih;
    });
    bulan4.addEventListener('click', function () {
      bulanTransparant();
      bulan4.style.background = rainbowColor;
      bulan4.style.borderRadius = '10px';
      bulan4.style.color = warnaPutih;
    });
    bulan5.addEventListener('click', function () {
      bulanTransparant();
      bulan5.style.background = rainbowColor;
      bulan5.style.borderRadius = '10px';
      bulan5.style.color = warnaPutih;
    });
    bulan6.addEventListener('click', function () {
      bulanTransparant();
      bulan6.style.background = rainbowColor;
      bulan6.style.borderRadius = '10px';
      bulan6.style.color = warnaPutih;
    });
    bulan7.addEventListener('click', function () {
      bulanTransparant();
      bulan7.style.background = rainbowColor;
      bulan7.style.borderRadius = '10px';
      bulan7.style.color = warnaPutih;
    });
    bulan8.addEventListener('click', function () {
      bulanTransparant();
      bulan8.style.background = rainbowColor;
      bulan8.style.borderRadius = '10px';
      bulan8.style.color = warnaPutih;
    });
    bulan9.addEventListener('click', function () {
      bulanTransparant();
      bulan9.style.background = rainbowColor;
      bulan9.style.borderRadius = '10px';
      bulan9.style.color = warnaPutih;
    });
    bulan10.addEventListener('click', function () {
      bulanTransparant();
      bulan10.style.background = rainbowColor;
      bulan10.style.borderRadius = '10px';
      bulan10.style.color = warnaPutih;
    });
    bulan11.addEventListener('click', function () {
      bulanTransparant();
      bulan11.style.background = rainbowColor;
      bulan11.style.borderRadius = '10px';
      bulan11.style.color = warnaPutih;
    });
    bulan12.addEventListener('click', function () {
      bulanTransparant();
      bulan12.style.background = rainbowColor;
      bulan12.style.borderRadius = '10px';
      bulan12.style.color = warnaPutih;
    });
  }

  // kegiatan
}

displayMovement();
