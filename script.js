// Menambahkan event listener ke daftar tugas kita
document.addEventListener('DOMContentLoaded', function() {
    var daftarTugas = document.getElementById('daftar-tugas');
    if (daftarTugas) {
        daftarTugas.addEventListener('click', function (e) {
            if (e.target.className === 'tombol-hapus') {
                e.target.parentElement.remove();
            } else if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
                var itemLi = e.target.closest('li');
                itemLi.classList.toggle('selesai');
            }
            // simpanTugas(); // Fungsi simpan bisa ditambahkan di sini jika diperlukan
        });
    }
    // muatTugas(); // Fungsi muat bisa ditambahkan di sini jika diperlukan
});

function tambahTugas() {
    var inputTugas = document.getElementById("input-tugas");
    var teksTugas = inputTugas.value;

    if (teksTugas !== "") {
        var daftar = document.getElementById("daftar-tugas");
        var itemBaru = document.createElement("li");
        
        var teksSpan = document.createElement("span");
        teksSpan.innerText = teksTugas;
        itemBaru.appendChild(teksSpan);

        var tombolHapus = document.createElement("button");
        tombolHapus.innerText = "Hapus";
        tombolHapus.className = "tombol-hapus";
        itemBaru.appendChild(tombolHapus);
        
        daftar.appendChild(itemBaru);
        inputTugas.value = "";
    }
}
