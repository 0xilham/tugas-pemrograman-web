$(document).ready(function () {
    $("nav ul li a").click(function () {
        $(".anak").slideToggle("fast");

        $('nav ul li.off').each(function (index, el) {
            var anakID = el.id.split('-')[1];
            $('.anak#' + anakID).hide();
        });
    });

    $('nav').delegate('.off', 'click', function (event) {
        var pilihAnak = this.id.split('-')[1];
        console.log(pilihAnak);
        document.location.hash = pilihAnak;

        $('.anak:visible').fadeOut('slow', function () {
            $('.anak#' + pilihAnak).fadeIn('slow');
        });

        var $this = $(this);
        $this.removeClass('off').addClass("on");
        $this.siblings().addClass('off').removeClass('on');

    });
});