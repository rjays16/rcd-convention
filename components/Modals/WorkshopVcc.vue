<template>
  <div class="modal fade" id="workshop" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-lg adjust-top">
      <div class="modal-content">
        <div class="modal-header color-red">
          <h3 class="text-uppercase avenir-bold text-white">not eligible to join workshops</h3>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="content mb-5">
                <b class="avenir-regular">We are sorry, but you choose not to join of the two (2) or both of our featured Workshops.</b><br><br>
                <center><p>Please Click back to "Lobby" to visit more of our convention center</p></center>
              </div>
              <div class="button">
                <center><button type="button" class="btn btn-blue corner-22px text-uppercase text-uppercase" data-dismiss="modal" @click="Back_To_Lobby">back to lobby</button></center>
              </div>
            </div>
          </div>
        </div>
<!--        <div class="modal-footer">-->
<!--          <button type="button" class="btn btn-blue corner-22px text-uppercase" data-dismiss="modal">Close</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
name: "WorkshopVcc",
  data(){
    return {
      is_preview: false,
    }
  },
  methods: {
  openModal(is_preview) {
    this.is_preview = is_preview
    $('#workshop').modal('show');
    $('#workshop').modal({backdrop: 'static', keyboard: false})

  },
    Back_To_Lobby(){
      this.$router.push('/virtual-convention-center/lobby/')
    }
  }
}
</script>

<style scoped>
.color-red {
  background-color: #f83e3e;
}
.adjust-top {
  margin-top: 23%;
}
.text-white {
  margin-left: 25%;
  font-size: 1.3rem
}
.modal-content{
  width: 100%;
}
</style>
