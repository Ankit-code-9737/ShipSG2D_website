$(document).ready(function() {
    var sideslider = $('[data-toggle=collapse-side]');
    var sel = sideslider.attr('data-target');
    var sel2 = sideslider.attr('data-target-2');
    sideslider.click(function(event) {
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
    });
});

const clickx = document.getElementById('pencet');

clickx.addEventListener('click', function() {
    clickx.classList.toggle('Diam');
});


$(window).on('scroll', function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 600) {
        $(".animated_crane").removeClass("animated_crane_out");

    } else {
        $(".animated_crane").addClass("animated_crane_out");
    }


});

$(window).on('scroll', function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
        $(".animated_crane_cont").removeClass("animated_crane_cont_out");

    } else {
        $(".animated_crane_cont").addClass("animated_crane_cont_out");
    }


});

// $('#code_confirming').click(function() {
//     // $('#confirming_code').addClass("d-block");
//     alert("31232131");
// });


$(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
        $('.theme_header').addClass('fixed-header');
        // $('nav div').addClass('visible-title');
    } else {
        $('.theme_header').removeClass('fixed-header');
        // $('nav div').removeClass('visible-title');
    }
});

  $(".close-cookie-warning").click(function(){
    $(".cookies").toggleClass("hide");
    // alert("The paragraph was clicked.");
  });