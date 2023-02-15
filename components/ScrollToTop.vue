<template>
    <button
        class="btn btn-color"
            id='toTop'
        >
        <i class="fa fa-arrow-up"
            aria-hidden="true">
        </i>
        <span>Back to Top</span>
        <!-- <img src="/assets/images/backToTop.png" alt="" /> -->
    </button>
</template>

<script>
import $ from 'jquery'
export default {
    mounted(){
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $("#toTop").click(function() {
            $("html, body").animate({scrollTop: 0}, 0);
        });
    }
};
</script>
<style lang="scss" scoped>
#toTop {
    position: fixed;
    bottom: 5vh;
    right: 3vw;
    z-index: 1000;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    background-color: #005b97;
    svg{
        color: #fff !important;
        font-size: 1.8em;
    }
    span{
        position: absolute;
        width: 6em;
        top: 3.5em;
        right: -1.5em;
        letter-spacing: -1px;
    }
    // img{
    //     position: fixed;
    //     bottom: 10px;
    //     right: 3vw;
    //     z-index: 1000;
    //     height: 60px;
    //     width: 60px;
    // }
}
@media screen and (max-width: 915px) {
    #toTop {
        bottom: 3em;
    }
}
@media screen and (max-width: 768px) {
    #toTop {
        bottom: 3em;
    }
}
@media screen and (max-width: 415px) {
    #toTop {
        bottom: 3em;
        right: 1.5em;
    }
}
</style>