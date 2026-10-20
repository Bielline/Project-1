// Mengambil elemen tombol berdasarkan ID 'sapaButton' dari file HTML
const tombolSapa = document.getElementById('sapaButton');

// Menambahkan perintah/aksi ketika tombol tersebut diklik oleh pengunjung
tombolSapa.addEventListener('click', function() {
  // Menampilkan pesan pop-up sapaan
  alert('Halo! Terima kasih sudah berkunjung!');
});
