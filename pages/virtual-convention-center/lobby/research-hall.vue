<template>
  <section>
    <VCCPreLoader />
    <div class="vcc-banner-container">
      <div class="vcc-banner-img">
        <img src="/assets/images/vcc/NEW_RESEARCH_HALL.jpg" alt="">
        <div class="play_box">
          <a href="#" data-toggle="modal" data-target="#e_poster"></a>
        </div>
        <div class="play_box2">
          <a href="#" data-toggle="modal" data-target="#free_papers"></a>
        </div>
      </div>
    </div>
    <div class="vcc-switch-btn">
      <NuxtLink to="/virtual-convention-center/lobby">
        Back to<br><span>Main Lobby</span>
      </NuxtLink>
    </div>
    <ModalsResearchHallEPoster/>
    <ModalsResearchHallFreePapers/>
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
			user:{},
			is_reloaded: false,
		};
  	},
	// beforeRouteLeave(to, from, next) {
	// 	this.$confirm("If you leave, you're estimated stay duration may be affected. Do you still want to leave?", {
	// 		dangerouslyUseHTMLString: true,
	// 		cancelButtonText: 'Stay',
	// 		confirmButtonText: 'Leave',
	// 		type: 'warning',
	// 	})
	// 	.then(() => {
	// 		sessionStorage.removeItem('reload', false);
	// 	    // this.logoutDelegateAttendance()
	// 		next()
	// 	}).catch(() => {
	// 	    next(false)
	// 	})
	// },
	beforeDestroy(){
		sessionStorage.removeItem('reload', false);
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
	},
	mounted(){
		this.getUser()
		window.addEventListener('beforeunload', function (e) {
			e.returnValue = 'msg';
		});
	}
};
</script>
<style lang="scss" scoped>
.vcc-banner-img {
  position: relative;
  img {
    max-width: 100%;
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
.play_box2 img{
  position: absolute;
  z-index: 1;
  top: 41.8%;
  height: 10%;
  margin-left: 64%;
}
.play_box img{
  position: absolute;
  z-index: 1;
  top: 41.8%;
  height: 10%;
  margin-left: 30.2%;
}
.play_box a{
  position: absolute;
  z-index: 1;
  top: 35%;
  height: 23%;
  width: 22%;
  margin-left: 22%;
}
.play_box2 a{
  position: absolute;
  z-index: 1;
  top: 35%;
  height: 25.5%;
  width: 23%;
  margin-left: 55%;
}
.vcc-switch-btn a span {
  font-weight: 700;
  font-size: 25px;
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
