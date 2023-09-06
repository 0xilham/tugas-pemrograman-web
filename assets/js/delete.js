$(document).ready(function () {
    $('.sel').click(function () {
        const isi = $(this).text();
        const tid = $(this).prop('id');
        const rid = tid.split('__');
        const id_baris = rid[1];
        const nama_lengkap = $('#nama_lengkap__' + id_baris).text();

        if (isi == 'Hapus') {
            const konfirmasi = confirm(`Anda yakin ingin menghapus data atas nama ${nama_lengkap} ??`);
            if (!konfirmasi) return;

            $('#baris__' + id_baris).fadeOut();
        } else {
            alert("Ada apa dengan " + $(this).html() + "?");
        }
    })
})