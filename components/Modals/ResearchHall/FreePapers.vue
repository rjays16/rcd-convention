<template>
  <section>
    <div class="modal fade" id="free_papers" tabindex="-1" role="dialog" aria-labelledby="leftModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-slideout" role="document">
        <div class="modal-content">
          <div class="modal-body bg-065E99">
            <button type="button" class="close bg-065E99" data-dismiss="modal" aria-label="Close">
              <a href="#" class="bg-065E99" type="button" data-bs-dismiss="modal" aria-label="Close"><img src="/assets/images/vcc/eva_close-circle-outline.png"></a>
            </button>
            <div class="container-fluid d-flex h-100">
              <div class="col-md-6 col-sm-12 h-100">
                <div class="logo">
                  <div  class="img1">
                    <img src="/assets/images/vcc/RCD_LOGO_CIRCLE.png">
                  </div>
                  <div class="img2">
                    <img src="/assets/images/vcc/RCD_Logo_White.png">
                  </div>
                </div>
                <div class="contents1">
                  <h2 class="text-center inter-bold mb-0 color-065E99 text-uppercase">Categories</h2>
                  <div class="category" v-for="category in abstracts" :key="category.id">
                    <div>
                      <a type="button" @click="getSpecificCategory(category.abstract_category)">
                        <img src="/assets/images/vcc/FOLDER.png">
                        <span class="text-uppercase text-white inter-regular">{{category.abstract_category}}</span>
                      </a>
                      <hr class="bg-white adjust-width">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 h-100">
                <div class="heading">
                  <h3 class="text-white text-uppercase text-center inter-bold adjust-top">finalists of the</h3>
                  <h1 class="text-white text-uppercase text-center inter-bold">free paper</h1>
                  <h4 class="text-white text-center inter-bold">Reconnaissance, Controversies and Dialogues in Dermatology<br>
                    October 26-28, 2022
                  </h4>
                </div>
                <div class="contents2">
                  <h2 class="text-center inter-bold mb-0 color-065E99 text-uppercase">participants</h2>
                  <div>
                    <div class="authors" v-for="(abstract, id) in abstracts" :key="id">
                      <div v-if="category === abstract.abstract_category">
                        <div v-for="(author, index) in abstract.authors" :key="index">
                          <img src="/assets/images/vcc/man.png">
                          <span  class="text-uppercase inter-regular text-white"> {{author.last_name}}, {{author.first_name}}</span>
                          <a href="#" type="button" class="pdf text-uppercase text-white inter-regular" data-toggle="modal" @click="openModalFreePapers(abstract.id)">watch video
                            <img src="/assets/images/vcc/et_video.png"></a>
                          <hr class="bg-white">
                        </div>
                      </div>
                      <div v-else></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="right_image">
            <img src="/assets/images/vcc/right_image.png" alt="">
          </div>
        </div>
      </div>

    <ModalsResearchHallVideoPreview ref="PreviewModalVideo"/>
  </section>
</template>
<script>
import $ from 'jquery';
export default {
  data(){
    return {
      abstracts: [{}],
      category: null,
      default_category: [{}],
    }
  },

  methods: {
    get_FreePaper() {
      this.$store.dispatch("abstracts/getAllFreePaperAbstracts")
        .then(res => {
          this.abstracts = res.data
        })
        .catch(err => {
          console.error(err)
        })
      $(document).bind("contextmenu", function (e){
        return false;
      })
      document.onmousedown = disableRightclick;
      var message = "Right click not allowed!";
      function disableRightclick(evt){
        if(evt.button == 2){
          alert(message);
          return false;
        }
      }
    },
    getAllCategories() {
      this.$store.dispatch('vcc/getList')
        .then(res => {
          this.participants = res.data;
        })
    },
    getSpecificCategory(category) {
      this.category = category
    },
    preview_video(){
      this.$refs.PreviewModalVideo.preview_video(this.abstracts)
      $('#video').modal('show');
    },
    openModalFreePapers(id){
      this.$refs.PreviewModalVideo.openModal(id, true);
    },
  },
  mounted(){
    this.get_FreePaper()
    this.getAllCategories()
  }
}
</script>
<style lang="scss" scoped>
.contents1, .contents2{
  height: 65%;
  h2{
    background-color: white;
    border-radius: 50px;
    color: blue;
    width: 95%;
    max-width: 390px;
    margin: auto;
    margin-bottom: 1em !important;
    font-size: 32px;
  }
}
.logo{
    text-align: center;
    height: 35%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .img1{
      max-width: 100%;
    }
    .img2{
      max-width: 100%;
    }
}
.heading {
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.adjust-width{
  width: 100%;
}
.pdf{
  float: right;
  text-decoration: none;
}
.title{
  margin-left: 10%;
}
.marg{
  margin-left: 30% !important;
}
.adjust-top{
  margin-top: 1.5%;
}
.corner-rounded {
  border-radius: 20px !important;
  width: 100%;
  max-width: 300px;
  margin-left: 18%;
}
.category {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  a {
    display: flex;
    justify-content: normal;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
}
.authors {
  font-size: 14px;
}
.close {
  border: none;
  float: right;
  position: absolute;
  right: -2px;
  top: 0;
  z-index: 1 !important;
}
.modal-dialog {
  max-width: 95%;
}
#free_papers{
  margin-top: 80px;
  overflow-y: hidden;
  height: calc(100% - 80px);
}
.right_image{
  position: absolute;
  z-index: 1;
  margin-left: 100%;
}
.right_image img{
  height: 950px;
}
.modal.fade .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(50%,0)scale(1);
  transform: translate(90%,0)scale(1);
}
.modal.fade.show .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(0,0);
  transform: translate(0,0);
  display: flex;align-items:
  stretch;-webkit-box-align:
  stretch;height: 100%;
}
.modal.fade.show .modal-dialog.modal-dialog-slideout .modal-body {
  overflow-y: auto;overflow-x: hidden;
}
.modal-dialog-slideout .modal-content {
  border: 0;
}
.modal-dialog-slideout .modal-header, .modal-dialog-slideout .modal-footer {
  height: 69px;
  display: block;
}
#free_papers .modal-dialog-slideout {
  min-height: 50%;
  margin: 0 auto 0 0;
  background: #fff;
}
#free_papers.modal.fade:not(.show) .modal-dialog.modal-dialog-slideout {
  -webkit-transform: translate(50%,0)scale(1);
  transform: translate(-100%,0)scale(1);
}
.category hr.bg-white {
  margin: 10px 0;
}
.text-center.rajdhani-bold {
  font-weight: 700;
  padding: 5px 0;
}
h3.text-white.text-uppercase.inter-bold,
h3.text-white.text-uppercase.avenir-bold {
  font-size: 20px;
  margin: 0 0 5px;
}
h1.text-white.text-uppercase.inter-bold,
h1.text-white.text-uppercase.avenir-bold {
  font-size: 60px;
  line-height: 3.0rem;
  margin-bottom: 20px;
}
h4.text-white.inter-bold,
h4.text-white.avenir-bold {
  margin-bottom: 15px;
  font-size: 24px;
}
.logo .img1 img {
  width: 180px;
  height: 180px;
}
.logo .img2 img {
  width: 400px;
}
@media screen and (max-width: 1360px){
  .categories{
    margin-top: 5%;
  }
}
@media screen and (max-width: 1280px){
  .categories{
    margin-top: 6%;
  }
  .authors{
    margin-left: 10%;
  }
}
@media screen and (max-width: 1080px) {
  .logo, .heading {
    height: auto;
    padding-bottom: 20px;
    min-height: 250px;
  }
  .contents1, .contents2 {
    height: auto;
  }
  .logo .img1 img,
  .logo .img2 img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  .description{
    margin-top: 9%;
  }
  .participants{
    margin-top: 10%;
  }
  .authors {
    margin-left: 14%;
  }
}
@media screen and (max-width: 912px){
  .logo{
      text-align: center;
  }
  .participants{
    margin-top: 24%;
  }
  .right_image img{
    height: 1300px;
  }
  h1.text-white.text-uppercase.inter-bold {
    font-size: 3rem;
    margin-left: 10%;
  }
  .description{
    margin-left: 10%;
    margin-top: 0%;
  }
  h3.text-white.text-uppercase.inter-bold {
    margin-left: 10%;
  }
}
@media screen and (max-width: 820px) {
  .participants{
    margin-top: 18%;
  }
}
@media screen and (max-width: 767px) {
  .container-fluid{
    flex-direction: column !important;
    .logo{
      display: flex;
      justify-content: center;
      text-align: center;
      margin-bottom: 1.5em;
      height: auto;
      .img1{
        width: 20%;
      }
    }
    .heading{
      height: auto;
      text-align: center;
      h1, h3, h4{
        margin-left: 0 !important;
      }
    }
    .authors{
      margin-left: 0 !important;
    }
  }
  .participants {
    margin-top: 20%;
  }
  h3.text-white.text-uppercase.inter-bold {
    text-align: center;
    margin-top: 30px;
  }
  h1.text-white.text-uppercase.inter-bold {
    text-align: center;
  }
  h4.text-white.inter-bold {
    text-align: center;
  }
  .corner-rounded {
    width: 100%;
    margin: 0 auto 20px;
  }
  .marg {
    margin: 0 auto 20px !important;
  }
  .category {
    margin-left: 0;
  }
  .contents1, .contents2 {
    height: auto;
  }
  .logo, .heading {
    min-height: auto;
  }
}
@media screen and (max-width: 540px) {
  .container-fluid{
    flex-direction: column !important;
    .logo{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 1.5em;
      .img1{
        width: 30%;
        margin: 0 auto;
      }
    }
    .heading{
      text-align: center;
      h1, h3, h4{
        margin-left: 0 !important;
      }
    }
    .authors{
      margin-left: 0 !important;
    }
  }
  .description{
    margin-top: 5%
  }
  .content{
    width: 100%;
    margin: auto;
    .logo {
      .img1{
        width: 5em !important;
      }
      .img2{
        width: 15em !important;
      }
    }
    .finalist{
      h1, h3 {
        line-height: 16px;
        margin-left: 0 !important;
      }
    }
    .description{
      margin-left: 0 !important;
      h3{
        font-size: 3em;
      }
      h4{
        font-size: 1em;
      }
    }
    .authors{
      margin-left: 0 !important;
    }
  }
  .content2{
    width: 100%;
    padding: 0;
    margin: auto;
  }
  .contents1, .contents2{
      h2{
        font-size: 1em !important;
      }
  }
}

@media screen and (max-width: 412px) {
  h1.text-white.text-uppercase.inter-regular {
    font-size: 3rem;
  }
  .description{
    margin-top: 0
  }
  .authors a{
    margin-top: 3%;
    margin-right: 10%;
  }
}
@media screen and (max-width: 390px) {
  h1.text-white.text-uppercase.inter-regular {
    font-size: 2rem;
  }
}
</style>
