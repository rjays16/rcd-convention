<template>
	<section>
		<VCCPreLoader />
		<el-dialog
			:visible.sync="showDialog"
			class="desk-modal"
			:before-close="closeDialog">
			<div class="resource-item desk">
				<iframe width="100%" height="640" style="width: 100%; height: 640px; border: none; max-width: 100%;" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7vSxL?logo=-1&info=0&fs=1&vr=1&gyro=0&autorotate=0.08&thumbs=-1&margin=3&alpha=0.84&keys=0&ovd=virtualmediaevents.viewin360.co"></iframe>
			</div>
		</el-dialog>
		<div class="vcc-banner-container">
			<div class="vcc-banner-img position-relative">
				<div class="lobby-front">
					<img src="/assets/images/vcc/LOBBY_FRONT.jpg" alt="">
					<a href="#" class="arrow-right"><i class="fa-solid fa-circle-right"></i></a>
					<NuxtLink to="/virtual-convention-center/lobby/plenary" class="pin plenary-hall-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
					<NuxtLink to="/virtual-convention-center/lobby/research-hall" class="pin research-hall-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
					<NuxtLink to="/virtual-convention-center/lobby/workshops" class="pin workshops-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
					<NuxtLink to="/virtual-convention-center/lobby/symposia" class="pin symposia-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
					<a href="#" @click="showDialog = true" class="pin desk-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</a>

					<!-- Messenger Chat Plugin Code -->
					<div id="fb-root" class="fb-button"></div>
				</div>
				<div class="lobby-right" style="display: none;">
					<img src="/assets/images/vcc/LOBBY_RIGHT.jpg" alt="">
					<a href="#" class="arrow-left"><i class="fa-solid fa-circle-left"></i></a>
					<NuxtLink to="/virtual-convention-center/exhibit-hall" class="pin exhibit-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
					<NuxtLink to="/virtual-convention-center/lobby/industry-lectures" class="pin industry-lectures-link">
						<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
						<span>Enter Here</span>
					</NuxtLink>
				</div>
				<div class="fb-con corner-pill bg-065E99 text-white clickable d-none">
					<i class="fas fa-comment d-inline icon"></i>
					<p class="text-uppercase label fw-bold mb-0">Chat with us here</p>
				</div>
			</div>
			<div class="vcc-360-view" style="display: none;">
				<iframe width="100%" height="640" style="width: 100%; height: 640px; border: none; max-width: 100%;" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7vFMt?logo=-1&info=0&fs=1&vr=1&zoom=1&autorotate=0.08&thumbs=-1&margin=3&alpha=0.84&ovd=virtualmediaevents.viewin360.co"></iframe>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<a href="#">Switch to<br><span>360&#176; Tour View</span></a>
		</div>
		<div class="vcc-switch-btn-360" style="display: none;">
			<a href="#">Switch to<br><span>3D Tour View</span></a>
		</div>


		<!-- Your Chat Plugin code -->
		<!-- minimized="false" -->
		<div id="fb-customer-chat" class="fb-customerchat" minimized="false">
		</div>
	</section>
</template>

<script>
import $ from 'jquery'
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
			showDialog: false,
		}
	},
	beforeRouteLeave(to, from, next) {
		sessionStorage.removeItem('reload');
		this.logoutDelegateAttendance()
		next()
	},
	methods: {
		embedFB() {
			var chatbox = document.getElementById('fb-customer-chat');
			chatbox.setAttribute("page_id", "101299178716731");
			chatbox.setAttribute("attribution", "biz_inbox");

			window.fbAsyncInit = function() {
				FB.init({
					xfbml : true,
					version : 'v13.0'
				});
			};

			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

			// $('.fb_dialog_advanced .fb_dialog_content iframe').contents().find('._94ve').click()
			// $('iframe[name="blank_f5115999ba6bf"]').contents().find('#facebook').click()
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
		closeDialog() {
            this.showDialog = false
        }
	},
	mounted(){
		this.getUser()
		this.embedFB()
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
		$( ".arrow-right" ).click(function() {
			$(".lobby-front").fadeOut(500, function() {
				// Animation complete.
			});
			$(".fb-button").fadeOut(500, function() {
				// Animation complete.
			});
			$(".lobby-right").fadeIn(500, function() {
				// Animation complete.
			});
		});
		$( ".arrow-left" ).click(function() {
			$(".lobby-front").fadeIn(500, function() {
				// Animation complete.
			});
			$(".fb-button").fadeIn(500, function() {
				// Animation complete.
			});
			$(".lobby-right").fadeOut(500, function() {
				// Animation complete.
			});
		});
	},
};
</script>
<style lang="scss">
	.fb_dialog {
		position: relative!important;
		background: none!important;
		overflow: visible!important;
	}
	.fb_dialog_advanced {
		top: 0%!important;
		left: 0%;
		background: none;
		padding: 0px!important;
	}
	.fb_dialog_content {
		position: absolute;
		right: 0%;
		background: none;
	}
	.fb_dialog_content iframe {
		bottom: 45px!important;
    	right: 125px!important;
	}
	.fb_reset {
		background: none;
		> div {
			overflow: visible;
		}
		.fb_iframe_widget iframe{
			right: 1em !important;
			bottom: 1.5em;
		}
	}
	@media screen and (max-width: 915px) {
		.fb_dialog_content iframe {
			bottom: 4em !important;
			right: 8em !important;
		}
	}
	@media screen and (max-width: 768px) {
		.fb_dialog_content iframe {
			bottom: 4em !important;
			right: 7em !important;
		}
	}
	@media screen and (max-width: 415px) {
		.fb_dialog_content iframe {
			bottom: 4em !important;
			right: 8em !important;
		}
	}
	@media screen and (max-width: 376px) {
		.fb_dialog_content iframe {
			bottom: 3em !important;
			right: 6em !important;
		}
	}

</style>
<style lang="scss" scoped>
	.desk-modal {
		&::v-deep .el-dialog {
			background-color: #ffffff;
			text-align: center;
			border-radius: 0;
			box-shadow: none;
			overflow: visible;
			width: 70%;
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
				.resource-item.desk {
					height: 100%;
					iframe {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
	}
	.fb-con {
		position: absolute;
		bottom: 17%;
		left: 25%;
		font-size: 2.5rem;
		line-height: 0.5;
		text-align: center;
		padding: 8px 48px;
		.icon {
			position: absolute;
			left: 17px;
		}
		.label {
			font-size: 1.3rem;
			position: relative;
			left: 20px;
			width: 124px;
			line-height: 0.9;
		}
		::v-deep .fb_iframe_widget iframe{
			left: 0;
		}
	}
	.fb-customer-chat::v-deep .fb_iframe_widget iframe{
		left: 0 !important;
	}

	.lobby-front {
		position: relative;
	}
	.lobby-front .arrow-right {
		position: absolute;
		bottom: 50%;
		font-size: 70px;
		display: block;
		color: #ff7500;
		animation: pulse-right 1s infinite;
		opacity: 1;
	}
	.lobby-right {
		position: relative;
	}
	.lobby-right .arrow-left {
		position: absolute;
		bottom: 50%;
		font-size: 70px;
		display: block;
		color: #ff7500;
		animation: pulse-left 1s infinite;
		opacity: 1;
	}
	.vcc-banner-img img {
		max-width: 100%;
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

	.lobby-front > a.pin,
	.lobby-right > a.pin {
		position: absolute;
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
	.lobby-front > a.pin > img,
	.lobby-right > a.pin > img {
		max-width: 50px;
		margin: 0 auto;
	}
	.lobby-front > a.pin span,
	.lobby-right > a.pin span {
		display: block;
		text-transform: uppercase;
		font-size: 0.9rem;
		font-weight: 700;
		visibility: hidden;
	}
	.lobby-front > a.pin:hover,
	.lobby-right > a.pin:hover {
		opacity: 1;
	}
	.lobby-front > a.pin:hover span,
	.lobby-right > a.pin:hover span {
		visibility: visible;
	}

	.lobby-front > a.pin.plenary-hall-link {
		top: 41%;
		left: 47.3%;
	}
	.lobby-front > a.pin.workshops-link {
		top: 66.4%;
		left: 32.3%;
	}
	.lobby-front > a.pin.research-hall-link {
		top: 66.4%;
		left: 47.3%;
	}
	.lobby-front > a.pin.symposia-link {
		top: 66.4%;
		left: 62.4%;
	}
	.lobby-front > a.pin.desk-link {
		top: 74%;
		left: 10%;
	}
	.lobby-right > a.pin.exhibit-link {
		top: 31.4%;
		left: 26%;
	}
	.lobby-right > a.pin.industry-lectures-link {
		top: 31.4%;
		left: 66.1%;
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
			transform: translate(0, -13px);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	@media screen and (max-width: 1200px) {
		.resource-item.desk iframe {
			height: 500px !important;
		}
		.lobby-front > a.pin > img,
		.lobby-right > a.pin > img {
			max-width: 38px;
		}
		.lobby-right .arrow-left,
		.lobby-front .arrow-right {
			font-size: 50px;
		}
		.lobby-front > a.pin.plenary-hall-link {
			top: 39%;
			left: 46.3%;
		}
		.lobby-front > a.pin.workshops-link {
			top: 63.9%;
			left: 31.2%;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 63.9%;
			left: 46.3%;
		}
		.lobby-front > a.pin.symposia-link {
			top: 63.9%;
			left: 61.2%;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 28.4%;
			left: 24.7%;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 28.4%;
			left: 64.7%;
		}
	}
	@media screen and (max-width: 1150px) {
		.vcc-360-view iframe {
			height: 650px !important;
		}
	}
	@media screen and (max-width: 920px) {
		.resource-item.desk iframe {
			height: 400px !important;
		}
		.lobby-front > a.pin > img,
		.lobby-right > a.pin > img {
			max-width: 26px;
		}
		.lobby-front > a.pin.plenary-hall-link {
			top: 40%;
			left: 45%;
			font-size: 2rem;
		}
		.lobby-front > a.pin.workshops-link {
			top: 64.7%;
			left: 29.9%;
			font-size: 2rem;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 64.7%;
			left: 45%;
			font-size: 2rem;
		}
		.lobby-front > a.pin.symposia-link {
			top: 64.7%;
			left: 60%;
			font-size: 2rem;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
			font-size: 2rem;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 29.4%;
			left: 23.6%;
			font-size: 2rem;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 29.4%;
			left: 63.7%;
			font-size: 2rem;
		}
		.fb_iframe_widget iframe{
			bottom: 0 !important;
			right: 0 !important;
		}
	}
	@media screen and (max-width: 767px) {
		.resource-item.desk iframe {
			height: 320px !important;
		}
		.lobby-right .arrow-left,
		.lobby-front .arrow-right {
			font-size: 30px;
		}
		.vcc-360-view img{
			width: 100%;
			height: 100%;
		}
		.vcc-360-view iframe {
			height: 430px !important;
		}
		.lobby-front > a.pin.plenary-hall-link {
			top: 38%;
			left: 44%;
		}
		.lobby-front > a.pin.workshops-link {
			top: 63.4%;
			left: 29.1%;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 63.4%;
			left: 44%;
		}
		.lobby-front > a.pin.symposia-link {
			top: 63.4%;
			left: 59%;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 29.4%;
			left: 22.6%;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 29.4%;
			left: 62.7%;
		}

		.fb_iframe_widget iframe{
			bottom: 0 !important;
			right: 0 !important;
		}
		.fb_dialog_content iframe{
			top: 14em;
			left: 0;
		}
	}
	@media screen and (max-width: 560px) {
		.lobby-front > a.pin > img,
		.lobby-right > a.pin > img {
			max-width: 20px;
		}
		.lobby-front > a.pin.plenary-hall-link {
			top: 38%;
			left: 42%;
			font-size: 1.5rem;
		}
		.lobby-front > a.pin.workshops-link {
			top: 63.4%;
			left: 27%;
			font-size: 1.5rem;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 63.4%;
			left: 42%;
			font-size: 1.5rem;
		}
		.lobby-front > a.pin.symposia-link {
			top: 63.4%;
			left: 57%;
			font-size: 1.5rem;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
			font-size: 1.5rem;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 28.4%;
			left: 20.6%;
			font-size: 1.5rem;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 28.4%;
			left: 60.6%;
			font-size: 1.5rem;
		}

		.fb_iframe_widget iframe{
			left: 0 !important;
		}

		.fb_dialog_content iframe{
			top: 14em;
			left: 0;
		}
	}
	@media screen and (max-width: 480px) {
		.resource-item.desk iframe {
			height: 200px !important;
		}
		.lobby-right .arrow-left,
		.lobby-front .arrow-right {
			font-size: 25px;
		}
		.vcc-360-view iframe {
			height: 270px !important;
		}
		.lobby-front > a.pin.plenary-hall-link {
			top: 37%;
			left: 40.4%;
		}
		.lobby-front > a.pin.workshops-link {
			top: 62.4%;
			left: 25.5%;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 62.4%;
			left: 40.4%;
		}
		.lobby-front > a.pin.symposia-link {
			top: 62.4%;
			left: 55.4%;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 27.4%;
			left: 19.2%;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 27.4%;
			left: 59.1%;
		}
	}
	@media screen and (max-width: 400px) {
		.lobby-front > a.pin.plenary-hall-link {
			top: 35%;
			left: 38.5%;
		}
		.lobby-front > a.pin.workshops-link {
			top: 60.4%;
			left: 23.5%;
		}
		.lobby-front > a.pin.research-hall-link {
			top: 60.4%;
			left: 38.5%;
		}
		.lobby-front > a.pin.symposia-link {
			top: 60.4%;
			left: 53.7%;
		}
		.lobby-front > a.pin.desk-link {
			top: 74%;
			left: 10%;
		}
		.lobby-right > a.pin.exhibit-link {
			top: 25.4%;
  			left: 17.6%;
		}
		.lobby-right > a.pin.industry-lectures-link {
			top: 25.4%;
  			left: 57.5%;
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
