<template>
  <div>
    <HomeBanner />
    <Navbar :page_title="page_title"/>

    <div class="mb-5"></div>
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-12">
          <el-carousel :interval="5000" type="card" height="650px">
              <el-carousel-item>
                  <img src="/assets/images/About/RCD-Template-History-Part1-Revised.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                  <img src="/assets/images/About/RCD-Template-History-Part-2-Revised.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                  <img src="/assets/images/About/RCD-Template-History-Part-3.jpg" alt="">
              </el-carousel-item>
              <el-carousel-item>
                  <img src="/assets/images/About/RCD-Template-History-Part-4.jpg" alt="">
              </el-carousel-item>
          </el-carousel>
        </div>
        <!-- <b-carousel id="carousel-1"
                    v-model="slide"
                    :interval="5000"
                    controls indicators
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
          <b-carousel-slide img-src="/assets/images/About/RCD-Template-History-Part1-Revised.jpg"></b-carousel-slide>
          <b-carousel-slide img-src="/assets/images/About/RCD-Template-History-Part-2-Revised.jpg"></b-carousel-slide>
          <b-carousel-slide img-src="/assets/images/About/RCD-Template-History-Part-3.jpg"></b-carousel-slide>
          <b-carousel-slide img-src="/assets/images/About/RCD-Template-History-Part-4.jpg"></b-carousel-slide>
        </b-carousel> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
	layout: "home",
	data() {
		return {
      page_title: "About",
    }
	},
};
</script>

<style>
.el-carousel__mask {
  opacity: 0.50;
}
img {
  max-width: 100%;
}
.size img {
  width: 50%;
  height: 80%;
  margin-top: 20px;
}
#carousel-1 {
  margin-left: 5%;
}

.carousel-control-prev-icon{
  background-color: black;
  width: 40px;
  height: 40px;
}
.carousel-control-next-icon{
  background-color: black;
  width: 40px;
  height: 40px;
  margin-left: 50%;
}
@media screen and (max-width: 991px) {
  .el-carousel__container {
    height: 400px !important;
  }
}
@media screen and (max-width: 767px) {
  .el-carousel__container {
    height: 300px !important;
  }
}
@media all and (max-width: 540px) {
  #carousel-1{
    margin-left: 0%;
  }
  .el-carousel__container {
    height: 200px !important;
  }
}
</style>
