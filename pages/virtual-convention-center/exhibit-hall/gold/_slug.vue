<template>
	<section>
        <VCCPreLoader />
		<div class="vcc-banner-container" v-loading="loading">
            <!-- STAMP -->
            <div class="stamp-timer-container" v-loading="is_stamp_loading">
                <button v-if="sponsor.user_is_eligible_to_stamp && !sponsor.user_has_stamped_for_current_round"
                    :class="sponsor.user_is_eligible_to_stamp && !sponsor.user_has_stamped_for_current_round && !stampMinuteIsZero
                        ? 'timer-ongoing' : allowToStamp
                            ? 'get-stamp' : 'timer-ready'"
                    @click="disableStamp ? '' : toggleStampNotice()" :disabled="disableStamp">
                    <span class="countdown timer" v-if="!allowToStamp">{{ stampCounter }}</span>
                    <span>
                        {{
                            disableStamp ? 'To Earn Stamp' : stampMinuteIsZero && !allowToStamp
                                ? 'Ready!' : allowToStamp
                                    ? 'Get Stamp' : ''
                        }}
                    </span>
                </button>
                <button v-else-if="sponsor.user_has_stamped_for_current_round" class="received-stamp">
                    <span class="getstamp">Stamp Received</span>
                </button>
                <button v-else class="received-stamp d-none">
                    <span class="getstamp">Stamp Error</span>
                </button>
            </div>

            <div class="stamp-notice" :class="showStampNotice ? 'd-block' : 'd-none'">
                <div class="stamp-flex">
                    <div class="stamp-modal">
                        <h1>GET STAMP</h1>
                        <div class="stamp-msg">
                            <p><strong>Congratulations! You are now eligible to collect the stamp from this exhibitor!</strong></p>
                            <p>By clicking "Agree" you hereby give your consent to share your information with this exhibitor. More so, your complete name and email address will be automatically submitted to this exhibitor in exchange of a virtual stamp for your RCD virtual passport.</p>
                            <button class="stamp-agree" @click="stamp" :disabled="is_stamp_processing">Agree</button>
                            <button class="stamp-cancel" @click="toggleStampNotice()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- STAMP -->

            <!-- ANNOUNCEMENT -->
            <div class="announcement">
                <h1>{{ sponsor.announcement ? sponsor.announcement : "Welcome to " + sponsor.name +" booth!" }}</h1>
                <!--Exit Booth-->
                <div class="cover">
                    <el-button class="exit" type="text" @click="onExit()">
                        <img src="/assets/images/vcc/EXIT_ARROW_2.png" alt="">
                    </el-button>
                    <h2 class="avenir-regular text-uppercase text-exit text-end">Exit Booth</h2>
                </div>
            </div>
            <!-- ANNOUNCEMENT -->

            <VCCModalExitBooth />

			<div class="vcc-banner-img">
                <img :src="sponsor.booth_design && sponsor.booth_design.photo ? sponsor.booth_design.photo : '/assets/images/vcc/CREATIVE_SKIN.jpg'" alt="">
                <a class="product-catalog clickable" @click="toggleCatalog(product_catalog)"></a>
                <a class="product-profile clickable" @click="toggleCompanyProfile(interactive_profile)"></a>
                <a class="product-video clickable" v-for="(video, video_index) in videos" :key="video.id"
                    :class="'product-video-' + (video_index + 1)"
                    @click="toggleVideo(video)">
                </a>
                <a class="product-brochure clickable" v-for="(brochure, brochure_index) in brochures" :key="brochure.id"
                    :class="'product-brochure-' + (brochure_index + 1)"
                    @click="toggleBrochure(brochure)">
                </a>
			</div>
			<div class="vcc-360-view" style="display: none;" v-html="sponsor.kuula_iframe">
			</div>
            <!-- CHAT -->
            <div class="chat-container" :class="{ hidechatbutton: chatContainerVisibility }">
                <button @click="dialogVisible = true"><span>Chat With Us Here</span></button>
            </div>

            <div class="vcc-switch-btn">
                <a href="#" @click="add_visit_360_view">Switch to<br><span>360&#176; Tour View</span></a>
            </div>
            <div class="vcc-switch-btn-360" style="display: none;">
                <a href="#">Switch to<br><span>3D Tour View</span></a>
            </div>
		</div>

        <div class="container booth-content">
            <div class="row">
                <div class="col-md-6">
                    <img :src="sponsor.logo ? sponsor.logo : '/assets/images/vcc/virtual-media-event.png'" alt="" class="sponsor-logo mt-2">
                    <h1 class="text-uppercase">{{ sponsor.name }}</h1>
                    <p>{{ sponsor.website }}</p>
                    <p>{{ sponsor.address }}</p>

                    <h1>ABOUT US</h1>
                    <p v-html="sponsor.description"></p>
                </div>
                <div class="col-md-6">
                    <VCCModalSponsorResources :sponsor="sponsor" :brochures="brochures" :videos="videos" :product_catalog="product_catalog" :interactive_profile="interactive_profile" ref="assetsModal" />
                    <div class="contacts">
                        <h1>CONTACT OUR REPRESENTATIVE</h1>
                        <p>{{ sponsor.email }}</p>
                        <p>Mobile: {{ sponsor.rep_phone ? sponsor.rep_phone : ''}}</p>
                        <p>Landline: {{ sponsor.rep_landline ? sponsor.rep_landline : '' }}</p>
                    </div>

                    <!-- CHAT -->
                    <!-- <div class="chat-container" :class="{ hidechatbutton: chatContainerVisibility }">
                        <button @click="dialogVisible = true">Chat With Us Here</button>
                    </div> -->

                    <el-dialog
                    title="START A CHAT"
                    :visible.sync="dialogVisible"
                    class="">
                        <p>Got any questions? Our brand representative is on the line to assist you. Your online status will also be visible the next time you visit or interact with us.</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false, chatContainerVisibility = true">AGREE</el-button>
                            <el-button @click="dialogVisible = false">CANCEL</el-button>
                        </span>
                    </el-dialog>

                    <div class="chat-con" :class="{ chatvisible: chatContainerVisibility }">
                    <div class="chat" :class="{ open: chatBoxVisibility }">
                        <div class="chat-heading d-none d-md-block justify-content-between align-items-center rounded-top"
                            :class="{ 'bg-primary text-light': !chatBoxVisibility }">
                            <div class="row px-0">
                                <div class="col-10">
                                    <h5 class="px-3 py-2 m-0">
                                        <p class="mb-0 sponsor-chat-name">
                                            Chat with {{ sponsor.name }}
                                        </p>
                                    </h5>
                                </div>
                                <div class="col-2 pr-0">
                                    <button class="chat-minimize btn btn-link text-dark bs-0" @click="chatBoxVisibility = !chatBoxVisibility">
                                        <i class="fa fa-window-minimize" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="chat-history" style="overflow-y: scroll" v-chat-scroll>
                            <ul>
                                <li :class="messages.length <= 0 ? '' : 'd-none'" class="clearfix">
                                    <div class="text-center">No Conversations Yet.</div>
                                </li>
                                <li v-for="(message, index) in messages" :key="index" :class="message.sender_id == user.id ? 'clearfix' : ''">
                                    <span v-if="message.sender_id == user.id">
                                        <div class="message other-message float-right">
                                            {{ message.message }}
                                        </div>
                                        <div class="message-data float-right text-end mb-3 me-4">
                                        <span class="message-data-name">
                                            {{ message.sender.full_name }}
                                        </span>
                                        <i class="fa fa-circle me"></i> <br />
                                            <span class="message-data-time">
                                                {{ new Date(message.created_at) | moment("MMMM D, YYYY")}}
                                            </span>
                                        </div>
                                    </span>
                                    <span v-else>
                                        <div class="message my-message">
                                            {{ message.message }}
                                        </div>
                                        <div class="message-data mb-3">
                                            <span class="message-data-name">
                                                <i class="fa fa-circle online"></i>
                                                {{ message.sender.full_name }}
                                            </span>
                                            <br />
                                            <span class="message-data-time">
                                                {{ new Date(message.created_at) | moment("MMMM D, YYYY") }}
                                            </span>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <textarea @keydown.enter.exact.prevent
                                @keyup.enter.exact="sendMessage"
                                v-model="newMessage"
                                name="message"
                                placeholder="Type your message..."
                                rows="3">
                            </textarea>
                            <button class="btn btn-primary btn-send-message"
                                :class="{ disabled: newMessage === '' || newMessage === null }"
                                @click="sendMessage" >
                                Send
                            </button>
                        </div>
                    </div>
                    </div>
                    <!-- CHAT -->

                </div>
            </div>
        </div>
	</section>
</template>

<script>
import $ from 'jquery'
import Vue from "vue";
import VueChatScroll from "vue-chat-scroll";
import { disableButton } from "~/components/Helper/functions.js"
import { mapGetters } from "vuex";
Vue.use(VueChatScroll);

export default {
    middleware: "auth",
	layout: "vcc-single-booth",
	data () {
		return {
            sponsor: {
                name: null,
                website: null,
                address: null,
                announcement: null,
                description: null,

                logo: null,
                kuula_iframe: null,
                booth_design_id: null,
                booth_design: {
					photo: null,
				},

                user: {
					id: null,
				},

                // representative
                email: null,
                rep_phone: null,
                rep_landline: null,

                user_is_eligible_to_stamp: false,
                user_has_stamped_for_current_round: false,

                type: {
					stamp_timer: null,
				},
            },

            disableStamp: true,
            allowToStamp: false,
            stampCounter: "",
            minutes: 0,
            showStampNotice: false,
            stampMinuteIsZero: false,
            is_stamp_loading: false,
            is_stamp_processing: false,

            newMessage: null,
			chatBoxVisibility: true,
            chatContainerVisibility: false,

            dialogVisible: false,

            loading: true,
            brochures: [{
                title: null,
                img: null,
                class: null
            }],
            videos: [{
                title: null,
                url: 'https://vimeo.com/event/2243209/embed',
                class: null
            }],

            product_catalog: null,
            interactive_profile: null,

            messages: [],
            log: {
				convention_member_id: null,
				url: this.$nuxt.$route.path,
				is_login: false,
				is_logout: false,
			},
			is_reloaded: false,
		};
    },
    computed: {
		...mapGetters({
			user: "auth/user",
		}),
	},
    methods: {
        getSponsorBySlug(slug, is_ready_for_new_stamp_round = false) {
            this.$store.dispatch("sponsors/getSponsorBySlug", slug)
            .then(res => {
                let data = res.data
                let sponsor_data = data.sponsor
                let user_data = sponsor_data.user
                // console.log('sponsor_data', sponsor_data)

                this.sponsor.id = sponsor_data.id
                this.sponsor.name = sponsor_data.name
                this.sponsor.website = sponsor_data.website
                this.sponsor.address = sponsor_data.address
                this.sponsor.announcement = sponsor_data.announcement
                this.sponsor.description = sponsor_data.description

                this.sponsor.logo = sponsor_data.logo
                this.sponsor.background = sponsor_data.background
                this.sponsor.kuula_iframe = sponsor_data.kuula_iframe

                this.sponsor.email = user_data.email
                this.sponsor.user.id = sponsor_data.user.id;
                this.sponsor.rep_phone = sponsor_data.rep_phone
                this.sponsor.rep_landline = sponsor_data.rep_landline

                this.sponsor.type.stamp_timer = sponsor_data.type.stamp_timer

                this.videos = data.videos
                this.brochures = data.brochures
                this.product_catalog = data.product_catalogues
                this.interactive_profile = sponsor_data.interactive_profile

                this.sponsor.booth_design = sponsor_data.booth_design
                this.sponsor.user_has_stamped_for_current_round = sponsor_data.user_has_stamped_for_current_round
                this.sponsor.user_is_eligible_to_stamp = sponsor_data.user_is_eligible_to_stamp

                this.loading = false

                this.stampTimer()
                this.logMemberVisit()
                this.getMessages()
                this.isReloaded()
                this.bindPusher()

                // console.log("Is ready for new stamp round?", is_ready_for_new_stamp_round)
                if(is_ready_for_new_stamp_round) {
                    this.sponsor.user_has_stamped_for_current_round = true
                    this.$message.success("Please refresh your browser to participate in the new stamp round.")
                }

                this.is_stamp_loading = false
            })
            .catch(err => {
                console.error(err)
                this.$message.error(err)
                this.loading = false
                this.$router.push('/virtual-convention-center/lobby')
            })
        },
        stampTimer() {
			let self = this;
			let time_remaining = this.sponsor.type.stamp_timer;
            this.minutes = (time_remaining / 60).toString() + ":01";
            // this.minutes = "00:03"; // for testing
            // console.log("Initial minutes: ", this.minutes)

			var stamp_timer = setInterval(function () {
                var timer = self.minutes.split(':');
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                seconds--;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) clearInterval(stamp_timer);
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                self.minutes = minutes + ':' + seconds;

                if(self.minutes <= "0:00"){
					clearInterval(stamp_timer);
					self.disableStamp = false;
                    console.log("Disable stamp: ", self.disableStamp)
					self.stampCounter = "00:00"
                    self.stampMinuteIsZero = true
                    console.log('Is the stamp timer zero? ', self.stampMinuteIsZero)

                    setTimeout(() => {
                        self.allowToStamp = true
                        console.log("Allow to Stamp? ", self.allowToStamp)
                    }, 1000);
                } else {
                    self.stampCounter = self.minutes
                }
			}, 1000);
		},
        add_visit_360_view() {
            this.$store.dispatch("sponsors/updateTour", this.sponsor.id)
            .then(res => {
               // console.log(res.data.message)
            })
            .catch((err) => {
                console.error(err);
            });
        },
        stamp() {
			let data = {
				sponsor_id: this.sponsor.id,
				user_id: this.user.id,
			};

            this.is_stamp_processing = true
			this.$store.dispatch("sponsors/stamp", data)
			.then((res) => {
                let data = res.data
				this.$message.success(data.message);
                this.showStampNotice = false
                this.getSponsorBySlug(this.$route.params.slug, data.is_eligible_for_next_stamp_round)
                // console.log(this.$route.params.slug, data.is_eligible_for_next_stamp_round)
                this.is_stamp_loading = true
                this.is_stamp_processing = false
			})
			.catch((err) => {
                // console.error(err)
				this.$message.error(err);
                this.showStampNotice = false
                this.is_stamp_processing = false
			});
		},
        toggleStampNotice() {
            this.showStampNotice = !this.showStampNotice
        },
        logMemberVisit() {
			let data = {
				sponsor_id: this.sponsor.id,
				user_id: this.user.id,
			};

			this.$store.dispatch("sponsors/logMemberVisit", data)
			.then((res) => {
				console.log(res.data.message);
			})
			.catch((err) => {
				console.error(err);
			});
		},
        getMessages() {
			this.$store.dispatch("chats/getMessages", { sponsor_id: this.sponsor.user.id })
			.then((res) => {
				this.messages = res.data;
			})
			.catch((err) => {
				this.$message.error(err);
			});
		},
		sendMessage() {
			if (!this.newMessage) {
				this.$message.error("Please write a message");
			} else {
				disableButton('.btn-send-message', true)
				this.$store.dispatch("chats/sendMessage", {
					receiver_id: this.sponsor.user.id,
					message: this.newMessage,
				})
				.then((res) => {
					disableButton('.btn-send-message', false)
                    this.getMessages();
					this.$message.success(res.data.message);
					this.newMessage = null;
				})
				.catch((err) => {
					disableButton('.btn-send-message', false)
                    this.getMessages();
					this.$message.error(err);
				});
			}
		},
        loginDelegateAttendance(){
			if(sessionStorage.getItem('reload') === "false"){
				this.log.convention_member_id = this.user.member.id
				this.log.is_login = true
				this.log.is_logout = false

				this.$store.dispatch("vcc/create", this.log)
				.then(res => {
					console.log(res.data.message)
				})
				.catch(err => {
					console.error(err)
				})
			}
		},
		logoutDelegateAttendance(){
            this.log.convention_member_id = this.user.member.id
			this.log.is_login = false
			this.log.is_logout = true

			this.$store.dispatch("vcc/create", this.log)
			.then(res => {
				console.log(res.data.message)
			})
			.catch(err => {
				console.error(err)
			})
		},
        isReloaded(){
			if(sessionStorage.reload) {
				sessionStorage.setItem('reload', true);
			} else {
				sessionStorage.setItem('reload', false);
			}
			this.loginDelegateAttendance()
		},
        onExit(){
            if(this.stampMinuteIsZero !== true || this.sponsor.user_has_stamped_for_current_round === false){
                this.$confirm("You haven't got your stamp. Do you still want to leave?", {
                    dangerouslyUseHTMLString: true,
                    cancelButtonText: 'Stay',
                    confirmButtonText: 'Leave',
                    type: 'warning',
                })
                .then(() => {
                    this.logoutDelegateAttendance()
                    sessionStorage.removeItem('reload', false);
                    this.$router.push('/virtual-convention-center/exhibit-hall/gold')
                })
            }else{
                sessionStorage.removeItem('reload', false);
                this.logoutDelegateAttendance()
                this.$router.push('/virtual-convention-center/exhibit-hall/gold')
            }
        },
        bindPusher() {
			console.log("Binding Pusher...");

			var self = this
			var channel = pusher.subscribe(process.env.PUSHER_CHANNEL);
            channel.bind("chat", function() {
				self.getMessages()
			});
		},
        toggleCatalog(catalog) {
            this.$refs.assetsModal.viewCatalog(catalog)
        },
        toggleCompanyProfile(company_profile) {
            this.add_visit_company_profile_view()
            this.$refs.assetsModal.viewCompanyProfile(company_profile)
        },
        toggleVideo(video) {
            this.$refs.assetsModal.viewVideo(video)
        },
        toggleBrochure(brochure) {
            this.$refs.assetsModal.viewPDF(brochure)
        }
    },
    async fetch() {
        setTimeout(() => {
            this.getSponsorBySlug(this.$route.params.slug, false)
		}, 1000);
    },
    mounted(){
        if(this.stampMinuteIsZero !== true || this.sponsor.user_has_stamped_for_current_round === false){
            window.addEventListener('beforeunload', function (e) {
                e.returnValue = 'msg';
            });
        }
        $( ".vcc-switch-btn a" ).click(function() {
            $(".vcc-360-view").fadeIn(500, function() {
                // Animation complete.
            });
            $(".vcc-switch-btn-360").fadeIn(500, function() {
                // Animation complete.
            });
            $(".vcc-banner-img").fadeOut(500, function() {
                // Animation complete.
            });
            $(".vcc-switch-btn").fadeOut(500, function() {
                // Animation complete.
            });
        });
        $( ".vcc-switch-btn-360 a" ).click(function() {
            $(".vcc-banner-img").fadeIn(500, function() {
                // Animation complete.
            });
            $(".vcc-switch-btn").fadeIn(500, function() {
                // Animation complete.
            });
            $(".vcc-360-view").fadeOut(500, function() {
                // Animation complete.
            });
            $(".vcc-switch-btn-360").fadeOut(500, function() {
                // Animation complete.
            });
        });

        $(".timer-ready").click(function() {
            $(".timer-ready").fadeOut();
            $(".get-stamp").fadeIn();
        });
        // STAMP JS END

        // RESOURCES JS START
        $( ".vcc-banner-img a" ).click(function( event ) {
            event.preventDefault();
        });
        $(".product-catalog").click(function() {
            $("#product-catalog").fadeIn();
        });
        $(".product-profile").click(function() {
            $("#company-profile").fadeIn();
        });
        $(".product-brochure").click(function() {
            var mapResource = $(this).data('class');
            $("#brochure-list").fadeIn();
            $('.'+mapResource).fadeIn();
        });
        $(".product-video").click(function() {
            var mapResource = $(this).data('class');
            $("#video-list").fadeIn();
            $('.'+mapResource).fadeIn();
        });
    },
};
</script>
<style lang="scss" scoped>
.sponsor-logo {
    max-height: 100px;
    width: auto;
    object-fit: contain;
    max-width: 100%;
}
.booth-content {
    padding-top: 30px;
    padding-bottom: 30px;
    h1 {
        margin-top: 50px;
        font-weight: 700;
        color: #065E99;
        margin-bottom: 20px;
    }
    p {
        font-size: 1.5rem;
        line-height: normal;
    }
}
.contacts {
    padding: 25px;
    h1 {
        font-size: 2.3rem;
    }
}
.vcc-banner-container {
    position: relative;
}
/* CHAT CSS */
.chat-container {
    // display: flex;
    // justify-content: flex-end;
    position: absolute;
    right: -3%;
    bottom: 3.5%;
    &.hidechatbutton {
        display: none;
    }
    button {
        border: none;
        background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 10px 3px #EDC85A;
        color: #000000;
        padding: 18px 100px 18px 90px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 40px;
    }
}
/* CHAT CSS */

/* ANNOUNCEMENT CSS */
.announcement {
    position: absolute;
    left: 13%;
    top: 13.5%;
    max-width: 1200px;
    width: 55%;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 15px;
    height: 60px;
    overflow: hidden;
    z-index: 2;
    h1 {
        color: #000000;
        font-weight: 700;
        font-size: 1.4rem;
        width: auto;
        position: absolute;
        top: 5px;
        bottom: 0;
        margin: 0;
        white-space: nowrap;
        line-height: 46px;
        animation: announce 15s linear infinite;
    }
    /*EXIT BOOTH*/
    .cover{
        background: #DCF2FF;
        width: 20%;
        height: 60px;
        padding: 1em .3em;
        position: absolute;
        top: 0%;
        left: 0%;
        .exit{
            position: absolute;
            top: 1%;
            left: 10%;
            display: block;
            width: 33px;
            height: 45px;
            z-index: 50;
            transition: 0.3s;
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
        h2{
            color: #002761;
            font-size: 1.3em;
            font-weight: 900;
            letter-spacing: 0px;
            padding-top: 1px;
            position: absolute;
            left: 30%;
        }
    }
    .exit:hover {
        left: 5%;
    }
}
@keyframes announce {
    0% {
        transform: translate(250%, 0);
    }
    50% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-250%, 0);
    }
}
/* ANNOUNCEMENT CSS */

/* STAMP CSS */
.stamp-timer-container {
    position: absolute;
    right: 15%;
    top: 13%;
    max-width: 280px;
    width: 40%;
    z-index: 2;
    button {
        border: none;
        background: url("/assets/images/vcc/stamp-icon.png") 25px center no-repeat #FF7500;
        padding: 4px 20px 4px 70px;
        color: #ffffff;
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        height: 63px;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 40px;
        &.timer-ready {
            background-color: #FF0000;
        }
        &.get-stamp {
            background-color: #4F9D5C;
        }
        &.received-stamp {
            background: url("/assets/images/vcc/received-stamp-icon.png") 25px center no-repeat #FAB623;
            color: #065E99;
        }
        span {
            display: block;
            &.timer {
                font-size: 2.6rem;
                line-height: 2.1rem;
                font-weight: 700;
            }
            &.getstamp {
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.5rem;
            }
        }
    }
}
.stamp-notice {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 7777;
    background-color: rgba($color: #000000, $alpha: 0.4);
    top: 0;
    left: 0;
    display: none;
    .stamp-modal {
        background-color: #ffffff;
        height: auto;
        text-align: center;
        max-width: 740px;
        width: 90%;
        border-radius: 10px;
        overflow: hidden;
        h1 {
            background-color: #4F9D5C;
            color: #ffffff;
            margin: 0;
            padding: 5px;
            text-transform: uppercase;
            font-size: 1.6rem;
            font-weight: 700;
        }
        .stamp-msg {
            padding: 20px;
            p {
                line-height: normal;
            }
            button {
                border: none;
                background-color: #0776BC;
                color: #ffffff;
                text-transform: uppercase;
                font-size: 0.7rem;
                font-weight: 700;
                padding: 5px 20px;
                width: 100px;
                border-radius: 20px;
                margin: 10px 15px 10px;
            }
        }
    }
}
.stamp-flex {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* STAMP CSS */

/* 3D IMAGE PINS */
.product-catalog {
    position: absolute;
    display: block;
    width: 7.3%;
    height: 22.8%;
    top: 46.1%;
    left: 22.5%;
}
.product-profile {
    position: absolute;
    display: block;
    width: 11.2%;
    height: 11.7%;
    top: 49.1%;
    left: 54.3%;
}
.product-video-1 {
    position: absolute;
    display: block;
    width: 6%;
    height: 6.3%;
    top: 45.2%;
    left: 39.6%;
}
.product-video-2 {
    position: absolute;
    display: block;
    width: 6%;
    height: 6.3%;
    top: 52.6%;
    left: 39.6%;
}
.product-video-3 {
    position: absolute;
    display: block;
    width: 6%;
    height: 6.3%;
    top: 60%;
    left: 39.6%;
}
.product-video-4 {
    position: absolute;
    display: block;
    width: 7.7%;
    height: 8.2%;
    top: 54.4%;
    left: 38.8%;
}
.product-brochure-1 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 62.9%;
    left: 51.1%;
}
.product-brochure-2 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 67.2%;
    left: 51.1%;
}
.product-brochure-3 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 71.5%;
    left: 51.1%;
}
.product-brochure-4 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 76%;
    left: 51.1%;
}
.product-brochure-5 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 63.1%;
    left: 72.2%;
}
.product-brochure-6 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 67.3%;
    left: 72.2%;
}
.product-brochure-7 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 71.5%;
    left: 72.2%;
}
.product-brochure-8 {
    position: absolute;
    display: block;
    width: 2.4%;
    height: 3.7%;
    top: 76%;
    left: 72.2%;
}
.vcc-banner-img > a {
    border: 2px solid #00ccff;
    animation-name: blinking;
    animation-duration: 1s;
    animation-iteration-count: 100;
}
.vcc-banner-img > a:hover {
    border: 3px solid #00ccff;
}
@keyframes blinking {
    50% {
        border-color: #d400d4;
    }
}
/* 3D IMAGE PINS */

.vcc-banner-img {
    position: relative;
    img {
        max-width: 100%;
        display: block;
    }
}
.vcc-switch-btn, .vcc-switch-btn-360 {
    max-width: 320px;
    width: 100%;
    position: absolute;
    bottom: 4%;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    a {
        text-transform: uppercase;
        color: #fff;
        background-color: #005b97;
        border-radius: 20px;
        display: inline-block;
        padding: 8px 30px;
        font-weight: 300;
        line-height: 25px;
        text-decoration: none;
        max-width: 320px;
        width: 100%;
        cursor: pointer;
        span {
            font-weight: 700;
            font-size: 25px;
        }
    }
}
.vcc-360-view iframe {
    height: 900px !important;
}

/* CHAT STYLES */
.chat-con {
    display: none;
}
.chat-con.chatvisible {
    display: block;
}
.chat {
	position: fixed;
	width: 80vw;
	max-width: 450px;
	min-width: 200px;
	background: #ffffff;
	border-radius: 10px;
	color: #434651;
	padding: 0;
	z-index: 100;
	height: 35px;
	bottom: 16px;
	right: 5vw;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&.open {
		bottom: 20px;
		right: 5vw;
		height: 600px;
		width: 50vw;
	}
    .chat-heading {
        background-color: #EDC85A;
        color: #000000;
    }
	.btn-link {
		padding: 0.6rem 0.75rem 0.375rem 0px;
		color: black;
		.fa-window-minimize {
			font-size: 24px;
			position: relative;
			top: -5px;
		}
	}
	.sponsor-chat-name {
		display: inline-block;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
	}
}
.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}
.chat .chat-header img {
  float: left;
  border-radius: 50%;
  width: 60px;
  border: 2px solid #eee;
}
.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}
.chat .chat-header .chat-with {
  font-weight: bold;
  font-size: 16px;
}
.chat .chat-header .chat-num-messages {
  color: #000;
}
.chat .chat-header .fa-star {
  float: right;
  color: #d8dadf;
  font-size: 20px;
  margin-top: 12px;
}
.chat .chat-history {
  padding: 30px 30px 30px;
  border-bottom: 1px solid #eee;
  overflow-y: scroll;
  height: 360px;
  // height: 567px;
}
.chat .chat-history ul li {
  list-style: none;
}
.chat .chat-history .message-data {
  // margin-bottom: 1rem;
  &-name {
    font-size: 1rem;
  }
}
.chat .chat-history .message-data-time {
  color: #141414;
  padding-left: 6px;
  font-size: 9px;
}
.chat .chat-history .message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 15px;
  width: 90%;
  position: relative;
}
.chat .chat-history .message:after {
  bottom: -20px;
  left: 20px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-top-color: #4875b4;
  border-width: 10px;
  margin-left: -10px;
}
.chat .chat-history .my-message {
  background: #4875b4;
}
.chat .chat-history .other-message {
  background: #48b467;
}
.chat .chat-history .other-message:after {
  border-top-color: #48b467;
  left: 93%;
}
.chat .chat-message {
  padding: 10px 30px;
}
.chat .chat-message textarea {
  width: 100%;
  border: none;
  padding: 10px 20px;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  resize: none;
  background: #eee;
  color: #111;
}
.chat .chat-message .fa-file-o,
.chat .chat-message .fa-file-image-o {
  font-size: 16px;
  color: gray;
  cursor: pointer;
}
.chat .chat-message button {
  float: right;
  // color: #fff;
  // background: #94c2ed;
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
}
.chat .chat-message button:hover {
  color: #75b1e8;
}
.online,
.offline,
.me {
  margin-right: 3px;
  font-size: 10px;
}
.online {
  color: #4875b4;
}
.offline {
  color: #fe7a15;
}
.me {
  color: #94c2ed;
}
/* CHAT STYLES */

::v-deep .el-dialog {
    background-color: #ffffff;
    height: auto;
    text-align: center;
    max-width: 890px;
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    .el-dialog__header {
        background-color: #EDC85A;
        margin: 0;
        padding: 5px;
        .el-dialog__headerbtn {
            display: none;
        }
        .el-dialog__title {
            font-size: 1.6rem;
            text-transform: uppercase;
            font-weight: 700;
            color: #000000;
        }
    }
    .el-dialog__body {
        padding: 20px;
        color: #000000;
		h3 {
			font-weight: 700;
		}
		p {
			line-height: normal;
			word-break: break-word;
            font-size: 1.1rem;
		}
    }
    .el-dialog__footer {
        padding: 0 20px 20px;
        text-align: center;
        button {
            border: none;
            background-color: #0776BC;
            color: #ffffff;
            text-transform: uppercase;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 10px 20px;
            width: 150px;
            border-radius: 20px;
            margin: 0 15px 5px;
        }
    }
}
.vcc-360-view::v-deep {
    iframe {
        height: 950px !important;
    }
}
@media screen and (max-width: 1370px) {
    /*Chat css*/

    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 62px;
        width: 47%;
        h1 {
            font-size: 1.5rem;
            top: 7px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 25%;
            height: 63px;
            padding: 0px;
            .exit{
                top: 0%;
                width: 40px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: 1.2em;
                padding-right: 8px;
                left: 30%;
                top: 15%;
            }
        }
    }
}
@media screen and (max-width: 1200px) {

    .vcc-360-view::v-deep {
        iframe {
            height: 670px !important;
        }
    }
    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 62px;
        width: 47%;
        h1 {
            font-size: 1.5rem;
            top: 7px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 25%;
            height: 63px;
            padding: 0px;
            .exit{
                top: 0%;
                width: 40px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: 1.2em;
                padding-right: 8px;
                left: 30%;
                top: 15%;
            }
        }
    }
}
@media screen and (max-width: 1060px) {
    /* CHAT CSS */
    .chat-container {
        right: -3%;
        bottom: 3%;
        &.hidechatbutton {
            display: none;
        }
        button {
            background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 7px 0px #EDC85A;
            padding: 15px 40px 15px 70px;
            font-size: 1rem;
            background-size: contain;
        }
    }
    /*button stamp*/
    .stamp-timer-container button{
        width: 50%;
        height: 35px;
        background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
        background-size: 24px !important;
        &.received-stamp {
            background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
            background-size: 24px !important;
        }
        & span.timer{
            font-size: 1em;
            line-height: 1em;
            font-weight: 700;
            margin-left: -4em;
        }
        & span{
            font-size: .5em;
            width: 8em;
            margin-left: -4em;
        }
        .getstamp {
            font-size: .7rem !important;
            line-height: .8rem !important;
            margin-left: -2em;
        }
    }
}
@media screen and (max-width: 1025px) {
    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 35px;
        width: 50%;
        h1 {
            font-size: 1rem;
            top: -4px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 33%;
            height: 60px;
            padding: 0px;
            .exit{
                top: -10%;
                width: 25px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: .9em;
                padding-right: 8px;
                left: 30%;
                top: 15%;
            }
        }
    }

}
@media screen and (max-width: 915px) {
    /*video modal*/
    .vcc-360-view::v-deep {
        iframe {
            height: 515px !important;
        }
    }
    .resource-notice .resource-modal.video {
        height: 90%;
        width: 90% !important;
    }
    .resource-modal .close{
        right: -25px !important;
        width: 25px;
        height: 25px;
    }
    /*item modal*/
    .resource-notice .resource-modal{
        height: auto;
        width: 40% !important;
    }
    .resource-item img {
        height: auto;
        width: 100%;
    }
    .resource-download {
        padding: 10px 0;
    }
    /*button 360 and 3D*/
    .vcc-switch-btn, .vcc-switch-btn-360 {
        bottom: 2%;
    }

     /* CHAT CSS */
    .chat-container {
        right: -3%;
        bottom: 3%;
        &.hidechatbutton {
            display: none;
        }
        button {
            background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 7px 0px #EDC85A;
            padding: 15px 40px 15px 70px;
            font-size: 0.7rem;
            background-size: contain;
        }
    }
    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 35px;
        width: 50%;
        h1 {
            font-size: 1rem;
            top: -4px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 33%;
            height: 60px;
            padding: 0px;
            .exit{
                top: -10%;
                width: 25px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: 10px;
                padding-right: 0;
                left: 30%;
                top: 15%;
            }
        }
    }
}

@media screen and (max-width: 768px) and (orientation:landscape) {
    .vcc-360-view::v-deep {
        iframe {
            height: 430px !important;
        }
    }
    /* CHAT CSS */
    .chat-container {
        right: -3%;
        bottom: 3%;
        &.hidechatbutton {
            display: none;
        }
        button {
            background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 7px 0px #EDC85A;
            padding: 11px 30px 11px 55px;
            font-size: .8rem;
            background-size: contain;
        }
    }

    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 35px;
        width: 50%;
        h1 {
            font-size: 1rem;
            top: -4px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 27%;
            height: 60px;
            padding: 0px;
            .exit{
                top: -10%;
                width: 25px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: .7em;
                padding-right: 8px;
                left: 30%;
                top: 9%;
            }
        }
        .exit:hover {
            left: 5%;
        }
    }
    /*button stamp*/
    .stamp-timer-container button{
        width: 50%;
        height: 34px;
        background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
        background-size: 24px !important;
        &.received-stamp {
            background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
            background-size: 24px !important;
        }
        & span.timer{
            font-size: 1em;
            line-height: 1em;
            font-weight: 700;
            margin-left: -4em;
        }
        & span{
            font-size: .5em;
            width: 8em;
            margin-left: -4em;
        }
        .getstamp {
            font-size: .7rem !important;
            line-height: .8rem !important;
            margin-left: -2em;
        }
    }
    /*video modal*/
    .resource-notice .resource-modal.video {
        height: 90%;
        width: 90% !important;
    }
    .resource-modal .close{
        right: -25px !important;
        width: 25px;
        height: 25px;
    }
    /*item modal*/
    .resource-notice .resource-modal{
        height: auto;
        width: 50% !important;
    }

    /*button 360 and 3D*/
    .vcc-switch-btn, .vcc-switch-btn-360 {
        width: 180px;
        bottom: 2.5%;

        a{
            line-height: 15px;
            font-size: .8em;
            padding: 5px 25px;
            border-radius: 12px;

            span{
                font-size: 15px;
                font-weight: 600;
            }
        }
    }

}

@media screen and (max-width: 540px) {
    .sponsor-logo {
        max-height: 100px;
        width: 100%;
        object-fit: contain;
    }
    .vcc-360-view::v-deep {
        iframe {
            height: 430px !important;
        }
    }
    /* CHAT CSS */
    .chat-container {
        right: 2%;
        bottom: 3%;
        padding-bottom: 0.1em;
        background-color: #EDC85A;
        border-radius: 50px;
        button {
            background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 4px 0px #EDC85A !important;
            padding: 15px 0px 12px 37px !important;
            background-size: contain !important;
            span{
                display: none !important;
            }
        }
    }
    /*announcement roll*/
    .announcement {
        top: 13%;
        height: 35px;
        width: 50%;
        h1 {
            font-size: 1rem;
            top: -4px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 15%;
            height: 60px;
            padding: 0px;
            .exit{
                top: -10%;
                width: 25px;
                img {
                    display: block;
                }
            }
            h2{
                font-size: 0;
                padding-right: 8px;
                left: 30%;
                top: 7%;
            }
        }
    }
    /*button stamp*/
    .stamp-timer-container button{
        width: 50%;
        height: 34px;
        background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
        background-size: 24px !important;
        &.received-stamp {
            background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
            background-size: 24px !important;
        }
        & span.timer{
            font-size: 1em;
            line-height: 1em;
            font-weight: 700;
            margin-left: -4em;
        }
        & span{
            font-size: .5em;
            width: 8em;
            margin-left: -4em;
        }
        .getstamp {
            font-size: .6rem !important;
            line-height: .8rem !important;
            margin-left: -5em;
        }
    }
    /*video modal*/
    .resource-notice .resource-modal.video {
        height: 90%;
        width: 90% !important;
    }
    .resource-modal .close{
        right: -25px !important;
        width: 25px;
        height: 25px;
    }
    /*item modal*/
    .resource-notice .resource-modal{
        height: auto;
        width: 50% !important;
    }

    /*button 360 and 3D*/
    .vcc-switch-btn, .vcc-switch-btn-360 {
        width: 180px;
        bottom: 2.5%;

        a{
            line-height: 15px;
            font-size: .8em;
            padding: 5px 25px;
            border-radius: 12px;

            span{
                font-size: 15px;
                font-weight: 600;
            }
        }
    }

}

@media screen and (max-width: 415px) {
    .vcc-360-view::v-deep {
        iframe {
            height: 320px !important;
        }
    }
    /* CHAT CSS */
    .chat-container {
        right: 2%;
        bottom: 3%;
        padding-bottom: 0.1em;
        background-color: #EDC85A;
        border-radius: 50px;
        button {
            background: url("/assets/images/vcc/vcc-chat-icon.png") no-repeat 4px 0px #EDC85A !important;
            padding: 15px 0px 12px 37px !important;
            background-size: contain !important;
            span{
                display: none !important;
            }
        }
    }
    /*announcement roll*/
    .announcement {
        height: 35px;
        width: 40%;
        h1 {
            font-size: 1rem;
            top: -5px;
        }
        /*EXIT BOOTH*/
        .cover{
            width: 30%;
            .exit{
                left: 15%;
            }
            h2{
                display: none;
            }
        }
    }
    /*button stamp*/
    .stamp-timer-container {
        top: 15%;
        width: 35%;
    }
    .stamp-timer-container button{
        width: 80%;
        height: 30px;
        background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
        background-size: 24px !important;
        &.received-stamp {
            background: url("/assets/images/vcc/received-stamp-icon.png") 10px center no-repeat #FAB623 !important;
            background-size: 24px !important;
        }
        & span.timer{
            font-size: 1em;
            line-height: 1em;
            font-weight: 700;
            margin-left: -4em;
        }
        & span{
            font-size: .5em;
            width: 8em;
            margin-left: -4em;
        }
        .getstamp, .received-stamp {
            font-size: .7rem !important;
            line-height: .8rem !important;
            margin-left: -4em;
        }
    }

    .resource-notice .resource-modal{
        height: auto;
        width: 90% !important;
    }
    .vcc-switch-btn, .vcc-switch-btn-360 {
        width: 145px;
        bottom: 2%;

        a{
            line-height: 10px;
            font-size: .5em;
            padding: 3px 25px;
            border-radius: 12px;

            span{
                font-size: 12px;
                font-weight: 500;
            }
        }
    }
}
@media screen and (max-width: 850px) {
    .chat {
        position: static;
        width: 100%;
        max-width: 100%;
        // float: left;
        background: #ffffff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #434651;
        padding: 0;
        // margin: 0 auto;
        box-shadow: none;
        &.open {
            width: 100%;
        }
    }
    .chat-con.chatvisible {
        border: 1px solid #dddddd;
    }
}
@media screen and (max-width: 767px) {
    .chat.open {
        height: auto;
    }
    .chat .chat-heading {
        display: block !important;
    }
    .chat-minimize {
        display: none;
    }
    .chat .chat-history {
        padding: 15px 15px 15px;
        height: 550px;
    }
    .chat-history ul {
        margin: 0;
        padding: 0;
    }
    .people-list {
        width: 100%;
    }
    .chat-shadow {
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12);
        margin-bottom: 150px;
    }

    .chat .chat-history .message:after {
        display: none;
    }
    .chat .other-message:after {
        display: none;
    }
    .bg-unviewed {
        background-color: #d2e0e0;
    }
}

@media screen and (max-width: 420px) {
    .vcc-360-view::v-deep {
        iframe {
            height: 235px !important;
        }
    }
}

</style>
