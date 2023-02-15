<template>
  <div>
    <HomeBanner />
    <Navbar :page_title="$route.name"/>

    <div class="mh-75">
      <div class="container mt-5">
        <FacultyPlenaryReconnaissance/>
        <FacultyPlenaryControversies/>
        <FacultyPlenaryDialogues/>
        <FacultyWorkshopLaser/>
        <FacultyWorkshopAesthetic/>
        <FacultySymposium1/>
        <FacultySymposium2/>
        <FacultySymposium3/>
        <FacultySymposium4/>
        <FacultySponsorSponsors1/>
        <FacultySponsorSponsors2/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "faculty",
  layout: "home",
}
</script>

<style scoped>

</style>
