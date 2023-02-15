<template>
    <section id="symposia">
        <VCCPreLoader />

        <VCCModalSymposia ref="symposiaModal" />

        <div class="banner-profile mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="mw-100" src="/assets/images/vcc/vcc-profile-banner.png" alt="">
                        <div class="custom-card">
                            <h1>ON-DEMAND LECTURE SESSIONS</h1>
                            <div class="custom-card-content">
                                <p>Welcome to our Symposia Hall where you  can watch the keynote lectures and presentations from our featured speakers whenever you want, anytime and anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12" id="accordion">
                    <!-- Symposia Content Start -->
                    <div class="card text-center sym-content" v-for="(category, index) in symposia_categories" :key="index">
                        <div class="card-header" :id="'heading' + index">
                            <h5 class="mb-0">
                                <button class="btn btn-link bs-0 collapsed" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true" :aria-controls="'#collapse' + index">
                                    {{ category.title }}
                                </button>
                            </h5>
                        </div>

                        <div :id="'collapse' + index" class="collapse" :aria-labelledby="'collapse' + index">
                            <div class="card-body">
                                <p>{{ category.chair }}<br>
                                {{ category.subtitle }}</p>
                                <div class="row" v-if="category.symposia.length">
                                    <div class="col-md-3 pb-3" v-for="(event, event_index) in category.symposia" :key="event_index">
                                        <div class="sym-card">
                                            <h5 :class="category.card_header_color">{{ event.card_title }}</h5>
                                            <div class="sym-card-content">
                                                <img @click="openModal()" :src="event.thumbnail ? event.thumbnail : '/assets/images/vcc/Vimeo-Pop-Up.jpg'" alt="">
                                                <div class="play-vid">
                                                    <button @click="openModal(event.video)">Play Video</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="text-center">
                                        <h3 class="text-muted">No videos for this category have been set yet.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
	layout: "vcc",
    middleware: "auth",
	data () {
		return {
            log: {
				convention_member_id: null,
				url: this.$nuxt.$route.path,
				is_login: false,
				is_logout: false,
			},

            user: {},
			is_reloaded: false,

            symposia_categories: []
		};
    },
	beforeDestroy(){
        sessionStorage.removeItem('reload');
		// this.logoutDelegateAttendance()
	},
  	methods: {
        openModal(video) {
            this.$refs.symposiaModal.openDialog(video)
        },
		getUser(){
			this.$store.dispatch("auth/getUser")
            .then((res) => {
                this.user = res.data
				this.isReloaded()
				// console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
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
        getCategorizedEvents() {
            this.$store.dispatch("vcc/getSymposiaCategorizedEvents")
			.then(res => {
                this.symposia_categories = res.data
			})
			.catch(err => {
				console.error(err)
			})
        }
	},
	mounted(){
		this.getUser()
		window.addEventListener('beforeunload', function (e) {
            e.returnValue = 'msg';
        });
	},
    async fetch() {
        this.getCategorizedEvents()
    }
};
</script>

<style lang="scss" scoped>
#accordion {
    .card {
        border: none;
        margin-bottom: 30px;
        .card-header {
            background: #065E99;
            border-radius: 40px;
            padding: 10px 30px;
            h5 {
                button {
                    display: block;
                    width: 100%;                   
                    text-decoration: none;
                    color: #fff;
                    font-weight: 700;
                    font-size: 25px;
                    text-align: left;
                    background: url('/assets/images/vcc/white-down.png') no-repeat right center;
                    &.collapsed {
                        background: url('/assets/images/vcc/white-plus.png') no-repeat right center;
                    }
                    &:focus {
                        outline: 0 !important;
                    }
                }
            }
        }
    }
}
.banner-profile {
    background: url('/assets/images/vcc/profile-banner-bg-3.png') no-repeat center bottom #ffffff;
    background-size: cover;
    text-align: center;
    padding: 70px 0 30px;
}
.custom-card {
    background-color: #ffffff;
    height: auto;
    text-align: center;
    max-width: 730px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    h1 {
        background-color: #065E99;
        color: #ffffff;
        margin: 0;
        padding: 8px;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
    }
    h3 {
        background-color: #065E99;
        color: #ffffff;
        margin: 0;
        padding: 8px;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 700;
    }
    .custom-card-content {
        padding: 20px;
        p {
            line-height: normal;
            font-size: 0.8rem;
            margin: 0 0 10px;
        }
    }
}
.sym-content {
    font-family: 'Inter', sans-serif;
    h4 {
        font-weight: 700;
        margin-bottom: 25px;
        font-size: 1.4rem;
        text-transform: uppercase;
    }
    p {
        font-size: 1.3rem;
        font-style: italic;
        line-height: normal;
    }
}
.sym-card {
    font-family: 'Inter', sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow: hidden;
    height: 100%;
    h5 {
        background-color: rgba(6, 94, 153, 1);
        color: #ffffff;
        font-weight: 700;
        font-size: 1rem;
        margin: 0;
        padding: 9px 8px 7px;
        &.orange {
            background-color: rgba(255, 117, 0, 1);
        }
        &.yellow {
            background-color: rgba(250, 182, 35, 1);
        }
    }
    .sym-card-content {
        padding: 0;
        .play-vid {
            text-align: center;
            button {
                background: url('/assets/images/vcc/black-play.png') no-repeat left center transparent;
                padding: 10px 10px 10px 35px;
                border: none;
                color: #065E99;
                font-size: 16px;
                font-weight: 700;
                text-transform: uppercase;
            }
        }
        img {
            margin-bottom: 0;
            max-width: 100%;
            &:hover {
                cursor: pointer;
            }
        }
        p {
            font-size: 0.8rem;
            font-style: normal;
        }
    }
}

/* El-Dialog */
.sym-modal::v-deep .el-dialog {

    width: 70% !important;
    height: fit-content !important;

    .el-dialog__body{
        padding-top: 56.25% !important;
        position: relative;
        iframe{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }
    }
}
@media only screen and (max-width: 768px) {
   .sym-modal::v-deep
   .el-dialog
   .el-dialog__header
   .el-dialog__headerbtn{
        right: -30px !important;
        width: 30px !important;
        height: 30px !important;
    }
}
@media screen and (max-width: 767px) {
    #accordion {
        .card {
            .card-header {
                h5 {
                    button {                 
                        font-size: 16px;
                        padding-right: 55px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                }
            }
        }
    }
}
</style>