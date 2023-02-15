<template>
    <footer class="vcc-footer">
            <div class="vcc-footer-intro">
                <div>
                    <h1 class="fw-bolder lh-1 text-center font-3xl-19 text-uppercase">25th Regional<br>Conference of<br>Dermatology</h1>
                    <h5 class="text-center font-7 font-3xl-10 font-semibold">Reconnaissance, Controversies, Dialogues in Dermatology</h5>
                </div>
                <div>
                    <h1 class="lh-1 text-center font-3xl-19 text-uppercase">Welcome,</h1>
                    <h1 class="fw-bolder lh-1 text-center font-3xl-19 text-uppercase">Delegates!</h1>
                </div>
            </div>
            <div class="vcc-footer-bottom"></div>
    </footer>
</template>
<style lang="scss" scoped>
    .vcc-footer-intro {
        background: url("/assets/images/banner.png") center bottom no-repeat #dde8ed;
        width: 100%;
        background-size: 100%;
        display: flex;
        color: #005b97;
        padding-bottom: 15%;
        padding-top: 2.5%;
    }
    .vcc-footer-intro > div:first-child {
        flex: 1.2;
    }
    .vcc-footer-intro > div:last-child {
        flex: 0.8;
    }
    .vcc-footer-bottom {
        background-color: #ff7500;
        height: 30px;
        width: 100%;
    }
    @media screen and (max-width: 1535px) {
        .vcc-footer-intro {
            padding-bottom: 20%;
        }
    }
    @media screen and (max-width: 767px) { //Update
        .vcc-footer-intro {
            padding-left: 0.3em;
            padding-right: 0.3em;
        }
        .vcc-footer-intro > div:first-child h1{
            font-size: 1.5em;
        }
    }
    // @media screen and (max-width: 600px) {
    //     footer.vcc-footer {
    //         padding: 50% 0;
    //         position: relative;
    //     }
    //     .vcc-footer-intro {
    //         position: absolute;
    //         bottom: 30px;
    //     }
    //     .vcc-footer-bottom {
    //         position: absolute;
    //         bottom: 0;
    //     }
    // }
    @media screen and (max-width: 285px) {//update 07-05
        .vcc-footer-intro {
            padding-left: 0.3em;
            padding-right: 0.3em;
        }
        .vcc-footer-intro > div:first-child h1{
            font-size: 1em;
        }
        .vcc-footer-intro > div:last-child h1{
            font-size: 1em;
        }
    } //end Update
</style>