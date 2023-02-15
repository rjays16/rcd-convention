<template>
    <div>
        <HomeBanner />
        <Navbar :page_title="$route.name"/>

        <div class="mh-75">
            <AbstractType v-if="current_step == 1" />
            <AbstractForm v-if="current_step == 2" :abstract_type="abstractType" :category="category" :study="study"/>
            <AbstractThankYou v-if="current_step == 3" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
	layout: "home",
	data() {
		return {
            current_step: 1,
      abstractType: null,
        }
	},
    methods: {
        goToStep(step) {
            this.current_step = step
        },
      Abstract_type(type) {
          this.abstractType = type
      }
    },
    computed: {
	    ...mapGetters({
        category: 'members/getCategoryList',
        study: 'members/getStudyList',
      })
    },
  mounted() {
    this.$store.dispatch('members/getCategoryList') // Get list of categories
    this.$store.dispatch('members/getStudyList') // Get list of study design
  }
};
</script>
