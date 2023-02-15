<template>
  <section id="workshop">
    <div class="container mb-5">
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-9 col-md-12 mb-5">
          <div class="orange corner-rounded p-3">
            <center><img src="/assets/images/faculty/Workshop_Speakers/Workshop_Frame.png"></center>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="marg-left">
          <center>
            <h3 class="avenir-italic text-color-orange mb-1 mt-4">Workshops on Lasers in Dermatology:<br>Paradigms of Treatment</h3>
            <h5 class="avenir-italic text-color-orange mb-4">Day 01: October 26, 2022 (Wednesday)</h5>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#maria_pilar_lagdameo_leuenberger">
              <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_maria_pilar_lagdameo.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#inneke_jane_hidajat">
              <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_ineke_jane_hidajat.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#wong_su_ni">
              <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_wong_su-ni.png">
            </a>
          </center>
        </div>
        <div class="mb-5"></div>
        <div class="col-lg-4  marg-left-row">
          <center>
            <a data-toggle="modal" data-target="#woraphong_manuskiatti">
              <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_woraphong_manuskiatti.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#kathyrn_anne_cembrano-mamaclay">
              <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_kathyn_anne_cembrano-mamaclay.png">
            </a>
          </center>
        </div>
      </div>
      <!-- SLIDER -->
      <!-- <div class="row">
        <div class="col-12">
          <div id="Controls4" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_maria_pilar_lagdameo.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_ineke_jane_hidajat.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_wong_su-ni.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_woraphong_manuskiatti.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Lasers/modals_kathyn_anne_cembrano-mamaclay.png">
              </div>
            </div>
            <a class="carousel-control-prev" href="#Controls4" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#Controls4" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
    </div>
    <ModalsFacultyWorkshopLaserInneke/>
    <ModalsFacultyWorkshopLaserKathyrn/>
    <ModalsFacultyWorkshopLaserMaria/>
    <ModalsFacultyWorkshopLaserWong/>
    <ModalsFacultyWorkshopLaserWoraphonh/>
  </section>
</template>

<script>
export default {
  name: "Laser",
}
</script>

<style scoped>
img {
  max-width: 100%;
}
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
.orange{
  background-color: #FF7500;
}
.corner-rounded{
  border-radius: 20px !important;
  width: 100%;
  max-width: 60%;
  margin-left: 40%;
}
.text-color-orange{
  color: #FF7500;
}
.marg-left-row {
  margin-left: 16%;
}
.marg-left {
  margin-left: 2%;
}
@media screen and (max-width: 1280px){
  .marg-top-description-wong{
    margin-top: 10%;
  }
}
@media screen and (max-width: 1024px){
  .marg-top-description-maria{
    margin-top: 10%;
  }
  .corner-rounded img {
    width: 100%
  }
}
@media screen and (max-width: 991px){
  .container > .row > .mb-5 {
    margin-bottom: 0 !important;
  }
  center a img {
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 912px){
  .corner-rounded {
    margin-left: 20%;
  }
  .corner-rounded img {
    width: 100%
  }
  .marg-left-row {
    margin-left: 0%;
  }
}
</style>
