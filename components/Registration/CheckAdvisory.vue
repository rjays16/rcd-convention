<template>
  <section>
    <div class="p-2 text-cobalt border-solid">
      <div class="container">
        <div class="row ">
          <b class="avenir-regula text-center">PLEASE CHECK THIS ADVISORY:</b>
          <small class="avenir-regular text-center">
            Welcome! To ensure a smooth registration and payment process, download web browsers like<br><span class="bold">Chrome</span>
            and Mozilla Firefox. If you are using a Mac or iOS Device (iPhone) and a Safari Browser, there is a built in payment pop-up blocker.
            You will be guided accordingly.</small>
          <small class="avenir-regular text-center mb-3">
            Alternatively, you may watch this quick video if you wist to register using your Safari web browser.</small>
            <p class="avenir-regular text-center">
              <a href="#macOS" data-toggle="modal" data-target="#macOS">Guide for Mac OS</a>
            <span class="color-gray">|</span>
            <a href="#ios" data-toggle="modal" data-target="#ios">Guide for iOS Device (iPhone)</a></p>
        </div>
      </div>
    </div>
    <ModalsMethodMacOS/>
    <ModalsMethodIOS/>
  </section>
</template>

<script>
export default {
  name: "CheckAdvisory"
}
</script>

<style scoped>
.text-cobalt{
  margin-top: -10%;
  width: 45%;
  margin-left: 27%;
  color: black;
  background-color: #FFF9BD;
}
@media all and (max-width: 1024px){
  .text-cobalt{
    margin-top: 0%;
  }
}
@media all and (max-width: 912px){
  .text-cobalt{
    margin-top: -20%;
  }
}
@media all and (max-width: 375px){
  .text-cobalt{
    margin-top: -10%;
  }
}
</style>
