<template>
    <section id="registration-type" class="avenir-medium text-white fw-bold">
        <div class="container ">
            <div class="contents d-flex flex-column justify-content-center">
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center mb-5">
                    <div class="text-center col-md-8 py-5">
                        <h1 class="avenir-regular">Welcome to the <span>25th RCD Registration Portal!</span>
                        Please choose a category to start.</h1>
                    </div>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="setTypetoSpeaker(1)">
                        Speakers/Session, <br> Workshop Chairs
                    </button>
                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px" @click="goToStep(3)">
                        Delegates
                    </button>
                </div>
            </div>
        </div>
<!--      <RegistrationCheckAdvisory/>-->
    </section>
</template>

<script>
export default {
    methods: {
        goToStep(step) {
            this.$parent.goToStep(step);
        },
        setTypetoSpeaker(from){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[0]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Speakers/Session, Workshop Chairs Registration");
            this.$parent.goToStep(2);
        },
    },
}
</script>

<style lang="scss" scoped>
#registration-type {
    .contents {
        min-height: 75vh;
        h1{
            font-size: 30px;
            line-height: 30px;
            color: black;
            span{
                font-weight: 700;
            }
        }
        button {
            font-size: 1.25rem;
            letter-spacing: 1px;
        }
    }
}
@media only screen and (max-width: 767px) {
    #registration-type {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
        }
    }
}
.text-cobalt {
  color: black;
}
</style>
