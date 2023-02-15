<template>
  <section>
  <div class="container mb-5">
    <div class="row mb-5">
      <div class="mb-5"></div>
        <center><h1 class="text-uppercase color-005B97">system update advisory </h1></center>
      </div>
    <div class="row">
      <div class="p-2 text-cobalt border-solid">
        <div>
            <div class="text-center font-md-12">
              <div class="mb-5"></div>
                <p class="black">Thank you for your interest on joining the RCD 2022 Virtual Convention.</p><br>
                <p>Registration will be opened again on June 10, 2022 at 03:00 pm (PST).</p>
                <p>For inquiries about your registration, please send us email to:<br>registration@rcd2022manila.com.ph.</p>
                <p>Thank you for your patience.</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <center><button class="btn btn-blue col-lg-4 avenir-bold fs-5 corner-20px corner-rounded text-uppercase" @click="$router.push('/')">Back to home</button></center>
  </div>
  </section>
</template>

<script>
export default {
  name: "Advisory"
}
</script>

<style scoped>
.text-cobalt p {
  color: black;
}
.corner-rounded{
  border-radius: 20px !important;
}
</style>
