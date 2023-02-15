<template>
  <section id="about">
    <div class="row">
      <div class="col-12 col-md-5 px-0">
        <img src="/assets/images/fb-post-frame.png" alt="Save the Date" class="w-100 h-100 object-fill" />
      </div>
      <div class="col-12 col-md-7 bg-DDE8ED px-0">
        <div class="w-100 h-100">
          <div class="con-tagline">
            <div class="p-2 text-cobalt border-5 border-cobalt border-solid">
              <div class="fw-bolder lh-1 text-center font-md-12 font-lg-16 font-10 font-xl-17 font-3xl-19 text-uppercase">
                25th Regional Conference of Dermatology
              </div>
              <div class="text-center padding-top-md-10 padding-top-8
                font-lg-8 font-7 font-xl-9 font-3xl-10 italic font-semibold">
                Reconnaissance, Controversies, Dialogues in Dermatology
              </div>
            </div>
            <div class="text-center fw-bold padding-top-10
              font-lg-15 font-md-11 font-10 font-xl-16 font-3xl-18
              text-cobalt">
              October 26-28, 2022
            </div>
          </div>
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-6 col-sm-12 d-table">
                <div class="d-table-cell align-middle marg-registration">
                  <div class="
                    mx-auto
                    text-center
                    text-uppercase
                    bg-orange
                    text-white
                    fs-3
                    fw-bold
                    py-2
                    mb-3
                    marg-registration-button"
                    :class="can_register ? 'clickable' : ''"
                    @click="can_register ? goToRegistration() : ''">
                    {{ can_register ? 'Registration is now Open!' : 'Registration Opens at June 10, 3PM' }}
                  </div>
                  <div class="row marg-email">
                    <b class="text-uppercase text-cobalt marg-registration">
                      <center><a href="#rates" data-toggle="modal" data-target="#rates">RCD 2022 Registration Rates</a></center>
                      Click the button above or type this link to your browser:
                    </b>
                    <a class="text-center text-cobalt fw-bold marg-registration" href="https://www.rcd2022manila.com.ph/registration">
                      https://www.rcd2022manila.com.ph/registration
                    </a>
                  </div>
                  <div class="row">
                    <p class="inquiries">
                      For inquiries and assistance, email us at <br>  registration@rcd2022manila.com.ph
                    </p>
                  </div>
                </div>
              </div>
              <div class="con-qr col-md-6 col-sm-12 marg text-center">
                <b class="text-uppercase text-cobalt">scan this qr code on your<br> mobile phone to register</b>
                <br>
                <a href="https://www.rcd2022manila.com.ph/registration" target="_blank"><img src="/assets/images/RCD-QR-Code-Updated-May-26-2022.png" class="img-fluid divider-2" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalsRates/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      registration_date: '6/10/2022',
      registration_time: '15:00:00',
      current_date: new Date().toLocaleDateString("en", {day: 'numeric', month: 'numeric', year: 'numeric'}),
      can_register: true,
    };
  },
  methods: {
    goToRegistration() {
      // console.log('goToRegistration')
      this.$router.push('/registration')
    },
    getRegistrationSwitch() {
			this.$store.dispatch("options/getRegistrationSwitch")
			.then(res => {
        this.can_register = res.data
        console.log('Registration Gate Status:', this.can_register ? "Enabled" : "Disabled")
        console.log('Registration Date', this.registration_date)
			})
			.catch(err => {
				console.error(err)
			})
		},
  },
  mounted() {
    this.getRegistrationSwitch()
  }
};
</script>

<style lang="scss" scoped>
#about {
  .con-tagline {
    padding: 8% 8% 4% 8%;
  }
}

marg-registration{
  margin-left: 20%;
}
@media all and(max-width: 1355px) {
  .marg{
    margin-left: 20%;
  }
}

@media all and(max-width: 758px){
  .marg{
    margin-left: 0%;
  }
}
@media all and(max-width: 414px) {
  .marg{
    margin-left: 4%;
  }
}
.marg-registration{
  // margin-left: 8%;
  width: 100%;
}
.marg-registration-button{
  // margin-left: 13% !important;
  margin: 1em auto !important;
  width: 70% !important;
}

@media only screen and (max-width: 767px) {
  .marg-registration{
    width: 98%;
    text-align: center;
  }
  .marg-email a{
    font-size: .8em;
  }
}
</style>
