<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img src="/assets/images/vcc/GOLD-3 VEX.jpg" alt="">
				<NuxtLink to="/virtual-convention-center/exhibit-hall/gold/creative-skin" class="platinum-pin-1"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/gold/johnson-johnson" class="platinum-pin-2"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/gold/zuellig-pharma" class="platinum-pin-3"></NuxtLink>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<NuxtLink to="/virtual-convention-center/exhibit-hall">
				Back to<br><span>Exhibitors Hall</span>
			</NuxtLink>
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
		};
	},
	beforeDestroy(){
		sessionStorage.removeItem('reload', false);
		this.logoutDelegateAttendance()
	},
	methods:{
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
	},
  	mounted(){
		this.getUser()
  	},
};
</script>
<style lang="scss" scoped>
	.vcc-banner-img {
		position: relative;
		img {
			max-width: 100%;
			width: 100vw;
		}
		a {
			position: absolute;
			width: 6.2%;
			height: 11%;
			border-radius: 50%;
			border: 2px solid #00ccff;
			animation-name: blinking;
			animation-duration: 1s;
			animation-iteration-count: 100;
			&:hover {
				border-width: 3px;
			}
			&.platinum-pin-1 {
				top: 37.1%;
				left: 24.6%;
			}
			&.platinum-pin-2 {
				top: 37.1%;
				left: 47%;
			}
			&.platinum-pin-3 {
				top: 37.1%;
				left: 70.6%;
			}
		}
	}
	@keyframes blinking {
		50% {
			border-color: #d400d4;
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
	@media screen and (max-width: 285px) {//update 07-06
		.vcc-switch-btn a, .vcc-switch-btn-360 a {
			max-width: 220px;
	}
		.vcc-switch-btn a span, .vcc-switch-btn-360 a span {
			font-weight: 600;
			font-size: 19px;
		}
	}//end update
</style>
