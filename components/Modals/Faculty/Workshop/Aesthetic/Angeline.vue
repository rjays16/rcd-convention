<template>
  <div class="modal fade" id="angeline_anning_yong" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-body">
          <img src="/assets/images/faculty/Workshop_Speakers/Aesthetic/modals_angeline_anning_yong.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Angeline"
}
</script>

<style scoped lang="scss">
.modal-body{
  padding: 0rem;
}

.modal-body{
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 75%;
  img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
.close{
  width: 2em;
  height: 2em;
  position: absolute;
  right: -2em;
  span{
    font-size: 1em;
  }
  @media screen and (max-width:550px){
    display: none;
  }
}

</style>
