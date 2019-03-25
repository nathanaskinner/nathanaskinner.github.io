$( document ).ready(function() {

    setTimeout(function(){
        $('.simply-modal__toggle').modaal({
                background: '#ffffff',
                overlay_opacity: .6,
                start_open: true,
                hide_close: true,
                after_open: videoPlay,
        });
        function videoPlay() {
          $('.simply-modal__video')[0].play();
        }
    }, 5000);

    document.getElementById('simplyVideo').addEventListener("timeupdate", function() {
        if(this.currentTime > 7) {
            $(".simply-modal__button").addClass('js-is-visible');
        }
    });
});
