<template>
<section>
  <!-- Modal -->
  <div class="modal fade" id="participant_eposter" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title inter-regular">List Participants On This Category:<br><span class="inter-bold">Title: </span>{{ select_category }}</h5>
          <button type="button" class="close bg-065E99" data-dismiss="modal" aria-label="Close">
            <a href="#" class="bg-065E99" type="button" data-bs-dismiss="modal" aria-label="Close"><img src="/assets/images/vcc/eva_close-circle-outline.png"></a>
          </button>
        </div>
        <div class="modal-body">
          <div v-for="list in participants" :key="list.id" class="text-uppercase">
            <div v-if="list.abstract_category === select_category">
              <div v-for="(author, index) in list.authors" :key="index" class="avenir-regular">
                <img src="/assets/images/vcc/man.png"><span class="participant inter-regular"> {{author.last_name}}, {{author.first_name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import $ from "jquery";

export default {
  props:["select_category"],
  name: "Participants",
  data() {
    return {
      participants: [{}]
    }
  },
  methods: {
    getAllCategories() {
      this.$store.dispatch('vcc/getList')
        .then(res => {
          this.participants = res.data;

        })
    },
  },
  mounted() {
    this.getAllCategories();
  }
}
</script>

<style scoped>
.modal {
  margin-top: 5%;
}
.modal-content{
  background-color: #065E99;
  border: solid 2px;
}
h5{
  color: white;
}
.participant{
  color: white;
}
.close {
  border: none;
  float: right;
}
</style>
