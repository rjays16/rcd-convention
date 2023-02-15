<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img src="/assets/images/vcc/BRONZE-14 VEX.jpg" alt="">
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/eon-pharmatex" class="bronze-pin-1"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/aj-research" class="bronze-pin-2"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/calee" class="bronze-pin-3"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/pharma-galenx" class="bronze-pin-4"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/hovid" class="bronze-pin-5"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/dreamax-healthcare" class="bronze-pin-6"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/stada" class="bronze-pin-7"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/medev" class="bronze-pin-8"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/dermskin" class="bronze-pin-9"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/mega-life" class="bronze-pin-10"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/metro-pharma" class="bronze-pin-11"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/curatio" class="bronze-pin-12"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/skin-medicine" class="bronze-pin-13"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/ls-skin" class="bronze-pin-14"></NuxtLink>
				<NuxtLink to="/virtual-convention-center/exhibit-hall/bronze/allergan" class="bronze-pin-15"></NuxtLink>
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
			width: 6.3%;
    		height: 11.4%;
			border-radius: 50%;
			border: 2px solid #00ccff;
			animation-name: blinking;
			animation-duration: 1s;
			animation-iteration-count: 100;
			&:hover {
				border-width: 3px;
			}
			&.bronze-pin-1 {
				top: 26.64%;
    			left: 17.6%;
			}
			&.bronze-pin-2 {
				top: 26.64%;
    			left: 37%;
			}
			&.bronze-pin-3 {
				top: 26.59%;
    			left: 57.25%;
			}
			&.bronze-pin-4 {
				top: 26.49%;
    			left: 74.86%;
			}
			&.bronze-pin-5 {
				top: 35.25%;
    			left: 6.55%;
			}
			&.bronze-pin-6 {
				top: 35.25%;
    			left: 25.85%;
			}
			&.bronze-pin-7 {
				top: 35.25%;
				left: 46.78%;
			}
			&.bronze-pin-8 {
				top: 35.25%;
			    left: 67.47%;
			}
			&.bronze-pin-9 {
				top: 35.25%;
			    left: 87.47%;
			}
			&.bronze-pin-10 {
				top: 49.55%;
    			left: 13.75%;
			}
			&.bronze-pin-11 {
				top: 49.55%;
    			left: 37.13%;
			}
			&.bronze-pin-12 {
				top: 49.55%;
    			left: 56.73%;
			}
			&.bronze-pin-13 {
				top: 49.55%;
			    left: 80.3%;
			}
			&.bronze-pin-14 {
				top: 60.9%;
			    left: 23.9%;
			}
			&.bronze-pin-15 {
				top: 60.9%;
			    left: 70.5%;
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
