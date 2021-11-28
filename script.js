let cover = document.querySelector(".cover");
let halaman1 = document.querySelector(".layout-kiri")
let orientation = {
    widht: 0,
    height: 0
}
document.querySelector("#btn-buka-undangan").addEventListener('click', function() {
    console.log("buka undangan");
    //close cover
    cover.classList.add("display-none");
    halaman1.classList.remove("display-none");
    // buka halaman undangan
});

$(document).ready(function() {
    // iniOrientation()

    // console.log(checkOrientation());
    // console.log("isport", isPortrait());
    // orientationfake()
    // $.confirm({
    //     title: 'Encountered an error!',
    //     content: 'Something went downhill, this may be serious',
    //     type: 'red',
    //     typeAnimated: true,
    //     buttons: {
    //         close: function() {}
    //     }
    // });


    // if (isPortrait()) {
    //     // $("#blur-div").addClass("display");
    //     console.log("port");
    //     $.confirm({
    //         title: 'Encountered an error!',
    //         content: 'Something went downhill, this may be serious',
    //         type: 'red',
    //         typeAnimated: true,
    //         buttons: {
    //             close: function() {}
    //         }
    //     });
    // }

    $(window).on("orientationchange", function() {
        // iniOrientation()
        window.location = window.location
    });
});

function iniOrientation() {
    console.log(window.innerHeight, "h");
    console.log(window.innerWidth, "w");
    console.log("init", isPortrait())
    if (isPortrait()) {
        let w = window.innerWidth + 'px';
        console.log(w);
        let h = window.innerHeight + 'px'
        $('.container').css({
            "width": w,
            "height": h
        })
    }



}

function orientationfake() {
    // console.log("reorient");
    // console.log(window.orientation);
    // var portrait = (window.orientation % 180 == 0);
    // $("body").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
    // function reorient(e) {
    //     console.log("pspsp");
    //     var portrait = (window.orientation % 180 == 0);
    //     $("body").css("-webkit-transform", !portrait ? "rotate(-90deg)" : "");
    // }
    // window.onorientationchange = reorient;
    // window.setTimeout(reorient, 5000);
}

function checkOrientation() {
    console.log(window.innerHeight, "h");
    console.log(window.innerWidth, "w");
    console.log("screH", window.screen.height);
    console.log("screW", window.screen.width);
    console.log(window.screen.height > window.screen.width);
    console.log(window.innerHeight > window.innerWidth);
    return window.screen.height > window.screen.width === window.innerHeight > window.innerWidth
}

function fliporientation(params) {

}

function updateOrientation(params) {

}

function isPortrait() {
    return window.innerHeight > window.innerWidth;
}