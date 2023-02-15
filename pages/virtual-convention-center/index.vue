<template>
	<section>
        <VCCPreLoader />
		<div class="vcc-welcome-card">
            <div class="vcc-heading">
                <img src="/assets/images/logos/logo-rcd-white.png" alt="">
                <h4>Regional Conference Of Dermatology</h4>
            </div>
            <h1 class="gwendolyn-bold">Welcome,</h1>
            <h3>{{ form.full_name }}</h3>
            <h6>{{ form.registration_type }}</h6>
            <div>
                <img src="/assets/images/Badge-Registered.png" alt="" v-if="form.has_paid_registration">
                <img src="/assets/images/Badge-Laser.png" alt="" v-if="form.has_paid_ws_laser">
                <img src="/assets/images/Badge-Aesthetic.png" alt="" v-if="form.has_paid_ws_aesth">
            </div>
            <!-- <NuxtLink to="/virtual-convention-center/facade">Enter Now</NuxtLink> -->
            <el-button class="delay-skip" @click="dialogVisible = true, delayVideo()">Enter Now</el-button>
        </div>
        <el-dialog
            class="popup__close"
            title="Tips"
            :visible.sync="dialogVisible"
            width="75%">
            <!-- <span :src="url"></span> -->
            <video id="framevideo" width="100%" height="100%" autoplay>
                <source src="/assets/videos/Rcd-Vcc-Virtual-Tour-Intro.mp4" type="video/mp4">
                <source src="/assets/videos/Rcd-Vcc-Virtual-Tour-Intro.mp4" type="video/ogg">
                Your browser does not support the video tag.
            </video>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false, $router.push('/virtual-convention-center/facade'), delayDestroy()">Skip Intro</el-button>
            </span>
        </el-dialog>
	</section>
</template>

<script>
import $ from 'jquery'
export default {
    middleware: "auth",
	layout: "vcc-landing",
    data() {
        return {
            form: {
                full_name: null,
                registration_type: null,
                has_paid_registration: false,
                has_paid_ws_laser: false,
                has_paid_ws_aesth: false,
                has_paid_ws_both: false,
            },
            dialogVisible: false,
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch("auth/getUser")
            .then(res => {
                let user_data = res.data
                let member_data = res.data.member

                this.form.full_name = user_data.full_name
                this.form.registration_type = member_data.registration_type.name
                this.form.has_paid_registration = member_data.paid_fees.has_paid_registration
                this.form.has_paid_ws_both = member_data.paid_fees.has_paid_ws_both
                this.form.has_paid_ws_laser = member_data.paid_fees.has_paid_ws_laser
                this.form.has_paid_ws_aesth = member_data.paid_fees.has_paid_ws_aesth

                if(this.form.has_paid_ws_both) {
                    this.form.has_paid_ws_laser = this.form.has_paid_ws_aesth = true
                }
            })
            .catch(err => {
                this.$message.error("Unable to retrieve the member data. Please try again later.")
            })
        },
        delayVideo() {
            this.redirectTimeout = setTimeout( () => this.$router.push({ path: '/virtual-convention-center/facade'}), 22000);
        },
        delayDestroy() {
            if (this.redirectTimeout) {
                clearTimeout(this.redirectTimeout);
            }
        }
    },
    async fetch() {
        this.getUser()
    },
    mounted(){
		$(".delay-skip").click(function() {
            $(".el-button--primary").addClass("active-skip");
        });
	}
};
</script>
<style lang="scss" scoped>
	.vcc-welcome-card {
        background: url("/assets/images/banner.png") left bottom no-repeat rgba($color: #ffffff, $alpha: 0.9);
        background-size: 90%;
        max-width: 600px;
        width: 100%;
        height: 600px;
        position: absolute;
        right: 0;
        top: 100px;
        z-index: 1;
        margin: auto 0;
        padding: 78px 50px 30px;
        text-align: center;
    }
    .vcc-welcome-card::before {
        content: "";
        width: 48px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url("/assets/images/weave.png") repeat-y center center transparent;
    }
    .vcc-welcome-card::after {
        content: "";
        width: 48px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: url("/assets/images/weave.png") repeat-y center center transparent;
    }
    .vcc-heading {
        position: absolute;
        max-width: 350px;
        background-color: #065e99;
        color: #fff;
        padding: 10px;
        border-radius: 20px;
        display: inline-block;
        top: -60px;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 100;
    }
    .vcc-heading h4 {
        text-transform: uppercase;
        margin: 0;
        font-weight: 700;
    }
    .vcc-welcome-card h1 {
        font-size: 7.5rem;
        line-height: 6rem;
    }
    .vcc-welcome-card h3 {
        font-size: 1.9rem;
        text-transform: uppercase;
        font-weight: 700;
    }
    .vcc-welcome-card h6 {
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
    }
    .vcc-welcome-card .el-button {
        display: inline-block;
        background-color: #ff7500;
        color: #fff;
        border-radius: 20px;
        padding: 5px 20px 8px;
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        margin-top: 10px;
        transition: all 0.2s ease;
    }
    .vcc-welcome-card .el-button:hover {
        box-shadow: 0 3px 10px rgba($color: #000000, $alpha: 0.2);
        padding: 8px 23px 11px;
    }
    .badges {
        display: flex;
        justify-content: space-between;
        max-width: 445px;
        margin: 0 auto;
    }
    .badges img {
        max-width: 100%;
    }
    section{
        &::v-deep .el-dialog {
            position: fixed;
            width: 100% !important;
            margin: 0 !important;
            height: 100%;
            top: 0;
            left: 0;
            .el-dialog__header {
                display: none;
            }
            .el-dialog__body {
                padding: 0;
            }
            .el-dialog__footer {
                // width: 20%;
                position: absolute;
                bottom: 1em;
                right: 1em;
                padding: 0;

                .el-button--primary {
                    border: none;
                    background-color: #000000;
                    opacity: 0;
                    font-size: 1.4rem;
                    padding: 15px 30px;
                    &.active-skip {
                        animation: movedelay 1s forwards;
                        animation-delay: 2s;
                        @keyframes movedelay {
                            from {
                                opacity:0;
                            }
                            to {
                                opacity:1;
                            }
                        }
                        
                    }
                    a {
                        color: white;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 991px) {
        .vcc-welcome-card {
            left: 0;
            margin: auto;
        }
    }
    @media (min-aspect-ratio: 16/9) {
        #framevideo {
            width:100%;
            height: auto;
        }
    }
    @media (max-aspect-ratio: 16/9) {
        #framevideo {
            width:auto;
            height: 100%;
        }
    }
    @media screen and (max-width: 767px) {
        .vcc-welcome-card h1 {
            font-size: 5rem;
            line-height: 4rem;
        }
    }
</style>