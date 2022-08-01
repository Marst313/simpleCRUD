'use strict';

//selector section
const aktifitas = document.querySelectorAll('#aktifitas');
const kegiatan = document.querySelector('#keg');

// selector button
const dailyButton = document.querySelector('.dailyButton');
const monthlyButton = document.querySelector('.monthlyButton');

// selector pilihan bulan
const bulanJanuari = document.querySelector('.jan');
const bulanFebruari = document.querySelector('.feb');
const bulanMaret = document.querySelector('.mar');
const bulanApril = document.querySelector('.apr');
const bulanMei = document.querySelector('.may');
const bulanJuni = document.querySelector('.june');
const bulanJuly = document.querySelector('.july');
const bulanAgustus = document.querySelector('.aug');
const bulanSeptember = document.querySelector('.sept');
const bulanOktober = document.querySelector('.oct');
const bulanNovember = document.querySelector('.nov');
const bulanDesember = document.querySelector('.dec');

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

function displayMovement() {
  tombolKurang.addEventListener('click', function () {
    kegiatan.remove(kegiatan);
  });

  tombolTambah.addEventListener('click', function () {
    const html = `    <div class="tambah-kegiatan container-fluid" id="keg">
    <button class="edit">Edit</button>
    <input type="text" placeholder="Write Your Activities" style="text-align: center" />
    <button class="minus">
      <div class="garisHorizontal"></div>
    </button>
  </div>`;
    kegiatan.insertAdjacentHTML('afterend', html);
  });
  tombolEdit.addEventListener('click', function () {});
}

displayMovement();
