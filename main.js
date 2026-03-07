// === KONFIGURASI FORM NOTIFIKASI ===
const formNotifikasi = document.getElementById('formNotifikasi');

if (formNotifikasi) {
    // Menambahkan event listener submit untuk form notifikasi
    formNotifikasi.addEventListener('submit', function(event) {
        // Mencegah halaman reload (event default)
        event.preventDefault();
        
        // Mengambil nama user
        const nama = document.getElementById('namaNotif').value;
        
        // Menampilkan pop-up alert yang diminta
        alert(`Terima Kasih sudah mendaftar, mohon tunggu beberapa menit untuk mendapat notifikasi jadwal vaksin anda🤗`);
        
        // Mengosongkan form kembali
        formNotifikasi.reset();
    });
}


// === PERBAIKAN BUG FORM LAPORAN (FEEDBACK) ===
const formLaporan = document.getElementById('formLaporan');

if (formLaporan) {
    // Menambahkan event listener submit untuk form laporan
    formLaporan.addEventListener('submit', function(event) {
        // Mencegah halaman reload (event default)
        event.preventDefault();
        
        // Mengambil nama user
        const nama = document.getElementById('namaLengkap').value;
        
        // Menampilkan notifikasi / alert sederhana
        alert(`Terima kasih, ${nama}! Laporan feedback kamu terkait sistem imunisasi telah berhasil dikirim.`);
        
        // Mengosongkan form kembali setelah berhasil di-submit
        formLaporan.reset();
    });
}