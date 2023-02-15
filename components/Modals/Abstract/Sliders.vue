<template>
    <el-dialog
        :visible.sync="showDialog"
        class="slider-modal"
        :before-close="closeDialog">
        <div class="resource-item video" id="abstractSliderIframe" v-html="sliderVideo">
            <!-- <iframe :src="sliderVideo"
                width="640" height="360"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                ref="abstractSliderIframe"
                id="abstractSliderIframe"
                class="vis-hidden">
            </iframe> -->
        </div>
    </el-dialog>
</template>

<script>

export default {
    data() {
        return {
            showDialog: false,
            sliderVideo: null,
            is_loading: true
        };
    },
    methods: {
        openModal(iframe) {
            this.showDialog = true
            let self = this
            let sym_element = $(document).find('#abstractSliderIframe')

            let sym_viewer_timer = setInterval(function () {
                if(sym_element) {
                    clearInterval(sym_viewer_timer)
                    $('#abstractSliderIframe').addClass('vis-shown')
                    self.sliderVideo = iframe
                } else {
                    clearInterval(sym_viewer_timer)
                }
            }, 500);
        },
        closeDialog() {
            $('#abstractSliderIframe').removeClass('vis-shown')
            this.showDialog = false
            this.sliderVideo = null
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-modal {
    &::v-deep .el-dialog {
        background-color: #ffffff;
        text-align: center;
        position: absolute;
        border-radius: 0;
        box-shadow: none;
        height: fit-content;
        overflow: visible;
        margin: auto !important;
        width: 60%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .el-dialog__header {
            padding: 0;
            .el-dialog__headerbtn {
                border: none;
                position: absolute;
                top: 0;
                right: -50px;
                width: 50px;
                height: 50px;
                z-index: 1;
                background: url("/assets/images/close.png") no-repeat center center #ffffff;
            }
        }
        .el-dialog__body {
            height: 100%;
            text-align: center;
            max-width: 100%;
            width: auto;
            padding: 0;
            position: relative;
            .resource-item {
                height: 92%;
                img {
                    height: 100%;
                    width: 100%;
                    display: block;
                }
            }
            .resource-item.video {
                height: 100%;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
@media screen and (max-width: 991px) {
    .slider-modal {
        &::v-deep .el-dialog {
            width: 95%;
            .el-dialog__header {
                .el-dialog__headerbtn {
                    right: 0;
                }
            }
        }
    }
    
}
</style>