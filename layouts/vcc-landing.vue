<template>
    <div class="video-container">
		<video class="video" autoplay muted loop>
            <source src="/assets/videos/RCD_EXTERIOR_VID2.m4v" type="video/mp4">
        </video>
        <img class="img-video-background" src="/assets/images/vcc/EXTERIOR_FACADE.jpg" alt="">
        <Nuxt />
		<!-- <VCCMemberAccess /> -->
    </div>
</template>

<style lang="scss" scoped>
    .video {
        position: fixed;
        z-index: -1;
        width: 100%;
        height: auto;
        bottom: 0;
    }
    .img-video-background {
        position: fixed;
        z-index: -1;
        width: auto;
        height: 100%;
        bottom: 0;
        left: 0;
        display: none;
    }
    @media (min-aspect-ratio: 16/9) {
        .video {
            width:100%;
            height: auto;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        .video {
            width:auto;
            height: 100%;
        }
    }
    @media screen and (max-width: 767px) {
        // .video {
        //     display: none;
        // }
        // .img-video-background {
        //     display: block;
        // }
    }

</style>