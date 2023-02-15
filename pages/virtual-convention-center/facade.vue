<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img" v-if="!show_360_view">
				<div class="lobby-left" v-if="show_left_slide">
					<img src="/assets/images/vcc/MANILA_BAY_VIEW.jpg" alt="">
					<a href="#" class="arrow-right" @click="slideLeftToFront()" v-if="show_left_slide"><i class="fa-solid fa-circle-right"></i></a>
				</div>
				<div class="lobby-front" v-if="show_front_slide">
					<img src="/assets/images/vcc/EXTERIOR-sunset.jpg" alt="">
					<a href="#" class="arrow-right" @click="slideFrontToRight()" v-if="show_front_slide"><i class="fa-solid fa-circle-right"></i></a>
					<a href="#" class="arrow-left" @click="slideFrontToLeft()" v-if="show_front_slide"><i class="fa-solid fa-circle-left"></i></a>
					<NuxtLink to="/virtual-convention-center/lobby" class="lobby-link">
						<!-- <i class="fa-solid fa-location-dot"></i> -->
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
				</div>
				<div class="lobby-right" v-if="show_right_slide">
					<img src="/assets/images/vcc/BILLBOARD_VIEW.jpg" alt="">
					<a href="#" class="arrow-left d-none" @click="slideRightToFront()" id="slideRightToFront"><i class="fa-solid fa-circle-left"></i></a>
					<a href="#" class="arrow-left" @click="slideRightToFront()" id="slideFrontToLeft"><i class="fa-solid fa-circle-left"></i></a>
					<div class="billboard-box">
						<iframe src="https://player.vimeo.com/video/694282347?h=dee28b2946" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
			</div>
			<div class="vcc-360-view" v-else>
				<iframe width="100%" height="640" style="width: 100%; height: 640px; border: none; max-width: 100%;" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7vDpj?logo=-1&info=0&fs=1&vr=1&zoom=1&autorotate=0.08&thumbs=-1&margin=3&alpha=0.84&ovd=virtualmediaevents.viewin360.co"></iframe>
			</div>
		</div>
		<div class="vcc-switch-btn" @click="toggle360View()">
			<a class="clickable">
				Switch to<br>
				<span v-if="!show_360_view">360&#176; Tour View</span>
				<span v-else>3D Tour View</span>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	middleware: "auth",
	layout: "vcc",
	data() {
		return {
			log: {
				convention_member_id: null,
				url: this.$nuxt.$route.path,
				is_login: false,
				is_logout: false,
			},
			user: {},
			is_reloaded: false,
			show_360_view: false,
			show_right_slide: false,
			show_front_slide: true,
			show_left_slide: false,
		};
  	},
	beforeDestroy(){
		sessionStorage.removeItem('reload');
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
		toggle360View() {
			this.show_360_view = !this.show_360_view
		},
		slideFrontToRight() {
			this.show_right_slide = true
			this.show_front_slide = false
			this.show_left_slide = false
		},
		slideFrontToLeft() {
			this.show_right_slide = false
			this.show_front_slide = false
			this.show_left_slide = true
		},
		slideRightToFront() {
			this.show_right_slide = false
			this.show_front_slide = true
			this.show_left_slide = false
		},
		slideLeftToFront() {
			this.show_right_slide = false
			this.show_front_slide = true
			this.show_left_slide = false
		},
	},
	mounted() {
		this.getUser()
	},
};
</script>
<style lang="scss" scoped>
	.billboard-box {
		position: absolute;
		left: 1.5%;
		width: 50.5%;
		height: 50.5%;
		margin: 0 auto;
		right: 0;
		top: 21.4%;
	}
	.billboard-box iframe {
		width: 100%;
		height: 100%;
	}
	.lobby-front {
		position: relative;
	}
	.lobby-right {
		position: relative;
	}
	.lobby-left {
		position: relative;
	}
	.arrow-right {
		position: absolute;
		bottom: 50%;
		font-size: 70px;
		display: block;
		color: #ff7500;
		animation: pulse-right 1s infinite;
		opacity: 1;
	}
	.arrow-left {
		position: absolute;
		bottom: 50%;
		font-size: 70px;
		display: block;
		color: #ff7500;
		animation: pulse-left 1s infinite;
		opacity: 1;
	}

	.vcc-banner-img {
		position: relative;
	}
	.vcc-banner-img a.lobby-link {
		position: absolute;
		color: #ffffff;
		opacity: 0.9;
		width: 6%;
		display: block;
		text-align: center;
		text-decoration: none;
		transition: all 0.5s ease;
		animation: pulse 1s infinite;
	}
	.vcc-banner-img a.lobby-link span {
		display: block;
		text-transform: uppercase;
		font-size: 1vw;
		font-weight: 700;
		visibility: hidden;
	}
	.vcc-banner-img a.lobby-link:hover {
		opacity: 1;
	}
	.vcc-banner-img a.lobby-link:hover span {
		visibility: visible;
	}
	.vcc-banner-img a.lobby-link {
		bottom: 14%;
		right: 24%;
	}
	.vcc-banner-img img {
		max-width: 100%;
		display: block;
		width: 100%;
	}
	.vcc-banner-img a.lobby-link > img {
		max-width: 50%;
		margin: 0 auto;
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

	.vcc-360-view img{
		width: 100%;
		height: 700px;
	}
	.vcc-360-view iframe {
		height: 900px !important;
	}
	@keyframes pulse-right {
		0% {
			right: 70px;
		}
		100% {
			right: 60px;
		}
	}
	@keyframes pulse-left {
		0% {
			left: 70px;
		}
		100% {
			left: 60px;
		}
	}
	@keyframes pulse {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, -9%);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@media screen and (max-width:1200px){
		.vcc-banner-img > a.lobby-link {
			bottom: 13%;
			right: 23%;
		}
	}
	@media screen and (max-width: 1150px) {
		.vcc-360-view iframe {
			height: 650px !important;
		}
	}
	@media screen and (max-width: 920px) {
		.vcc-banner-img > a.lobby-link {
			bottom: 12%;
			right: 22%;
		}
	}
	@media screen and (max-width: 767px) {
		.vcc-360-view img{
			width: 100%;
			height: 100%;
		}
		.vcc-360-view iframe {
			height: 430px !important;
		}
		.vcc-banner-img > a.lobby-link {
			bottom: 11%;
			right: 21%;
			font-size: 2rem;
		}
		.arrow-left, .arrow-right {
			margin-bottom: -30px;
			font-size: 40px;
		}
		@keyframes pulse-right {
			0% {
				right: 25px;
			}
			100% {
				right: 20px;
			}
		}
		@keyframes pulse-left {
			0% {
				left: 25px;
			}
			100% {
				left: 20px;
			}
		}
	}
	@media screen and (max-width: 560px) {
		.vcc-banner-img > a.lobby-link {
			bottom: 9%;
			right: 19%;
		}
	}
	@media screen and (max-width: 480px) {
		.vcc-360-view iframe {
			height: 270px !important;
		}
		.vcc-banner-img > a.lobby-link {
			bottom: 8%;
			right: 17%;
		}
	}
	@media screen and (max-width: 400px) {
		.vcc-banner-img > a.lobby-link {
			bottom: 7%;
			right: 16%;
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
