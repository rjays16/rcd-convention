<template>
    <section id="abstract-sliders" class="bg-DDE8ED pt-5">
        <div class="container text-center">
            <!-- <div id="track_1" class="carousel slide" data-ride="carousel" data-interval="false">
                <div class="carousel-inner">
                    <div class="carousel-item" v-for="(vod, index) in track_1" :key="index" :class="{ 'active': index === 0 }" >
                        <div class="slide-cont">
                            <img :src="vod.thumbnail" class="w-50 clickable" @click="openModal(vod.iframe)" />
                        </div>
                    </div>
                </div>
                <div class="arrows">
                    <a class="carousel-control-prev" href="#track_1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#track_1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div> -->

            <el-carousel :interval="5000" type="card" height="360px">
                <el-carousel-item v-for="(vod, index) in track_1" :key="index">
                    <img :src="vod.thumbnail" class="w-100 clickable" @click="openModal(vod.iframe)" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <ModalsAbstractSliders ref="abstractSlidersModal" />
    </section>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    data() {
		return {
            track_1: [
                {
                    id: 1,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/749248720?h=698350025b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD Plenary Speakers"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/tb_plenary.png",
                    type: "speaker"
                },
                { 
                    id: 2,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/749248843?h=48853d70b7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD Workshop Speakers"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/tb_workshops.png",
                    type: "workshop"
                },
                { 
                    id: 3,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/751520405?h=ea72eb297e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD On-Demand Session Part 1"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/ondemand-session-1.png",
                    type: "session-1"
                },
                { 
                    id: 4,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/751519751?h=7a4a213285&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD On-Demand Session Part 2"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/ondemand-session-2.png",
                    type: "session-2"
                },
                { 
                    id: 5,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/751520085?h=95ca92cad2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD On-Demand Session Part 3"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/ondemand-session-3.png",
                    type: "session-3"
                },
                { 
                    id: 6,
                    iframe: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/752419421?h=cf2ce95cb7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="RCD Industry Sponsored Lectures"></iframe></div>`,
                    thumbnail: "/assets/images/vcc/tb_industry-sponsored-speaker.png",
                    type: "industry"
                }
                
            ],
        };
	},
    computed: {
        ...mapGetters({
            isLoggedIn: 'auth/isLoggedIn',
        }),
    },
    methods: {
        openModal(iframe) {
            console.log(iframe)
            // this.show(iframe)
            this.$refs.abstractSlidersModal.openModal(iframe);
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-carousel__item {
    opacity: 0.5;
    display: flex;
    &.is-active {
        opacity: 1;
    }
    .el-carousel__mask {
        background: transparent;
    }
    img {
        height: auto;
        width: auto;
        margin: auto;
    }
}
 

.carousel {
    position: relative;
    .carousel-control-prev {
        position: absolute;
        left: -10%;

        top: 35%;
        height: 50px;
        width: 50px;
        outline: black;
        background-color: gray;
        background-size: 100%, 100%;
        border-radius: 50%;
        border: 1px solid black;
    }
    .carousel-control-next {
        position: absolute;
        right: -10%;

        top: 35%;
        height: 50px;
        width: 50px;
        outline: black;
        background-color: gray;
        background-size: 100%, 100%;
        border-radius: 50%;
        border: 1px solid black;
    }
}
@media screen and (max-width: 768px) {
    ::v-deep .el-carousel__container {
        height: 260px !important;
    }

}
@media screen and (max-width: 500px) {
    ::v-deep .el-carousel__item--card {
        width: 100%;
        transform: none !important;
        transition: all 0.5s ease;
    }
}
</style>