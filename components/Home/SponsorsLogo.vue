<template>
  <section id="sponsors_logo py-3 mb-5">
    <div class="container-fluid">
      <div class="row mb-5">
        <div class="col-lg-4">
          <hr class="line color-005B97">
        </div>
        <div class="col-lg-4">
          <h2 class="text-uppercase adjust avenir-bold color-005B97">platinum<br>sponsors</h2>
        </div>
        <div class="col-lg-4">
          <hr class="line2 color-005B97">
        </div>
      </div>
      <div class="row col-md-10 mb-5 mx-auto text-center">
        <div class="col-lg-4">
          <img src="/assets/images/sponsors/galderm.jpg" class="img-fluid" id="galderma">
        </div>
        <div class="col-lg-4">
          <img src="/assets/images/sponsors/novart.jpg" class="img-fluid" id="novartis">
        </div>
        <div class="col-lg-4">
          <img src="/assets/images/sponsors/leo.jpg" class="img-fluid" id="leopharma">
        </div>
      </div>
      <div class="row col-md-10 mb-5 mx-auto text-center">
        <div class="col-lg-4 adjust-img">
          <img src="/assets/images/sponsors/bayers.jpg" class="img-fluid" id="bayer">
        </div>
        <div class="col-lg-4">
          <img src="/assets/images/sponsors/merini.jpg" class="img-fluid" id="menarini">
        </div>
        <div class="col-lg-4">
          <img src="/assets/images/sponsors/solta.jpg" class="img-fluid" id="soltamedical">
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-lg-4">
          <hr class="line color-005B97">
        </div>
        <div class="col-lg-4">
          <h2 class="text-uppercase adjust color-005B97 avenir-bold"><span class="marg">gold</span><br>sponsors</h2>
        </div>
        <div class="col-lg-4">
          <hr class="line2 color-005B97">
        </div>
      </div>
    </div>
    <div class="row col-md-10 mb-5 mx-auto text-center">
      <div class="col-lg-4">
        <img src="/assets/images/sponsors/creatives.jpg" class="img-fluid" id="creative">
      </div>
      <div class="col-lg-4">
        <img src="/assets/images/sponsors/johnson.jpg" class="img-fluid" id="johnson">
      </div>
      <div class="col-lg-4">
        <img src="/assets/images/sponsors/zpt.jpg" class="img-fluid" id="zpt">
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "SponsorsLogo"
}
</script>

<style lang="scss" scoped>
.line{
  height: 3%;
  width: 130%;
}
.line2{
  width: 130%;
  height: 3%;
  margin-left: -25%;
}
.adjust {
  // margin-left: 40%;
  margin-top: -5%;
  text-align: center;
}
@media all and(max-width: 1280px){

}
@media all and(max-width: 991px) {
  .adjust {
    margin-top: 0%;
  }
  #leopharma {
    margin: 0;
  }
  .adjust-img {
    margin: 0;
  }
  #soltamedical {
    margin: 0;
  }
}
@media all and (max-width: 912px){
  .adjust{
    margin-top: 0%;
  }
  #gold{
    margin-left: 35%;
    width: 30%;
  }
  .adjust-img-gold{
    margin-left: 0%;
  }
  #johnson{
    margin-top: -10%;
  }
  #soltamedical{
    margin-left: 0;
  }
}
@media all and (max-width: 540px){
  #bayer{
    margin-left: 0;
  }
  #soltamedical{
    margin-left: 0;
  }
}
</style>
