<template>
  <section id="plenary">
    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-9 col-md-12 mb-5">
          <div class="blue corner-rounded p-3">
            <center><img src="/assets/images/faculty/Plenary_Speakers/Plenary_Frame.png"></center>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="marg-left">
          <center>
            <!-- <h1 class="avenir-italic color-005B97 mb-1">Reconnaissance</h1> -->
            <h3 class="avenir-italic color-005B97 mt-4 mb-4">Day 01: October 26, 2022 (Wednesday)</h3>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#rungsima">
              <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_rungsima_wanitphakdeedecha.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#kee_yang_chung">
              <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_kee_yang_chung.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#rachel_victoria">
              <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_rachel_victoria_sabbag_reynolds.png">
            </a>
          </center>
        </div>
        <div class="mb-5"></div>
        <div class="col-lg-4  marg-left-row">
          <center>
            <a data-toggle="modal" data-target="#torsten">
              <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_torsten_zuberbier.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#cesar_holdago">
              <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_cesar_holdago.png">
            </a>
          </center>
        </div>
      </div>
      <!-- SLIDER -->
      <!-- <div class="row">
        <div class="col-12">
          <div id="Controls1" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_rungsima_wanitphakdeedecha.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_kee_yang_chung.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_rachel_victoria_sabbag_reynolds.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_torsten_zuberbier.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Reconnaissance/modal_cesar_holdago.png">
              </div>
            </div>
            <a class="carousel-control-prev" href="#Controls1" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#Controls1" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
    </div>
    <ModalsFacultyPlenaryReconnaissanceKeeYang/>
    <ModalsFacultyPlenaryReconnaissanceCesar/>
    <ModalsFacultyPlenaryReconnaissanceRachelVictoria/>
    <ModalsFacultyPlenaryReconnaissanceRungsima/>
    <ModalsFacultyPlenaryReconnaissanceTorsten/>
  </section>
</template>

<script>
// import $ from 'jquery'
export default {
  name: "Plenary",
  // mounted() {
	// 	$('.carousel').carousel({
  //     ride: 'carousel',
  //     interval: 6000
  //   })
	// }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
.carousel {
  max-width: 822px;
  margin: 0 auto;
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
.blue{
  background-color: #005B97;
}
.corner-rounded{
  border-radius: 20px !important;
  width: 100%;
  max-width: 60%;
  margin-left: 40%;
}
.marg-left-row {
  margin-left: 16%;
}
h3 {
  margin-left: 4%;
}
@media screen and (max-width: 1920px){
  .marg-top-description-kee {
    margin-top: 8%;
  }
  .marg-top-description-torsten{
    margin-top: 8%;
  }
}
@media screen and (max-width: 1280px){
  .marg-top-description-kee {
    margin-top: 9%;
  }
  .marg-top-description-torsten{
    margin-top: 0%;
  }
}
@media screen and (max-width: 1024px){
  .marg-top-description-kee {
    margin-top: 0%;
  }
  .marg-top-description-torsten{
    margin-top: 12%;
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
