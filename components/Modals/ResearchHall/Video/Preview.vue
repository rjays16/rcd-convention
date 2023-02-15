<template>
  <section>
    <div class="modal fade" id="video" role="dialog">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <span>
                  <iframe sandbox="allow-scripts allow-same-origin" :src="this.form.url" height="97.5%" width="97.5%"></iframe>
                </span>
            <button type="button" data-dismiss="modal"><img src="/assets/images/vcc/eva_close-circle-outline.png"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
export default {
  name: "Preview",
  data() {
    return {
      is_preview: false,
      form:
        {
        url: null,
        }
    }
  },
  methods: {
    preview_video(abstracts) {
      this.form.url = abstracts.embed_url;
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
    openModal(id, is_preview) {
        this.is_preview = is_preview
        this.$store.dispatch("abstracts/getAbstract", id)
          .then(res => {
            var data = res.data;
            this.preview_video(data, data.authors)
            setTimeout(() => {
              $('#video').modal('show');
            }, 3000);
          })
      }
  }
}
</script>

<style scoped>
.modal-dialog {
  max-width: 97%;
  display: flex;align-items:
  stretch;-webkit-box-align:
  stretch;height: 100%;
}
.modal-body{
  background-color: grey;
}
.modal-body button{
  position: absolute;
  background-color: grey;
  border: none;
}
@media screen and (max-width: 1360px) {
  .modal-body img{
    width: 35px;
  }
}
@media screen and (max-width: 1280px) {
  .modal-body img{
    width: 34px;
  }
}
@media screen and (max-width: 1024px) {
  .modal-body img{
    width: 28px;
  }
}
@media screen and (max-width: 912px) {
  .modal-body img{
    width: 26px;
  }
}
@media screen and (max-width: 820px) {
  .modal-body img{
    width: 23px;
  }
}
@media screen and (max-width: 414px) {
  .modal-body img{
    width: 13px;
  }
}
@media screen and (max-width: 412px) {
  .modal-body img{
    width: 14px;
  }
}
@media screen and (max-width: 390px) {
  .modal-body img{
    width: 12px;
  }
}
@media screen and (max-width: 540px) {
  .modal-body img{
    width: 16px;
  }
}
@media screen and (max-width: 414px) {
  .modal-body img{
    width: 13px;
  }
}
</style>
