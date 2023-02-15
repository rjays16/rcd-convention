<template>
    <Loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
    >
        <div class="circle-container">
            <div class="custom-loader"><span></span></div>
            <img src="/icon-rcd2022.png" alt="">
        </div>
        <h1>You are now entering {{loaderTitle}}</h1>
        <p>Best viewed on desktop PCs, laptops or Mac devices for an immersive experience. Please ensure to have a stable Internet connection<br> while we are recording your entry to this hall.</p>
    </Loading>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    computed: {
        loaderTitle(){
            if (this.$route.path === '/virtual-convention-center/lobby'){
                return "the Virtual Lobby..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/plenary'){
                return "the Plenary Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/workshops'){
                return "the Workshops Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/research-hall'){
                return "the Research Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/symposia'){
                return "the On-Demand Symposium Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/sponsor'){
                return "the Industry-Sponsored Lectures Hall..."
            }else if(this.$route.path === '/virtual-convention-center/exhibit-hall'){
                return "the Exhibits Hall..."
            }else if(this.$route.path === '/virtual-convention-center/exhibit-hall/platinum'){
                return "the Platinum Hall..."
            }else if(this.$route.path === '/virtual-convention-center/exhibit-hall/gold'){
                return "the Gold Hall..."
            }else if(this.$route.path === '/virtual-convention-center/exhibit-hall/silver'){
                return "the Silver Hall..."
            }else if(this.$route.path === '/virtual-convention-center/exhibit-hall/bronze'){
                return "the Bronze Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures'){
                return "the Industry Lectures Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/gold'){
                return "the Gold Lectures Hall..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum'){
                return "the Platinum Lectures Hall..."
            }else if(this.$route.path === '/virtual-convention-center/facade'){
                return "the Virtual Convention Center..."
            }else if(this.$route.path === '/virtual-convention-center'){
                return "the Virtual Convention Center..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/gold/creative-skin'){
                return "this Gold Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/gold/johnson-johnson'){
                return "this Gold Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/gold/zuellig-pharma'){
                return "this Gold Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/bayer'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/menarini'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/solta-medical'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/galderma'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/novartis'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/platinum/leopharma'){
                return "this Platinum Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/sponsor/allergan'){
                return "this Industry-Sponsored Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/sponsor/mix-expert'){
                return "this Industry-Sponsored Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/sponsor/viatris'){
                return "this Industry-Sponsored Session Room..."
            }else if(this.$route.path === '/virtual-convention-center/lobby/industry-lectures/sponsor/gsk'){
                return "this Industry-Sponsored Session Room..."
            }else{
            return "this Vex Booth..."
            }
        },
    },
    data() {
        return {
            isLoading: true,
            fullPage: true,
        }
    },
    components: {
        Loading,
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    },
}
</script>

<style lang="scss" scoped>
.vld-overlay::v-deep {
    .vld-background {
        opacity: 1;
    }
    .vld-icon {
        text-align: center;
        font-family: 'Inter', sans-serif;
        padding: 15px;
        h1 {
            font-size: 1.9rem;
            font-weight: 700;
        }
    }
}
.circle-container {
    border-radius: 50%;
    width: 370px;
    height: 370px;
    overflow: hidden;
    position: relative;
    margin: 0 auto 25px;
    img {
        width: 55%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
    .custom-loader {
        position: relative;
        width: 370px;
        height: 370px;
        border-radius: 50%;
        background-color: rgba(7, 118, 188, 0.3);
        animation: animate linear 2s infinite;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 50%;
            background-color: rgba(6, 94, 153, 1);
            border-top-left-radius: 185px;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 60px;
            height: 60px;
            transform: translateX(-50%);
            background-color: rgba(6, 94, 153, 1);
            border-radius: 50%;
            z-index: 10;
        }
        span {
            position: absolute;
            top: 60px;
            left: 60px;
            right: 60px;
            bottom: 60px;
            border-radius: 50%;
            background-color: #ffffff;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -60px;
                width: 60px;
                height: 60px;
                transform: translateY(-50%);
                background-color: rgba(6, 94, 153, 1);
                border-radius: 50%;
                z-index: 10;
            }
        }
    }
    @keyframes animate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}

@media screen and (max-width: 991px) {

    .vld-overlay {
        .vld-icon {
            h1 {
                font-size: 1.5rem;
            }
        }
    }

    .circle-container {
        width: 300px;
        height: 300px;
        .custom-loader {
            width: 300px;
            height: 300px;
            &::before {
                border-top-left-radius: 150px;
            }
            &::after {
                width: 50px;
                height: 50px;
            }
            span {
                top: 50px;
                left: 50px;
                right: 50px;
                bottom: 50px;
                &::before {
                    width: 50px;
                    height: 50px;
                    left: -50px;
                }
            }
        }
    }

}

</style>
