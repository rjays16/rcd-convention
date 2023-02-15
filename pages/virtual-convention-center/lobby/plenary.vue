<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img src="/assets/images/vcc/PLENARY_HALL.jpg" alt="">
				<div class="vcc-vimeo-container">
					<iframe src="https://vimeo.com/event/2243155/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<NuxtLink to="/virtual-convention-center/lobby">
				Back to<br><span>Main Lobby</span>
			</NuxtLink>
		</div>

		<div class="container">
			<!-- Plenary tabs -->
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<li class="nav-item" role="presentation">
					<button class="nav-link orange active" id="plenary-one-tab" data-bs-toggle="tab"
						type="button" role="tab" aria-selected="true"
						@click="getPlenaryEvents('2022-10-26')">
						<span class="tab-head-main gwendolyn-bold">Reconnaissance</span>
						<span class="tab-head-second">Day 1: October 26, 2022 (Wednesday)</span>
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link yellow" id="plenary-two-tab" data-bs-toggle="tab"
						type="button" role="tab" aria-selected="false"
						@click="getPlenaryEvents('2022-10-27')">
						<span class="tab-head-main gwendolyn-bold">Controversies</span>
						<span class="tab-head-second">DAY 2: October 27, 2022 (Thursday)</span>
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button class="nav-link blue" id="plenary-three-tab" data-bs-toggle="tab"
						type="button" role="tab" aria-selected="false"
						@click="getPlenaryEvents('2022-10-28')">
						<span class="tab-head-main gwendolyn-bold">Dialogues in Dermatology</span>
						<span class="tab-head-second">DAY 3: October 28, 2022 (Friday)</span>
					</button>
				</li>
			</ul>
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane fade show active" role="tabpanel" v-loading="is_loading">
					<div class="vcc-program" v-for="(event, index) in plenary_events" :key="index">
						<h4 :class="event.header_color != null && event.header_color != 'black' ? event.header_color : ''">
							{{ event.title }}
						</h4>
						<div class="vcc-program-time">
							<ul>
								<li v-html="event.speaker_description"></li>
							</ul>
							<span>{{ formatTime(event.starts_at, "hh:mm A") }} to {{ formatTime(event.ends_at, "hh:mm A") }}</span>
							<!-- {{ Moment(event.ends_at, "HH:mm:ss").format("hh:mm A") -->
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CHAT iframe -->
		<div class="chat-box corner-rounded">
			<div class="col-12 pr-0 text-right clickable bg-primary corner-rounded" @click="toggleChat">
				<div class="row px-0">
					<div class="col-10 text-left">
						<h5 class="mt-2 ps-2 text-white">
							Chat
						</h5>
					</div>
				</div>
			</div>
			<div class="vimeo-chat-container" :class="chat_is_opened ? '' : 'd-none'">
				<iframe src="https://vimeo.com/event/2243155/chat/" width="100%" height="100%" frameborder="0" id="chatFrame"></iframe>
			</div>
		</div>		
	</section>
</template>

<script>
import moment from 'moment';
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

			is_loading: true,
			date: "2022-10-26",
			plenary_events: [],

			chat_is_opened: true
		};
  	},
	beforeRouteLeave(to, from, next) {
		this.$confirm("If you leave now, your estimated stay duration may affect the reporting of your attendance to the current session. Are you sure you want to leave?", {
			dangerouslyUseHTMLString: true,
			cancelButtonText: 'Stay',
			confirmButtonText: 'Leave',
			type: 'warning',
		})
		.then(() => {
			sessionStorage.removeItem('reload');
			this.logoutDelegateAttendance()
			next()
		}).catch(() => {
		    next(false)
		})
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
			console.log(sessionStorage.getItem('reload'))
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
		formatTime(time, format) {
			return moment(time, "HH:mm:ss").format(format)
		},
		getPlenaryEvents(date_event) {
			this.date = date_event

			this.is_loading = true
			this.$store.dispatch("vcc/getPlenaryEvents", this.date)
            .then(res => {
				this.plenary_events = res.data
				this.is_loading = false
            })
            .catch(err => {
				console.error(err)
				this.$message.error(err)
				this.is_loading = false
            })
		},
		toggleChat() {
			this.chat_is_opened = !this.chat_is_opened
		}
	},
	mounted(){
		this.getUser()
		window.addEventListener('beforeunload', function (e) {
            e.returnValue = 'msg';
        });
	},
	async fetch() {
		this.getPlenaryEvents(this.date)
	}
};
</script>
<style lang="scss" scoped>
	.nav.nav-tabs {
		justify-content: space-between;
		border: none;
	}
	.nav-tabs .nav-link.active {
		border: 2px solid #ffffff;
	}
	.nav.nav-tabs .nav-item button {
		background: url('/assets/images/small-weave.png') right center repeat-y;
		border-radius: 10px;
		color: #000000;
		padding: 10px;
		box-shadow: 0 3px 3px rgba(0,0,0,0.3);
		max-width: 400px;
		width: 100%;

	}
	.nav.nav-tabs .nav-item button.orange {
		background-color: #ff7500;
	}
	.nav.nav-tabs .nav-item button.yellow {
		background-color: #fab623;
	}
	.nav.nav-tabs .nav-item button.blue {
		background-color: #0776bc;
	}
	.nav.nav-tabs .nav-item button span {
		display: block;
	}
	.tab-head-main.gwendolyn-bold {
		font-size: 2.2rem;
		line-height: 2.5rem;
	}
	.tab-head-second {
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.8rem;
	}
	.tab-content {
		padding: 40px 0;
	}
	.nav-item {
		flex: 1;
		display: flex;
	}
	.nav-item:nth-child(2) {
		justify-content: center;
	}
	.nav-item:last-child {
		justify-content: flex-end;
	}
	.vcc-program {
		border-radius: 10px;
		box-shadow: 0 3px 3px rgba(0,0,0,0.3);
		overflow: hidden;
		margin: 0 0 20px;
	}
	.vcc-program h4 {
		display: block;
		background-color: #000000;
		color: #ffffff;
		text-transform: uppercase;
		font-weight: 700;
		padding: 12px 20px;
		font-size: 1.3rem;
		margin: 0;
	}
	.vcc-program h4.orange {
		background-color: #FF7500;
	}
	.vcc-program h4.blue {
		background-color: #065E99;
	}
	.vcc-program-time {
		display: flex;
		justify-content: space-between;
		padding: 10px 30px;
		font-size: 1.3rem;
		font-weight: 700;
		color: #000;
	}
	.vcc-program-time ul {
		margin: 0;
		padding: 0;
		list-style-position: inside;
		text-transform: uppercase;
	}

	.vcc-banner-img {
		position: relative;
		img {
			max-width: 100%;
            display: block;
		}
	}
	.vcc-switch-btn,
    .vcc-switch-btn-360 {
		padding: 50px 0;
		background: url(/assets/comm-lines-web.png) no-repeat center center;
		text-align: center;
		background-size: contain;
	}
	.vcc-switch-btn a,
    .vcc-switch-btn-360 a {
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
	}
	.vcc-switch-btn a span,
    .vcc-switch-btn-360 a span {
		font-weight: 700;
		font-size: 25px;
	}
	.vcc-vimeo-container {
		position: absolute;
		top: 15.8%;
		left: 0;
		width: 62.3%;
		height: 61.8%;
		margin: 0 auto;
		right: 0;
	}
	.vcc-vimeo-container iframe {
		width: 100%;
		height: 100%;
	}
	.chat-box {
		position: fixed;
		right: 7%;
		bottom: 0%;
		background: #fff;
		z-index: 5;
		width: 320px;
	}
	.vimeo-chat-container {
		padding: 0px 10px;
		max-width: 340px;
		display: flex;
		flex-direction: column;
		height: 450px;
	}
	@media screen and (max-width: 1399px) {
		.nav-item {
			margin-right: 20px;
		}
		.nav-item:last-child {
			margin-right: 0;
		}

	}
	@media screen and (max-width: 1199px) {

		.tab-head-main.gwendolyn-bold {
			font-size: 1.5rem;
			line-height: 2rem;
		}
		.tab-head-second {
			letter-spacing: -1px;
		}

	}
	@media screen and (max-width: 991px) {
		.nav.nav-tabs .nav-item button {
			background-position: 110% center;
			padding: 5px;
		}
		.tab-head-main.gwendolyn-bold {
			font-size: .7rem !important;
			line-height: 1rem;
			font-family: "Source Sans Pro", sans-serif !important;
			font-weight: 700;
			text-transform: uppercase;
		}
		.tab-head-second {
			font-size: .7rem !important;
			line-height: normal;
		}
		.vcc-program h4 {
			font-size: 1.1rem;
		}
		.vcc-program-time {
			font-size: 1rem;
		}

	}
	@media screen and (max-width: 767px) {

		.nav.nav-tabs .nav-item button {
			background-position: 120% center;
		}
		.vcc-program-time {
			ul{
				list-style-type: none;
				width: 50%;
			}
			span {
				width: 30%;
			}
		}
	}
	@media screen and (max-width: 550px) {

		.nav.nav-tabs {
			flex-direction: column;
		}
		.nav-item {
			margin-right: 0;
			justify-content: center;
			margin-bottom: 10px;
		}
		.nav-item:last-child {
			justify-content: center;
		}
		.vcc-program h4 {
			font-size: 0.8rem;
		}
		.vcc-program-time {
			font-size: 0.8rem;
		}
		.nav.nav-tabs .nav-item button {
			background-position: 104% center;
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
