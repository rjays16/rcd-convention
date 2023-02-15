<template>
  <div
    class="modal fade"
    id="teaser-video"
    tabindex="-1"
    aria-labelledby="teaser-video-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div
        class="modal-content"
        style="border-radius: 0px"
      >
        <div class="position-relative">
          <button
            class="position-absolute close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <div>x</div>
          </button>
        </div>
        <div class="modal-body" style="z-index: 9999 !important">
          <div class="position-relative" style="padding: 56.25% 0 0 0">
            <iframe
              class="lazyload"
              loading="lazy"
              src
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              ref="teaserIframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      let self = this
      $('#teaser-video').on('show.bs.modal', function (e) {
        self.$refs.teaserIframe.src = "https://player.vimeo.com/video/694282347"
      })
    },
    hookCloseEvent() {
      let self = this
      $('#teaser-video').on('hide.bs.modal', function (e) {
        self.$refs.teaserIframe.src = null
      })
    }
  },
  mounted() {
    this.hookCloseEvent();
  },
};
</script>

<style lang="scss" scoped>
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.close {
  top: -15px;
  right: -15px;
  background-color: red;
  border-radius: 100%;
  color: white;
  border-style: none;
  width: 35px;
  height: 35px;
  z-index: 99999 !important;
  display: flex;
  div {
    margin-top: 2px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>