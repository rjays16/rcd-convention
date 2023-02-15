<template>
  <section id="sponsor2">
    <div class="container mb-5">
      <div class="row">
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#cheong_wai_kong">
              <img src="/assets/images/faculty/Sponsor_Speakers/Sponsors/modals_cheong_wai_kong.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          <center>
            <a data-toggle="modal" data-target="#amy_paler">
              <img src="/assets/images/faculty/Sponsor_Speakers/Sponsors/modals_amy_paller.png">
            </a>
          </center>
        </div>
        <div class="col-lg-4 md-4">
          
        </div>
        
      </div>
    </div>
    <ModalsFacultySponsorSponsors2Amy/>
    <ModalsFacultySponsorSponsors1Cheong/>
    
  </section>
</template>

<script>
export default {
  name: "Sponsors2"
}
</script>

<style scoped>
center a img {
  max-width: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.3);
  cursor: pointer;
}
@media screen and (max-width: 1920px){
  .marg-top-description-wilsie {
    display: none;
  }
  .marg-top-description-kanokvalai {
    display: none;
  }
  .marg-top-description-cecilia {
    position: absolute;
    margin-top: 2%;
    margin-left: 11%;
  }
  .marg-top-description-marie {
    margin-top: 6%;
  }
  .marg-top-description-vermen {
    position: absolute;
    margin-left: 11%;
  }
  .marg-top-description-kilian {
    display: none;
  }
}
@media screen and (max-width: 1280px) {
  .marg-top-description-marie {
    margin-top: 0%;
  }
  .marg-top-description-amy{
    margin-top: 10%;
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
  .marg-top-description-gisella {
    display: none;
  }
  .marg-top-description-cecilia {
    display: none;
  }
  .marg-top-description-wilsie {
    display: block;
    position: relative;
    margin: 0%;
  }
  .marg-top-description-kanokvalai {
    display: block;
    position: relative;
    margin: 0%;
  }
}
</style>
