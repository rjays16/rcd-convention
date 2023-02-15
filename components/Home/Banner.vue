<template>
  <section id="banner">
    <div class="position-relative">
      <div>
        <img
          src="/assets/images/about-cover.png"
          alt=""
          class="w-100 d-none d-lg-block object-cover object-center"
        />

        <img
          src="/assets/images/about-cover-mobile.png"
          alt=""
          class="w-100 d-lg-none object-cover object-center"
        />
      </div>
      <div class="position-absolute bottom-0">
        <div
          class="
            padding-bottom-10 padding-bottom-md-15 padding-bottom-lg-8
            d-flex
          "
        >
          <img
            src="/assets/images/banner.png"
            alt=""
            class="w-100 w-lg-50 mx-auto"
          />
        </div>
        <div class="py-2 text-white nav-title position-relative font-semibold">
          <div
            class="
              position-absolute
              d-block
              margin-left-5
              -t-xs-1 -t-md-0
              b-md-1
              -b-lg-90 -b-2xl-80
              -bg-3xl-100
            "
          >
            <img
              src="/icon-pds.png"
              alt=""
              class="
                width-18
                width-sm-20
                width-md-22
                width-lg-25
                width-2xl-27
                width-3xl-29
                margin-bottom-1
                icon-pds
              "
            />
          </div>
          <div
            class="
              font-sm-11
              font-md-14
              font-lg-11
              font-xl-12
              font-2xl-13
              font-3xl-15
              padding-left-19
              padding-left-sm-22
              padding-left-md-23
              padding-left-lg-26
              padding-left-xl-27
              padding-left-3xl-29
              margin-left-3xl-11
              padding-x-2
              tagline
              avenir-regular
              text-center
            "
          >
            Reconnaissance, Controversies, Dialogues in Dermatology
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#banner {
  .web-logo {
    width: 17%;
  }
  .nav-title {
    background: linear-gradient(
      180deg,
      #3f63ad 0%,
      #005b97 0.01%,
      rgba(62, 155, 207, 0.24) 30.21%,
      rgba(0, 91, 151, 0.22) 48.96%,
      #0776bc 100%
    );
  }
  @media only screen and (min-width: 993px) {
    .icon-pds {
      position: relative;
      top: -55%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .icon-pds {
      position: relative;
      top: -50%;
    }
  }
  @media only screen and (min-width: 1920px) {
    .icon-pds {
      margin-left: 100%;
    }
  }
  @media only screen and (max-width: 540px) and (height: 720px) {
    .icon-pds {
      width: 4.6rem;
    }
    .tagline {
      padding: 0 0 0 26%;
      font-size: 1.2em;
      position: initial;
      width: 79%;
    }
  }
  @media only screen and (max-width: 280px) and (height: 653px) {
    .icon-pds {
      width: 3rem;
    }
    .tagline {
      font-size: 11px;
    }
  }
}

</style>
