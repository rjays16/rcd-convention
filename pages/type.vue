<template>
  <div>
     <HomeBanner />
     <Navbar :page_title="$route.name"/>

    <div class="mh-75">
        <AbstractType />
    </div>
  </div>
</template>

<script>
export default {
name: "type"
}
</script>

<style scoped>

</style>
