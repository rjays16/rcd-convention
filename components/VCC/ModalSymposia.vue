<template>
    <el-dialog
        :visible.sync="showDialog"
        class="sym-modal"
        :before-close="closeDialog">
        <div class="resource-item video">
            <!-- <iframe src="https://vimeo.com/event/2243155/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> -->
            <iframe :src="symposiaSource"
                width="640" height="360"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                ref="symposiaIframe"
                id="symposiaIframe"
                class="vis-hidden">
            </iframe>
        </div>
    </el-dialog>
</template>

<script>

export default {
    data() {
        return {
            showDialog: false,
            symposiaSource: "https://player.vimeo.com/video/694282347?h=dee28b2946",
            is_loading: true
        };
    },
    methods: {
        openDialog(video) {
            this.showDialog = true
            let self = this
            let sym_element = $(document).find('#symposiaIframe')

            setTimeout(() => {
                let sym_viewer_timer = setInterval(function () {
                    if(sym_element) {
                        clearInterval(sym_viewer_timer)
                        self.$refs.symposiaIframe.src = video ? video : self.symposiaSource
                        $('#symposiaIframe').addClass('vis-shown')
                        self.is_loading = false
                    } else {
                        clearInterval(sym_viewer_timer)
                    }
                }, 500);
            }, 4000);            
        },
        closeDialog() {
            $('#symposiaIframe').removeClass('vis-shown')
            this.showDialog = false
            this.$refs.symposiaIframe.src = null
            this.is_loading = true
        }
    }
}
</script>

<style lang="scss" scoped>
.sym-modal {
    &::v-deep .el-dialog {
        background-color: #ffffff;
        text-align: center;
        position: absolute;
        border-radius: 0;
        box-shadow: none;
        height: 90%;
        overflow: visible;
        margin: auto !important;
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
</style>