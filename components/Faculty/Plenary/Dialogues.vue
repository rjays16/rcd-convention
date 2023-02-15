<template>
  <section id="dialogues">
    <div class="container mb-5">
      <div class="row">
        <div class="mb-5"></div>
        <div class="marg-left">
          <center>
            <!-- <h1 class="avenir-italic color-005B97 mb-1">Dialogues in Dermatology</h1> -->
            <h3 class="avenir-italic color-005B97 mt-4 mb-4">Day 03: October 28, 2022 (Friday)</h3>
          </center>
        </div>
      </div>
      <div class="row">
        <div class="mb-5"></div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#pravit_asawanonda">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_pravit.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#srie_prihanti">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_srie.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#john_alexander">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_john_alexander.png">
            </a>
          </center>
        </div>
        <div class="mb-5"></div>
        <div class="col-lg-4  marg-left-row">
          <center>
            <a data-toggle="modal" data-target="#benjamin_co">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_benjamin.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#junice_lirza">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_junice.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#rotgene_solante">
              <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_rotgene.png">
            </a>
          </center>
        </div>
      </div>
      <!-- SLIDER -->
      <!-- <div class="row">
        <div class="col-12">
          <div id="Controls3" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_pravit.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_srie.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_john_alexander.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_benjamin.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_junice.png">
              </div>
              <div class="carousel-item">
                <img src="/assets/images/faculty/Plenary_Speakers/Dialogues/modals_rotgene.png">
              </div>
            </div>
            <a class="carousel-control-prev" href="#Controls3" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#Controls3" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div> -->
      <!-- SLIDER -->
    </div>
    <ModalsFacultyPlenaryDialoguesBenjamin/>
    <ModalsFacultyPlenaryDialoguesJohnAlexander/>
    <ModalsFacultyPlenaryDialoguesJuniceLirza/>
    <ModalsFacultyPlenaryDialoguesRontgene/>
    <ModalsFacultyPlenaryDialoguesPravit/>
    <ModalsFacultyPlenaryDialoguesSrie/>
  </section>
</template>

<script>
export default {
  name: "Dialogues",
}
</script>

<style scoped>
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
h3 {
  margin-left: 4%;
}
@media screen and (max-width: 1920px){
  .marg-top-description-pravit  {
  margin-top: 8%;
  }
  .marg-top-description-srie {
    margin-top: 8%;
  }
}
@media screen and (max-width: 1280px){
  .marg-top-description-pravit  {
    margin-top: 0%;
  }
}
@media screen and (max-width: 1024px){
  .marg-top-description-pravit  {
    margin-top: -2%;
  }
  .marg-top-description-srie {
    margin-top: 22%;
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
