$(document).ready(function () {
    $(".img-grayscale").on("click", function () {
        var id = $(this).attr("id");
        switch (id) {
            case 'stoop-station':
                location.href = "/Assets/Projects/work_1.html";
                break;
            case 'son-speaker':
                location.href = '/Assets/Projects/work_2.html';
                break;
            case 'jazzgoo-cezve':
                location.href = '/Assets/Projects/work_3.html';
                break;
            case 'pock-projector':
                location.href = '/Assets/Projects/work_4.html';
                break;
            case 'vr-fotka':
                location.href = '/Assets/Projects/work_5.html';
                break;
            case 'prirodno-1':
                location.href = '/Assets/Projects/work_6.html';
                break;
            case 'lifesaver':
                location.href = '/Assets/Projects/work_7.html';
                break;
            case 'bashta-garden':
                location.href = '/Assets/Projects/work_8.html';
                break;
        }
    });

    $(document).ready(function() {

        $('.next').click(function() {
          var currentImage = $('.img.curry');
          var currentImageIndex = $('.img.curry').index();
          var nextImageIndex = currentImageIndex + 1;
          var nextImage = $('.img').eq(nextImageIndex);
          currentImage.fadeOut(1000);
          currentImage.removeClass('curry');
          if (nextImageIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
          } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('curry');
          }
        });
      
        $('.prev').click(function() {
          var currentImage = $('.img.curry');
          var currentImageIndex = $('.img.curry').index();
          var prevImageIndex = currentImageIndex - 1;
          var prevImage = $('.img').eq(prevImageIndex);
      
          currentImage.fadeOut(1000);
          currentImage.removeClass('curry');
          prevImage.fadeIn(1000);
          prevImage.addClass('curry');
        });
      
      });

    $(".img-grayscale").hover(
        function() {
            var id = $(this).attr("id");

        switch (id) {
            case 'stoop-station':
                $("#stoop-station-text").show();
                break;
            case 'son-speaker':
                $("#son-speaker-text").show();
                break;
            case 'jazzgoo-cezve':
                $("#jazzgoo-cezve-text").show();
                break;
            case 'pock-projector':
                $("#pock-projector-text").show();
                break;
            case 'vr-fotka':
                $("#vr-fotka-text").show();
                break;
            case 'prirodno-1':
                $("#prirodno-1-text").show();
                break;
            case 'lifesaver':
                $("#lifesaver-text").show();
                break;
            case 'bashta-garden':
                $("#bashta-garden-text").show();
                break;
        }
          }, function() {
            var id = $(this).attr("id");

        switch (id) {
            case 'stoop-station':
                $("#stoop-station-text").hide();
                break;
            case 'son-speaker':
                $("#son-speaker-text").hide();
                break;
            case 'jazzgoo-cezve':
                $("#jazzgoo-cezve-text").hide();
                break;
            case 'pock-projector':
                $("#pock-projector-text").hide();
                break;
            case 'vr-fotka':
                $("#vr-fotka-text").hide();
                break;
            case 'prirodno-1':
                $("#prirodno-1-text").hide();
                break;
            case 'lifesaver':
                $("#lifesaver-text").hide();
                break;
            case 'bashta-garden':
                $("#bashta-garden-text").hide();
                break;
        }
          }
    )

    if (location.pathname === '/index.html') {
        $("#about").css('color', 'white');
    } else if (location.pathname === '/work.html') {
        $("#work").css('color', 'white');
    } else if (location.pathname === '/contact.html') {
        $("#contact").css('color', 'white');
    } else {
        $("#work").css('color', 'white');
    }
    $(".nav-item").on('click', function () {
        $(".nav-item .nav-link").css('color', 'rgba(255,255,255,.5)');
        $(this).find('a').css('color', 'white');
    });

    var carousel = $('#carousel'),
        threshold = 150,
        slideWidth = 500,
        dragStart,
        dragEnd;

    $("#next").click(()=>{
        shiftSlide(-1);
    });

    $("#prev").click(()=>{
        shiftSlide(1);
    });

    carousel.on('mousedown', function () {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function () {
            dragEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)')
        })
        $(document).on('mouseup', function () {
            if (dragPos() > threshold) { return shiftSlide(1) }
            if (dragPos() < -threshold) { return shiftSlide(-1) }
            shiftSlide(0);
        })
    });

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup')
        carousel.off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
        setTimeout(function () {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition')
            carousel.css('transform', 'translateX(0px)');
        }, 700)
    }

});

$("#img-click").on("click", ()=>{
    if (!$("#img-click").hasClass("animate-img")){
        $("#img-click").addClass("animate-img");
        $("#img-click").removeClass("animate-img-reverse");
        $("#b-me").show();
        $("#b-me").addClass("animate-div");
    }else{
        $("#img-click").removeClass("animate-img");
        $("#b-me").removeClass("animate-div");
        $("#b-me").hide();
        $("#img-click").addClass("animate-img-reverse");
    }
})