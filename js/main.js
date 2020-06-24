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
});