<template>
  <div class="modal fade" id="transactionResult" role="dialog">
    <div class="modal-dialog modal-md modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="container py-4 text-center">

          <div v-if="is_success===true">
            Payment was successful.
          </div>
          <div v-else>
            Sorry,your payment was declined. <br> Please contact our technical support at <a href='mailto:registration@rcd2022manila.com.p'>registration@rcd2022manila.com.ph</a>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="submit btn btn-blue corner-22px text-uppercase" @click="close">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
		return {
      is_success: this.$store.state.members.is_success,
    }
  },
  methods:{
    close(){
      this.$store.commit("members/SET_IS_FROM_IDEAPAY", false);
      $('#transactionResult').modal('hide');
      $(".modal-backdrop").remove();
    }
  },
};
</script>
<style lang="scss" scoped>
  .modal-header{
    background-color: #0776BC;
  }
  .container{
    // color: #0776BC;
    font-size: 20px;
  }
</style>