<template>
  <section id="workshop">
    <div class="container mb-5">
      <div class="row">
        <div class="mb-5"></div>
        <div class="marg-left">
          <center>
            <h3 class="avenir-italic text-color-orange mb-1 mt-4">Workshops on Aesthetic in Dermatology:<br>Paradigms of Treatment</h3>
            <h5 class="avenir-italic text-color-orange mb-4">Day 02: October 27, 2022 (Thursday)</h5>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#ma_purita_paz_lao">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_ma_purita_paz-lao.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#jinda_rojanamatin">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_jinda_rojanamatin.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#angeline_anning_yong">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_angeline_anning_yong.png">
            </a>
          </center>
        </div>
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#allen_aguinaldo_cabrera">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_allen_aguinaldo_Cabrera.jpg">
            </a>
          </center>
        </div>
        <div class="col-lg-4">
          <center>
            <a data-toggle="modal" data-target="#arthur_swift">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_arthur_swift.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#han_jin_kwon">
              <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_han_jin_kwon.png">
            </a>
          </center>
        </div>
      </div>
      <!-- SLIDER -->
      <!-- <div class="row">
        <div class="col-12">
          <div id="Controls5" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_ma_purita_paz-lao.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_jinda_rojanamatin.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_angeline_anning_yong.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_arthur_swift.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_han_jin_kwon.png">
              </div>
            </div>
            <a class="carousel-control-prev" href="#Controls5" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#Controls5" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
    </div>
    <ModalsFacultyWorkshopAestheticAngeline/>
    <ModalsFacultyWorkshopAestheticArthur/>
    <ModalsFacultyWorkshopAestheticHan/>
    <ModalsFacultyWorkshopAestheticJinda/>
    <ModalsFacultyWorkshopAestheticMa/>
    <ModalsFacultyWorkshopAestheticAllen/>
  </section>
</template>

<script>
export default {
  name: "Aesthetic",
}
</script>
<style scoped>
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
.text-color-orange{
  color: #FF7500;
}
.marg-left {
  margin-left: 2%;
}
@media screen and (max-width: 1280px){
  .marg-top-description-arthur{
    margin-top: 11%;
  }
  .marg-top-description-jinda {
    margin-top: 10%;
  }
  .marg-top-description-han{
    margin-top: 11%;
  }
  .marg-top-description-ma{
    margin-top: 10%;
  }
}
@media screen and (max-width: 1024px){
  .marg-top-description-ma{
    margin-top: 12%;
  }
  .marg-top-description-han{
    margin-top: 12%;
  }
  .marg-top-description-jinda {
    margin-top: 0%;
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
</style>
