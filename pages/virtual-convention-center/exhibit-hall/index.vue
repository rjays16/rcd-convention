<template>
	<section>
		<VCCPreLoader />

		<el-dialog
        title="WELCOME"
        :visible.sync="is_dialogVisible"
        class=""
        :before-close="handleClose">
			<img class="mw-100" src="/assets/images/vcc/vcc-profile-banner.png" alt="">
			<h3>Welcome to the RCD 2022 Virtual Exhibits Hall!</h3>
			<p>Start collecting stamps from all of our featured exhibitors booths! Collect all 33 Virtual Stamps and these will be stored in your RCD Virtual Passport. Your RCD Virtual Passport will be your raffle entry in our main RCD 2022 Raffle Draw.</p>
			<p>The virtual stamp countdown will automatically start when you visit each VEX booth. When it's ready, you can collect the stamp after the countdown.</p>
			<p>So, come and visit our featured exhibitor booths. Browse and engage with our exhibitors! Enjoy your visit!</p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="setShowQialog()">Get Started</el-button>
			</span>
        </el-dialog>

		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img src="/assets/images/vcc/EXHIBIT_HALL_BREAKOUT.jpg" alt="">
				<NuxtLink to="/virtual-convention-center/exhibit-hall/platinum" class="platinum">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/gold" class="gold">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/silver" class="silver">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze" class="bronze">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<NuxtLink to="/virtual-convention-center/lobby">
				Back to<br><span>Main Lobby</span>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
export default {
	middleware: "auth",
	layout: "vcc",
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
			is_dialogVisible: true
		};
  	},
	beforeDestroy(){
		this.logoutDelegateAttendance()
	},
	methods: {
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
		handleClose(){},
		setShowQialog(){
			sessionStorage.setItem('is_showdialog', false);
			this.is_dialogVisible = false;
		},
		dialogVisible(){
			if(sessionStorage.getItem('is_showdialog') === "false"){
				this.is_dialogVisible = false;
			}
		},
	},
	mounted() {
		this.getUser()
		this.dialogVisible()
	},
};
</script>
<style lang="scss" scoped>

::v-deep .el-dialog {
    background-color: #ffffff;
    height: auto;
    text-align: center;
    max-width: 1035px;
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    .el-dialog__header {
        background-color: #4F9D5C;
        margin: 0;
        padding: 5px;
        .el-dialog__headerbtn {
            display: none;
        }
        .el-dialog__title {
            font-size: 1.6rem;
            text-transform: uppercase;
            font-weight: 700;
            color: #ffffff;
        }
    }
    .el-dialog__body {
        padding: 20px;
        font-size: 1rem;
        color: #000000;
		h3 {
			font-weight: 700;
		}
		p {
			line-height: normal;
			word-break: break-word;
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

	.vcc-banner-img {
		position: relative;
		img {
			max-width: 100%;
		}
		.platinum,
		.gold,
		.silver,
		.bronze {
			position: absolute;
		}
	}
	.vcc-switch-btn, .vcc-switch-btn-360 {
		padding: 50px 0;
		background: url(/assets/comm-lines-web.png) no-repeat center center;
		text-align: center;
		background-size: contain;
	}
	.vcc-switch-btn a, .vcc-switch-btn-360 a {
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
	}
	.vcc-switch-btn a span, .vcc-switch-btn-360 a span {
		font-weight: 700;
		font-size: 25px;
	}
	.vcc-banner-img > a > img {
		max-width: 50px;
		margin: 0 auto;
	}
	.vcc-360-view img{
		width: 100%;
		height: 700px;
	}
	.vcc-banner-img > a {
		font-size: 3rem;
		color: #ffffff;
		opacity: 0.9;
		width: 90px;
		display: block;
		text-align: center;
		text-decoration: none;
		transition: all 0.5s ease;
		animation: pulse 1s infinite;
	}
	.vcc-banner-img > a span {
		display: block;
		text-transform: uppercase;
		font-size: 0.9rem;
		font-weight: 700;
		visibility: hidden;
	}
	.vcc-banner-img > a:hover {
		opacity: 1;
	}
	.vcc-banner-img > a:hover span {
		visibility: visible;
	}
	.vcc-banner-img > a.platinum {
		top: 51%;
		left: 13.9%;
    }
	.vcc-banner-img > a.gold {
		top: 51%;
		left: 35.9%;
    }
	.vcc-banner-img > a.silver {
		top: 51%;
		left: 58%;
    }
	.vcc-banner-img > a.bronze {
		top: 51%;
		left: 80.2%;
    }
	@keyframes pulse {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, -13px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
	@media screen and (min-width:1201px){
		.vcc-360-view img {
			width: 100%;
			height: 100%;
		}
	}
	@media screen and (min-width:913px) and (max-width:1200px){
		.vcc-banner-img > a > img {
			max-width: 38px;
		}
		.vcc-360-view img {
			width: 100%;
			height: 100%;
		}
		.vcc-banner-img > a.platinum {
			top: 49%;
			left: 12.5%;
			font-size: 2.5rem;
        }
		.vcc-banner-img > a.gold {
			top: 49%;
			left: 34.5%;
			font-size: 2.5rem;
        }
		.vcc-banner-img > a.silver {
			top: 49%;
			left: 56.6%;
			font-size: 2.5rem;
        }
		.vcc-banner-img > a.bronze {
			top: 49%;
			left: 78.7%;
			font-size: 2.5rem;
        }
	}
	@media screen and (min-width:768px) and (max-width:912px){
		.vcc-360-view img{
			width: 100%;
			height: 100%;
		}
		.vcc-banner-img > a > img {
			max-width: 26px;
		}
		.vcc-banner-img > a.platinum {
			top: 49%;
			left: 11.4%;
			font-size: 2.2rem;
        }
		.vcc-banner-img > a.gold {
			top: 49%;
			left: 33.4%;
			font-size: 2.2rem;
        }
		.vcc-banner-img > a.silver {
			top: 49%;
			left: 55.4%;
			font-size: 2.2rem;
        }
		.vcc-banner-img > a.bronze {
			top: 49%;
			left: 77.6%;
			font-size: 2.2rem;
        }
	}
	@media screen and (min-width:545px) and (max-width:767px){
		.vcc-banner-img > a > img {
			max-width: 26px;
		}
		.vcc-banner-img > a.platinum {
			top: 49%;
			left: 9.7%;
			font-size: 2rem;
        }
		.vcc-banner-img > a.gold {
			top: 49%;
			left: 31.7%;
			font-size: 2rem;
        }
		.vcc-banner-img > a.silver {
			top: 49%;
			left: 53.8%;
			font-size: 2rem;
        }
		.vcc-banner-img > a.bronze {
			top: 49%;
			left: 75.9%;
			font-size: 2rem;
        }

	}
	@media screen and (min-width:451px) and (max-width:544px){
		.vcc-360-view img{
			width: 100%;
			height: 100%;
		}
		.vcc-banner-img > a > img {
			max-width: 20px;
		}
		.vcc-banner-img > a.platinum {
			top: 48%;
			left: 7.5%;
			font-size: 1.7rem;
        }
		.vcc-banner-img > a.gold {
			top: 48%;
			left: 29.6%;
			font-size: 1.7rem;
        }
		.vcc-banner-img > a.silver {
			top: 48%;
			left: 51.6%;
			font-size: 1.7rem;
        }
		.vcc-banner-img > a.bronze {
			top: 48%;
			left: 73.8%;
			font-size: 1.7rem;
        }
	}
	@media screen and (max-width:450px){
        .vcc-banner-img > a.platinum {
			top: 47%;
			left: 5%;
			font-size: 1.5rem;
        }
		.vcc-banner-img > a > img {
			max-width: 20px;
		}
		.vcc-banner-img > a.gold {
			top: 47%;
			left: 26.9%;
			font-size: 1.5rem;
        }
		.vcc-banner-img > a.silver {
			top: 47%;
			left: 49%;
			font-size: 1.5rem;
        }
		.vcc-banner-img > a.bronze {
			top: 47%;
			left: 71.2%;
			font-size: 1.5rem;
        }
    }
	@media screen and (max-width: 285px) {//update 07-05
		.vcc-switch-btn a, .vcc-switch-btn-360 a {
			max-width: 220px;
	}
		.vcc-switch-btn a span, .vcc-switch-btn-360 a span {
			font-weight: 600;
			font-size: 20px;
		}
	}//end update

</style>
