<template>
    <footer class="vcc-footer">
            <div class="vcc-footer-intro">
                <img src="/assets/images/banner.png" alt="">
                <div class="vcc-footer-half"></div>
            </div>
            <div class="vcc-footer-bottom"></div>
    </footer>
</template>
<style lang="scss" scoped>
    .vcc-footer-intro {
        width: 100%;
        position: relative;
    }
    .vcc-footer-intro .vcc-footer-half {
        position: absolute;
        background-color: #DDE8ED;
        width: 100%;
        height: 60%;
        left: 0;
        bottom: 0;
        z-index: 0;
    }
    .vcc-footer-intro img {
        display: block;
        width: 100%;
        position: relative;
        z-index: 1;
    }
</style>