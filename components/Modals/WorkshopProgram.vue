<template>
  <div class="modal fade" id="program" role="dialog" >
    <div class="modal-dialog modal-lg modal-dialog-centered ">
      <div class="modal-content">
        <div class="container py-4 ">
            <span v-if="ws_to_attend === 1"><img class="img-fluid px-5" src="/assets/images/workshop-aesthetic.png"/></span>
            <span v-else><img class="img-fluid px-5" src="/assets/images/workshop-laser.png" /></span>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-blue corner-22px text-uppercase" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkshopProgram",
  props: ['ws_to_attend'],
};
</script>