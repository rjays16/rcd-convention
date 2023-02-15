<template>
  <div class="mh-75">
    <Navbar :page_title="'Thank You'"/>
    <AbstractThankYou/>
  </div>
</template>

<script>
export default {
    // middleware: "auth",
	layout: "abstract-thank-you",
}
</script>