// event pada saat link di klik
$('.pg-scr').on('click', function(e){


	//ambil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop:elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutQuint');
	e.preventDefault();

})