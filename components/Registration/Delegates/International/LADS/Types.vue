<template>
    <section id="international-lads-type">
        <div class="container">
            <div class="contents d-flex flex-column justify-content-center avenir-medium py-5">
                <div class="text-center mb-3">
                    <h1 class="fw-bold">International LADS</h1>
                </div>
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center text-white">
                    <button class="btn btn-blue of-btn py-2 corner-22px mb-4" @click="setTypetoINTLADSOFFICER()">
                        Officer of LADS <br/> Member Countries
                    </button>
                    <button class="btn btn-blue of-btn py-2 corner-22px mb-4" @click="setTypetoINTNONLADSMembers()">
                        LADS Members
                    </button>
                </div>
                <div class="container my-5">
                    <div class="row text-center">
                        <div class="inline-block avenir-medium">
                            <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" @click="$parent.goToStep(4)">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        setTypetoINTLADSOFFICER() {
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[8]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "International Delegates Registration (Officer of LADS Member Countries)");
            this.$parent.goToStep(6);
        },
        setTypetoINTNONLADSMembers() {
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[1]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "International Delegates Registration (LADS Members)");
            this.$parent.goToStep(6);
        },
    },
}
</script>

<style lang="scss" scoped>
#international-lads-type {
    .contents {
        min-height: 75vh;
        button {
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
        .of-btn{
            width: 30%;
        }
    }
}
@media only screen and (max-width: 767px) {
    #international-lads-type {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
        }
    }
}
</style>
