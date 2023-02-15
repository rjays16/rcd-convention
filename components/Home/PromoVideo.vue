<template>
  <div>
    <ModalsTeaserVideo ref="teaserVideoModal" />
    <section id="promo-video" class="text-white fw-bold">
      <div class="position-relative overflow-hidden">
        <div>
          <img
            src="/assets/images/bg-promo-video.png"
            alt=""
            class="w-100 d-none d-md-block object-cover object-center"
          />
          <img
            src="/assets/images/bg-promo-video-mobile.png"
            alt=""
            class="w-100 d-md-none object-cover object-center"
          />
        </div>
        <div
          class="
            d-md-inline-flex
            align-items-center
            position-absolute
            top-0
            bottom-0
            left-0
            right-0
            w-100
            padding-16
          "
        >
          <div class="d-none d-md-inline-block w-25 m-2">
            <button
              class="border-none bg-transparent rounded-none btn-play-teaser"
              @click="openModal"
            >
              <img
                src="/assets/images/gg_play-button-o.png"
                alt=""
                class="h-auto w-100"
              />
            </button>
          </div>
          <div>
            <div
              class="avenir-regular fw-bold subtitle font-xl-14 font-3xl-15 text-uppercase">
              The 25th Regional Conference of Dermatology goes Online
            </div>
          </div>
        </div>
        <div>
          <div
            class="
              d-md-none
              mt-5
              pt-md-0
              position-absolute
              mobile-play
              text-center
              w-100
            "
          >
            <button
              class="
                d-inline-block
                border-none
                bg-transparent
                rounded-none
                margin-bottom-10
                btn-play-teaser
              "
              @click="openModal"
            >
              <img
                src="/assets/images/gg_play-button-o.png"
                alt=""
                class="w-75 w-sm-100 w-md-50 h-auto mx-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$refs.teaserVideoModal.openModal()
    }
  }
};
</script>

<style lang="scss" scoped>
#promo-video {
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: calc(1.275rem + 0.3vw);
    max-width: 80%;
  }
  .btn-play-teaser {
    &:focus-visible,
    &:focus,
    &:active {
      outline: none!important;
      box-shadow: none;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      font-size: 10vw;
      width: 50%;
      font-weight: 600;
    }
    .subtitle {
      margin-top: 15px;
      font-size: calc(1.275rem + 2vw);
      width: 100%;
      max-width: 100%;
      letter-spacing: 0.035em;
    }
    .mobile-play {
      bottom: 5%;
      img {
        width: 75% !important;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .mobile-play {
      img {
        width: 40% !important;
      }
    }
    .subtitle {
      font-size: calc(0.8rem + 1vw);
      width: 100%;
      text-align: center;
    }
    .object-cover.object-center {
      height: 380px;
    }
  }
  @media only screen and (max-width: 280px) {
    .subtitle {
      font-size: calc(1rem);
    }
  }
}
</style>