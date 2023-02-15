<template>
  <section>
    <div class="modal fade" id="maria_tricia_manglongat_malahito" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body">
            <img src="/assets/images/faculty/Symposium_Speakers/Symposium/modals_maria_tricia_manglongat_malahito.png"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Maria"
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

