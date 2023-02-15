<template>
  <div class="modal fade" id="cancelledWorkshop" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="container py-4 text-center">
            <span>Are you sure you will not be joining our Workshops? By clicking "Agree"
              you will no longer be eligible to join a Workshop. This action cannot be changed.</span>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-blue corner-22px text-uppercase submit" id="btn-submit-cancellation" @click="submit(user_id,workshop_type)">Agreed</button>
          <button type="button" class="btn btn-blue corner-22px text-uppercase" data-dismiss="modal" @click="close">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CancelledWorkshop",
  props:[ "workshop_type", "user_id"],
  methods:{
    submit(user_id,workshop_type){
      this.$store.dispatch("members/cancel", {user_id:user_id, workshop_type: workshop_type})
      .then(res => {
        this.$message.success(res.data.message)
        this.$parent.isBusy = true
        this.$parent.getOrderFees()
      })
      .catch(err => {
        console.error(err)
        this.$message.error('Sorry order cancellation was not successful')
      })
      this.close()
    },
    close(){
      this.$store.commit("members/SET_IS_FROM_IDEAPAY", false);
      $('#cancelledWorkshop').modal('hide');
      $(".modal-backdrop").remove();
    },
  },
};
</script>
<style lang="scss" scoped>
  .modal-header{
    background-color: #0776BC;
  }
  .container{
    color: #0776BC;
  }
</style>