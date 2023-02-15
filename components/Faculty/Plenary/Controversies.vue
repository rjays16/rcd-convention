<template>
  <section id="controversies">
    <div class="container mb-5">
      <div class="row">
        <div class="mb-5"></div>
        <div class="marg-left">
          <center>
            <!-- <h1 class="avenir-italic color-005B97 mb-1">Controversies</h1> -->
            <h3 class="avenir-italic color-005B97 mt-4 mb-4">Day 02: October 27, 2022 (Thursday)</h3>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#goh_chee_leok">
              <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_goh_chee_leok.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#rashimi_sarkar">
              <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_rashimi_sarkar.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#rataporn_ungpakorn">
              <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_rataporn_ungpakorn.png">
            </a>
          </center>
        </div>
        <div class="mb-5"></div>
        <div class="col-lg-4  marg-left-row">
          <center>
            <a data-toggle="modal" data-target="#anotonella_tosti">
              <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_antonella_tosti.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#philippe_deprez">
              <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_philippe_deprez.png">
            </a>
          </center>
        </div>
      </div>
      <!-- SLIDER -->
      <!-- <div class="row">
        <div class="col-12">
          <div id="Controls2" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_goh_chee_leok.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_rashimi_sarkar.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_rataporn_ungpakorn.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_antonella_tosti.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Controversies/modals_philippe_deprez.png">
              </div>
            </div>
            <a class="carousel-control-prev" href="#Controls2" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#Controls2" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
    </div>
    <ModalsFacultyPlenaryControversiesAntonella/>
    <ModalsFacultyPlenaryControversiesGoh/>
    <ModalsFacultyPlenaryControversiesPhilippe/>
    <ModalsFacultyPlenaryControversiesRashmi/>
    <ModalsFacultyPlenaryControversiesRataporn/>
  </section>
</template>

<script>
export default {
  name: "Controversies",
}
</script>

<style scoped>
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
.marg-left-row {
  margin-left: 16%;
}
h3 {
  margin-left: 4%;
}
@media screen and (max-width: 1920px){
  .marg-top-description-rashmi {
    margin-top: 8%;
  }
}
@media screen and (max-width: 1024px){
  .marg-top-description-rashmi {
    margin-top: -2%;
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
  .marg-left-row {
    margin-left: 0%;
  }
}
</style>
