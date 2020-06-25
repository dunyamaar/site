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
