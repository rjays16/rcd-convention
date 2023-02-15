<template>
    <section id="abstract" ref="abstractHeader" class="bg-DDE8ED py-3">
        <div class="container text-center">
            <h1 class="avenir-bold mb-5" style="font-size: 60px; padding-top: 1em;">
                ABSTRACT SUBMISSION
            </h1>

            <div class="content avenir-regular mb-3" id="text-size">
              <div class="container">
                <div class="row mb-4">
                  <p class="abs-text">Attendees of the <span class="avenir-bold">25th Regional Conference of Dermatology</span> are invited to submit abstracts of unpublished original research for the <span class="avenir-bold">E-Poster Exhibit</span> during the conference.</p>
                  <p>Dermatology residents from LADS member societies (Cambodia, Indonesia, Malaysia, Philippines, Singapore, Thailand and Vietnam) are also invited to submit abstracts for the <span class="avenir-bold">Free Paper Presentation</span> category. A panel of judges will select two outstanding abstracts from each country for presentation. The presenting authors will be awarded a <span class="avenir-bold">LADS Research Grant.</span></p>
                  <p>Registration to the 25th RCD must be completed prior to submission.  Read the complete guidelines <a href="/abstract-guidelines" target="_blank" class="text-dark avenir-bold">here</a>.</p>
                  <h3><span class="avenir-bold">DATES TO REMEMBER:</span></h3>
                  <p>
                    Submission opening: June 17, 2022<br>
                    <span class="strike"><span class="text-color"> Submission closing: July 30, 2022</span></span><br>
                    <span class="text-size"><b>Deadline Extended: August 08 2022</b></span><br>
                    Notice of acceptance: September 16, 2022
                  </p>
                  <p>For any questions or clarifications, email us at: <a href="mailto:rcdresearchcommittee@gmail.com">rcdresearchcommittee@gmail.com</a></p>

<!--                  <div class="container">-->
<!--                    <div class="row">-->
<!--                      <div class="col-sm-5">-->
<!--                        <img src="/assets/images/image_2022_08_02T00_52_43_632Z.png" class="img-fluid">-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->

                </div>
              </div>
            </div>
          <div v-if="abstract_switch === true">
            <button class="btn btn-blue col-lg-4 avenir-bold fs-5 corner-20px corner-rounded" @click="$router.push('login')">Submit an Abstract</button>
          </div>
          <div v-else>
            <button class="btn gray col-lg-4 avenir-bold fs-5 corner-20px corner-rounded disabled">Submit an Abstract</button>
          </div>
        </div>
    </section>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data() {
    return {
      abstract_switch: false,
    }
  },
    computed: {
        ...mapGetters({
            isLoggedIn: 'auth/isLoggedIn',
        }),
    },
    methods: {
        scrollToHeader() {
            let route = this.$route
            let hash = "#abstract"
            const abstractHeader = this.$refs.abstractHeader;

            if (route.hash == hash) {
                abstractHeader.scrollIntoView({behavior: 'smooth'});
            }
        },
        redirect(){
            if(this.isLoggedIn){
                this.$router.push('profile')
            }else{
                this.$router.push('login')
            }
        },
      abstractSwitch(){
        this.$store.dispatch("abstracts/getAbstractSwitch")
          .then(res => {
            this.abstract_switch = res.data
          })
      }
    },
    mounted() {
      this.abstractSwitch()
        setTimeout(() => {
            this.scrollToHeader()
        }, 300)
    }
}
</script>
<style lang="scss" scoped>
.marg {
  margin-left: 32%;
}
.corner-rounded{
  margin-left: -2%;
}
.content p{ font-size: 24px}
#hide{
  display: none;
}
.box p{
  width: 30%;
}
.bg-red-orange{
  background-color: #ff5349;
}
h3{
  margin-top: 30px;
}
.img-fluid {
  margin-left: 70%;
}
@media all and (max-width: 540px){
  .img-fluid{
    margin-left: 0%;
  }
}
@media only screen and (max-width: 767px) {
  #abstract
  p{
    font-size: 1.1em;
  }
  h1{
    font-size: 40px !important;
  }
}
.strike{
  text-decoration: line-through;
  color: red;
}
.text-color{
  color: black;
}
.gray {
  background-color: gray;
}
</style>
