<template>
    <section id="abstract-type" class="avenir-bold">
        <div class="container pb-5">
            <div class="contents d-flex flex-column justify-content-center">
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center">
                    <div class="text-left col-md-6 py-5 mx-auto opensans text-center">
                        <p class="avenir-regular fw-bold">
                            Please select the category of your submission below. For the complete list of guidelines, <a class="text-decoration-none" href="/abstract-guidelines">click here.</a>
                        </p>
                    </div>

                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mb-4 mx-2" @click="setAbstractType(1)">
                        E-Poster Exhibit
                    </button>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mx-2"
                            @click="setAbstractType(2)"
                            v-if="type_id === 4 || type_id === 6">
                        Free Paper Presentation
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  data(){
    return {
      type_id: null,
    }
  },
    methods: {
        setAbstractType(type) {
            this.$store.commit("members/SET_ABSTRACT_TYPE", type);
            this.$parent.goToStep(2)
            this.$parent.Abstract_type(type)

        },
      getUser(){
        this.$store.dispatch("auth/getUser")
        .then(res => {
          let user_data = res.data.member.type
          this.type_id = user_data
        })
      },
    },
  mounted() {
    this.getUser()
  }
}
</script>
<style lang="scss" scoped>
#abstract-type {
    button {
        font-size: 1.5rem;
        letter-spacing: 1px;
        width: 25%;
    }
    @media only screen and (max-width: 767px) {
        p{
                text-align: center;
            }
            button {
                width: 75% !important;
            }
    }
}
</style>
