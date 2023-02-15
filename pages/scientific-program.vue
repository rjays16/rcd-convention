<template>

  <div>
    <HomeBanner />
    <Navbar :page_title="$route.name"/>

    <div class="mh-75">
      <div class="container mt-5">
        <div class="shadow p-3 mb-5 bg-white rounded">
            <ScientificProgramSubject/>
          <Reconnaissance/>
<!--          <ScientificProgramEDB/>-->
          <Controversies/>
<!--          <ScientificProgramAesthetic/>-->
          <DialoguesInDermatology/>
        </div>
      </div>
      <div class="container mt-5">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <ScientificProgramEDB/>
          <ScientificProgramAesthetic/>
        </div>
      </div>
      <div class="container mt-5">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <ScientificProgramSymposium/>
          <ScientificProgramIndustry/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reconnaissance from "~/components/ScientificProgram/Reconnaissance";
import Controversies from "~/components/ScientificProgram/Controversies";
import DialoguesInDermatology from "~/components/ScientificProgram/DialoguesInDermatology";
export default {
  components: {DialoguesInDermatology, Controversies, Reconnaissance},
  layout: "home",
  data() {
    return {
      page_title: "Scientific Program"
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  line-height: 50px;
}
.bg-gray{
  background-color: #F2F3F5;
}
</style>
