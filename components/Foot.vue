<template>
    <div>
        <footer class="p-3">
            <div class="text-center">
                <div class="container">
                    <div class="row">
                        <p class="mb-0">2022 All Rights Reserved © Regional Conference in Dermatology <span class="pipe">|</span> October 26-28, 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footer_color: "#FF7500",
            copyright_text: "2022 All Rights Reserved © Regional Conference in Dermatology <span>|</span> October 26-28, 2022"
        }
    }
}
</script>

<style lang="scss" scoped>
    footer {
        background-image: url('~/static/assets/footer_backg.png')!important;
        color: white;
        // box-sizing: border-box;
        // height: 70px;
        width: 100%;
        position: relative;
        background-size: cover;
        background-position: top right;
        // &:before {
        //     content: "";
        //     background: #FF7500;
        //     height: 40px;
        //     transform: skewY(356deg);
        //     position: absolute;
        //     left: 0;
        //     right: 0;
        //     z-index: -1;
        // }
    }

    footer p, footer a {
        font-size:0.8rem;
        padding-top: 20px;
    }
    .foot-links a {
        color:#fff;
        margin:0 10px;
    }

@media only screen and (max-width: 767px) {
    footer{
        .text-center{
                text-align: center!important;
                display: flex;
                justify-content: center;
                width: 69%;
                margin: 0 auto;
                line-height: 2;
                padding-top: 5px;
            .pipe{
                display: none;
            }
        }
    }
}
</style>